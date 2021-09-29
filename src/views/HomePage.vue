<template>
    <div class="homePage">
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