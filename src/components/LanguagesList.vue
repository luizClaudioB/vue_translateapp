<template>
    <div id="language-list">
        <div class="listContainer">
            <div class="languageContainer" v-for="language in languages" v-bind:key="language.code">
                <span class="languageName" :click="selectLanguage(language.code)"> {{ language.name }} </span>
            </div>
        </div>
    </div> 
</template>

<script>

import { FETCH_LANGUAGES } from "../store/actions.type";
import { mapGetters } from 'vuex'

export default {
    name: 'LanguagesList',
    data() {
        return {
            selectedLanguage: String
        }
    },
    computed: {
        ...mapGetters(["languages", "specificLanguage"])
    },
    mounted() {
        this.fetchLanguages();
    },
    methods: {
        fetchLanguages() {
            this.$store.dispatch(FETCH_LANGUAGES);
        },
        selectLanguage(language) {
            this.selectedLanguage = language;
        }
    }
}

</script>

<style>
    .listContainer {
        justify-content: center; 
        display: flex; 
        padding: 2%;
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
</style>