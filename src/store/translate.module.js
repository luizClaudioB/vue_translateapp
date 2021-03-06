import ApiService from "../common/api-service";
import {
    FETCH_LANGUAGES,
    TRANSLATE_TEXT,
    DETECT_LANGUAGE,
    TARGET_LANGUAGE,
    ACTUAL_LANGUAGE
} from "./actions.type";
import { CHANGE_TRANSLATED_TEXT, SET_LANGUAGES, SET_ACTUAL_LANGUAGE, SET_TARGET_LANGUAGE } from "./mutations.type";

const state = {
  languages: [],
  translatedText: "",
  actualLanguage: "",
  targetLanguage: ""
};

const getters = {
  languages(state) {
    return state.languages;
  },

  specificLanguage: (state) => (code) => {
      return state.languages.find((i) => i.code === code)
  },

  actualLanguage(state) {
    return state.actualLanguage;
  },

  targetLanguage(state) {
    return state.targetLanguage;
  },

  translatedText(state) {
    return state.translatedText;
  }
};

const actions = {

  [FETCH_LANGUAGES](context) {
    return ApiService.get("/languages")
      .then(({ data }) => {
        context.commit(SET_LANGUAGES, data);
        return data;
      })
  },

  [TRANSLATE_TEXT](context, params) {
    return ApiService.post("/translate", { q: params, source: state.actualLanguage, target: state.targetLanguage })
      .then(({ data }) => {
        context.commit(CHANGE_TRANSLATED_TEXT, data)
        return data;
      })
  },

  [DETECT_LANGUAGE](context, params) {
    return ApiService.post("/detect", { q: params })
      .then(({ data }) => {
        context.commit(SET_ACTUAL_LANGUAGE, data)
        return data;
      })
  },

  [ACTUAL_LANGUAGE](context, params) {
    if(params)
    context.commit(SET_ACTUAL_LANGUAGE, params);
    return params;
  },

  [TARGET_LANGUAGE](context, params) {
    if(params)
    context.commit(SET_TARGET_LANGUAGE, params)
    return params;
  }

};

const mutations = {
  [SET_LANGUAGES](state, languagesList) {
    state.languages = languagesList;
  },

  [SET_ACTUAL_LANGUAGE](state, actualLanguage) {
    state.actualLanguage = actualLanguage;
  },

  [SET_TARGET_LANGUAGE](state, targetLanguage) {
    state.targetLanguage = targetLanguage; 
  },

  [CHANGE_TRANSLATED_TEXT](state, newText) {
    state.translatedText = newText.translatedText;
  },
};

export default {
  state,
  actions,
  mutations,
  getters
};

// TYPESCRIPT VERSION

// import ApiService from "../common/api-service";
// import {
//     FETCH_LANGUAGES,
//     TRANSLATE_TEXT
// } from "./actions.type";
// import { CHANGE_TRANSLATED_TEXT, SET_LANGUAGES } from "./mutations.type";
// import { TranslateState, Language, TranslatedText } from '../models/languages.interface'

// const state: TranslateState = {
//   languages: [],
//   translatedText: ""
// };

// const getters = {
//   languages(state: TranslateState): Language[] {
//     return state.languages;
//   },

//   specificLanguage(state: TranslateState, code: any): Language {
//       const temp: any = state.languages.find((i: Language) => i.code === code)

//       return temp ? temp : null;
//   }
// };

// const actions = {

//   [FETCH_LANGUAGES](context: any): Promise<Language[]> {
//     return ApiService.get("/languages")
//       .then(({ data }: any) => {
//         context.commit(SET_LANGUAGES, data);
//         return data;
//       })
//   },

//   [TRANSLATE_TEXT](context: any, params: any): Promise<TranslatedText> {
//     return ApiService.post("/translate", params)
//       .then(({ data }: any) => {
//         context.commit(CHANGE_TRANSLATED_TEXT);
//         return data;
//       })
//   }

// };

// const mutations = {
//   [SET_LANGUAGES](state: TranslateState, languagesList: Language[]) {
//     state.languages = languagesList;
//   },

//   [CHANGE_TRANSLATED_TEXT](state: TranslateState, newText: TranslatedText) {
//     state.translatedText = newText.translatedText;
//   }
// };

// export default {
//   state,
//   actions,
//   mutations,
//   getters
// };
