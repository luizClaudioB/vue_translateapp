<template>
    <div id="link-tree-items">
        <div v-for="item in items" v-bind:key="item">
            <a :href="item.url">{{ item.id }}</a>
        </div>
    </div> 
</template>

<script>

export default {
    name: 'LinkTree',
    props: ['items']
}

</script>