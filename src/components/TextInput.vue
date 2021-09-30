<template>
    <div id="text-input">
        <div>
            <input inputmode="latin" />
            <button v-on:click="detectLanguage()"> Translate! </button>
        </div>
    </div> 
</template>

<script>

import { DETECT_LANGUAGE } from "../store/actions.type";


export default {
    name: 'TextInputComponent',
    methods: {
        detectLanguage() {
            if(document.querySelector('input'))
            this.$store.dispatch(DETECT_LANGUAGE, document.querySelector('input').value);
        }
    }
}

</script>

<style>
    /* .listContainer {
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
    } */
</style>