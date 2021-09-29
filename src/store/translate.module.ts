import ApiService from "../common/api-service";
import {
    FETCH_LANGUAGES,
    TRANSLATE_TEXT
} from "./actions.type";
import { CHANGE_TRANSLATED_TEXT, SET_LANGUAGES } from "./mutations.type";
import { TranslateState, Language } from '../models/languages.interface'

const state: TranslateState = {
  languages: [],
  translatedText: ""
};

const getters = {
  languages(state: TranslateState): Language[] {
    return state.languages;
  },

  specificLanguage(state: TranslateState, code): Language {
      return state.languages.find((i) => i.code === code);
  }
};

const actions = {

  [FETCH_LANGUAGES](context): Promise<Language[]> {
    return ApiService.get("/languages")
      .then(({ data }) => {
        context.commit(SET_LANGUAGES, data);
        return data;
      })
  },

  [TRANSLATE_TEXT](context, params) {
    return ApiService.post("/translate", params)
      .then(({ data }) => {
        context.commit(CHANGE_TRANSLATED_TEXT);
        return data;
      })
  }

};

const mutations = {
  [SET_LANGUAGES](state: TranslateState, languagesList: Language[]) {
    state.languages = languagesList;
  },

  [CHANGE_TRANSLATED_TEXT](state: TranslateState, newText) {
    state.translatedText = newText.translatedText;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
