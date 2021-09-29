<template>
    <div id="link-tree-items">
        <span> Idiomas suportados: </span>
        <div v-for="language in languages" v-bind:key="language">
            <span :click="selectLanguage(language.code)"> {{ language.name }} </span>
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
        initSelectedLanguage() {
            if(!this.selectedLanguage && this.languages) {
                this.selectedLanguage = this.specificLanguage("en")
            }
        },
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