import type { StrapiApp } from "@strapi/strapi/admin";
// @ts-ignore
import cropperjscss from "cropperjs/dist/cropper.css?raw";

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    const head = document.head || document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.innerHTML = cropperjscss;
    head.appendChild(style);
  },
};
