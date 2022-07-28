import { SET_LANGUAGE } from "../actions/type/LanguageType";

export interface IStateLanguage {
  lang: string;
}

const stateDefault: IStateLanguage = {
  lang: "en",
};

export const LanguageReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      state.lang = action.lang;
      return { ...state };
    }

    default:
      return { ...state };
  }
};