<template>
    <div class="homePage">
        <LinkTree :items="socialLinkTree"></LinkTree>
    </div>
</template>

<script>
import LinkTree from '@/components/LinkTree.vue'
export default {
    name: 'HomePage',
    components: {
        LinkTree,
    },
    data: function() {
        return { 
            socialLinkTree: [
                { id: 'Facebook', url: 'https://pt-br.facebook.com/' },
                { id: 'Instagram', url: 'https://www.instagram.com/' },
                { id: 'Twitter', url: 'https://twitter.com/' }
            ]
        }
    }
}
</script>