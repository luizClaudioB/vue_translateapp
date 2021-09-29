export interface TranslateState {
    languages: Language[],
    translatedText: string
}

export interface Language {
    code: string,
    name: string
}