<template>
    <div id="language-list">
        <div class="listContainer">
            <div class="languageContainer" v-for="language in languages" v-bind:key="language.code">
                <span 
                    v-bind:class="((targetLanguage === language.code) || (actualLanguage === language.code)) ? 'selectedLanguage' : 'languageName'" 
                    @click="selectLanguage(language.code)"
                > 
                    {{ language.name }} 
                </span>
            </div>
        </div>
    </div> 
</template>

<script>

import { FETCH_LANGUAGES, TARGET_LANGUAGE, ACTUAL_LANGUAGE } from "../store/actions.type";
import { mapGetters } from 'vuex'

export default {
    name: 'LanguagesList',
    props: {
        isTarget: Boolean
    },
    computed: {
        ...mapGetters(["languages", "targetLanguage", "actualLanguage"])
    },
    mounted() {
        this.fetchLanguages();
    },
    methods: {
        fetchLanguages() {
            this.$store.dispatch(FETCH_LANGUAGES);
        },

        checkLanguages() {
            return (!this.actualLanguage || !this.targetLanguage);
        },

        setAction() {
            return !this.isTarget ? ACTUAL_LANGUAGE : TARGET_LANGUAGE;
        },

        selectLanguage(language) {  
            if(this.checkLanguages()) {
                this.$emit('pick-language', language);
                this.$store.dispatch(this.setAction(), language);
            }
        }
    }
}

</script>

<style>
    .listContainer {
        justify-content: center; 
        display: flex; 
        padding: 2%;
        font-size: 20px;
    }
    .languageContainer {
        border-right-style: double;
        border-right-color: violet;
        opacity: 0.6;
        transition: 0.3s;
    }
    .languageContainer:hover {
        opacity: 1;
    }
    .languageName {
        margin: 10px;
    }
    .selectedLanguage {
        font-weight: bold;
        color: darkviolet;
        margin: 10px;

    }
</style>