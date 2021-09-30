<template>
    <div id="text-input">
        <div id="text-input-container">
            <textarea v-model="actualText" spellcheck="false" inputmode="latin" rows=10 cols="70" wrap="soft"> </textarea>
            <TranslateButton :text="actualText"> GO! </TranslateButton>
            <textarea v-model="translatedText" readonly="writable" inputmode="latin" rows=10 cols="70" wrap="soft"> </textarea>
        </div>
    </div>
</template>

<script>

import TranslateButton from "./TranslateButton.vue"
import { mapGetters } from 'vuex';

export default {
    name: 'TextInputComponent',
    data() {
        return {
            actualText: ""
        }
    },
    components: {
        TranslateButton
    },
    computed: {
        ...mapGetters(["translatedText"])
    }
}

</script>

<style lang="scss">
    @import "~@fontsource/abel/index.css";
    div#text-input-container {
        display: flex;
        justify-content: center;
    }
    textarea {
        resize: none;
        border-style: none; 
        overflow: auto; 
        border-color: aliceblue;
        box-shadow: 0 0 2px black;
        font-size: 18px;
        font-family: "abel";
        padding: 1%;
    }
    textarea:focus {
        border-color: aliceblue;
        resize: none;
        border-style: none; 
        overflow: auto; 
        outline: none;
    }
</style>