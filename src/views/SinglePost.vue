<template>
    <Layout>
        <div class="row my-5">
            <div class="col-lg-8 offset-lg-2">
                <router-link to="/">Back to All Posts</router-link>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-lg-8 offset-lg-2">
                <h1 class="text-capitalize">{{ post.title }}</h1>
                <p>{{ post.body }}</p>
            </div>
        </div>
        <CommentList v-if="post.comments" :comments="post.comments" />
        <PostComment :post_id="this.$route.params.id" />
    </Layout>
</template>

<script>
    import Layout from '../components/Layout'
    import CommentList from '../components/CommentList'
    import PostComment from '../components/PostComment'
    import { mapActions } from 'vuex'

    export default {
        name: 'SinglePost',
        components: {
            Layout,
            CommentList,
            PostComment
        },
        computed: {
            post() {
                return this.$store.getters.getSinglePost( this.$route.params.id )[0] || { comments: [] }
            }
        },
        methods: {
            ...mapActions([
                'fetchComments'
            ])
        },
        async mounted() {
            if ( this.post && this.post.comments.length === 0 ) {
                await this.fetchComments( parseInt(this.$route.params.id) )
            }
        }
    }
</script>