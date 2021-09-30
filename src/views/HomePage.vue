<template>
    <div class="homePage">
        <span class="titleStyle"> {{ FROM_TITLE }} </span>
        <span v-if="actualLanguage" class="titleStyle"> {{ TO_TITLE }} </span>
        <LanguagesList :isTarget="isTarget" @pick-language="listenToChanges"></LanguagesList>
        <TextInputComponent></TextInputComponent>
    </div>
</template>

<script>
import LanguagesList from '@/components/LanguagesList.vue'
import TextInputComponent from '@/components/TextInput.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'HomePage',
    data() {
        return {
            FROM_TITLE: String,
            TO_TITLE: String,
            isTarget: false
        }
    },
    mounted() {
        this.FROM_TITLE = "Translate from..."
        this.TO_TITLE = "to..."
    },
    components: {
        LanguagesList,
        TextInputComponent
    },
    computed: {
        ...mapGetters(["actualLanguage", "targetLanguage", "specificLanguage"])
    },
    methods: {
        listenToChanges(e) {
            if(this.checkLanguages()) {
                this.isTarget = !this.isTarget;
                return this.changeTitle(e);
            }
        },

        checkLanguages() {
            return (!this.actualLanguage || !this.targetLanguage);
        },
        
        changeTitle(e) {
            if(!(this.actualLanguage != "")) {
                return this.FROM_TITLE = `${this.FROM_TITLE} ${this.specificLanguage(e).name}`;
            } else {
                return this.TO_TITLE = `${this.TO_TITLE} ${this.specificLanguage(e).name}`;
            }
        }
    }
}
</script>

<style lang="scss">
    @import "~@fontsource/abel/index.css";
    .homePage {
        font-family: "abel"; 
    }
    .titleStyle {
        font-size: 30px;
    }
</style>