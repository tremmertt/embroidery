import { Dispatch } from "redux";
import { SET_LANGUAGE } from "./type/LanguageType";

const setLanguage = (lang: string) => {
  return async (dispatch: Dispatch) => {
    console.log("set lang", lang);
    dispatch({
      type: SET_LANGUAGE,
      lang: lang,
    });
  };
};

const LanguageAction = { setLanguage };
export default LanguageAction;
