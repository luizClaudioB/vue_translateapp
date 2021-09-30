<template>
    <div id="translate-button-container">
        <button id="translate-button" v-on:click="translate()"> GO! </button>
    </div> 
</template>

<script>

import { TRANSLATE_TEXT } from "../store/actions.type";

export default {
    name: 'TranslateButton',
    props: {
        text: String
    },
    methods: {
        translate() {
            if(this.text)
            this.$store.dispatch(
                TRANSLATE_TEXT, 
                this.text
            )
        }
    }
}

</script>

<style lang="scss">
    div#translate-button-container {
        align-self: center;
        display: flex;
    }
    button#translate-button {
        background-color: transparent;
        border-color: violet;
        color: violet;
        cursor: pointer;
        width: 120px;
        height: 9em; 
        border-radius: 10em;
        border-style: outset;
        margin: 2em;
        align-self: center;
    }
    button#translate-button:hover {
        border-style: inset;
        color: purple;
    }
</style>