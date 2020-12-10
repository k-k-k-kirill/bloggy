<template>
    <Layout>
        <div class="row py-4">
            <Teaser v-for="post in this.$store.state.posts" :key="post.id" :title="post.title" :content="post.body" :id="post.id" />
        </div>
    </Layout>
</template>

<script>
    import Layout from '../components/Layout'
    import Teaser from '../components/Teaser'

    export default {
        name: 'Archive',
        components: {
            Layout,
            Teaser
        }
    }
</script>