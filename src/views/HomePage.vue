<template>
    <div class="homePage">
        <span class="titleStyle"> Translate to... </span>
        <LanguagesList></LanguagesList>
        <TextInputComponent></TextInputComponent>
    </div>
</template>

<script>
import LanguagesList from '@/components/LanguagesList.vue'
import TextInputComponent from '@/components/TextInput.vue'
export default {
    name: 'HomePage',
    components: {
        LanguagesList,
        TextInputComponent
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