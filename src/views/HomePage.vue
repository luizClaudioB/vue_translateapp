<template>
    <div class="homePage">
        <span class="titleStyle"> Translation Point </span>
        <LanguagesList></LanguagesList>
    </div>
</template>

<script>
import LanguagesList from '@/components/LanguagesList.vue'
export default {
    name: 'HomePage',
    components: {
        LanguagesList,
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