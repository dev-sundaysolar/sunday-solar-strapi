import { spawn } from "child_process";
import fs from "fs";
import glob from "glob";
import { Storage } from "@google-cloud/storage";

async function uploadFile(filename: string) {
  const storage = new Storage({
    credentials: {
      type: "service_account",
      project_id: process.env.SERVICE_ACCOUNT_PROJECT_ID,
      private_key_id: process.env.SERVICE_ACCOUNT_PRIVATE_KEY_ID,
      private_key: process.env.SERVICE_ACCOUNT_PRIVATE_KEY,
      client_email: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,
      client_id: process.env.SERVICE_ACCOUNT_CLIENT_ID,
      universe_domain: "googleapis.com",
    },
  });

  try {
    const [file] = await storage
      .bucket(process.env.BACKUP_BUCKET_NAME)
      .upload(filename);

    console.log(
      `File uploaded successfully! File ID: ${JSON.stringify(file, null, 2)}`
    );
  } catch (error) {
    console.error("Error uploading file:", error.message);
  }
}

function runCommandWithInput() {
  return new Promise((resolve) => {
    const command = "strapi";
    const args = ["export"];

    const child = spawn(command, args, { stdio: "pipe" });

    // Listen for output from the command
    child.stdout.on("data", (data) => {
      if (data.includes("Please enter an encryption key")) {
        child.stdin.write(process.env.STRAPI_BACKUP_PASSWORD + "\n");
        child.stdin.end();
      }
    });

    child.stdout.on("end", () => {
      resolve(true);
    });

    child.stdout.on("close", (data) => {
      console.log("on end", data);
    });

    // Handle errors
    child.stderr.on("data", (data) => {
      console.error(`Error: ${data}`);
    });

    child.on("message", (message) => {
      console.log(message, "message");
    });

    // Check when the process exits
    child.on("close", (code) => {
      if (code === 0) {
        resolve(true);
      } else {
        console.error(`Command failed with exit code ${code}`);
      }
    });
  });
}

function removePrevBackups() {
  return new Promise((resolve, reject) => {
    glob("export_*.tar.gz.enc", (err, files) => {
      if (err) {
        reject(err);
        console.error("Error finding files:", err);
        return;
      }

      files.forEach((file) => {
        try {
          fs.unlinkSync(file);
          console.log(`Deleted: ${file}`);
        } catch (err) {
          reject(err);
        }
      });
      resolve(true);
    });
  });
}

function findLatestBackup() {
  return new Promise<string>((resolve, reject) => {
    glob("export_*.tar.gz.enc", (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      if (files.length > 0) {
        resolve(files[0]);
      } else {
        reject(new Error("No files found!"));
      }
    });
  });
}

async function getBackup() {
  try {
    await removePrevBackups();
    await runCommandWithInput();
    const latestBackup = await findLatestBackup();
    await uploadFile(latestBackup);
  } catch (e) {
    console.log("Get Backup Error:", e.message);
  }
}

export default {
  backupEveryMondayAt3AM: {
    task: () => {
      console.log("CRON JOB is here!");
      getBackup();
    },
    options: {
      // rule: "*/5 * * * * *", // every 5 seconds
      // rule: "* * * * *", // every minute
      rule: "0 3 * * 1", // every monday at 3am
      // rule: "*/5 * * * *", // every 5 minutes
    },
  },
};
