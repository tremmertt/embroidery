import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import moment from "moment-timezone";
import TRANSLATIONS_VN from "./lang/vn.json";
import TRANSLATIONS_EN from "./lang/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      vn: {
        translation: TRANSLATIONS_VN,
      },
    },
  });
i18n.init({
  interpolation: {
    format: function (value, format, lng) {
      if (value instanceof Date) return moment(value).format(format);
      if (typeof value === "number") return new Intl.NumberFormat().format(value);
      return value;
    },
  },
});
export { i18n };
console.log("init i18n");
