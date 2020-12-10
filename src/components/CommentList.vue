<template>
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <h3>Post comments: </h3>
        </div>

        <Comment v-for="comment in comments" :key="comment.id"  :title="comment.name" :email="comment.email" :content="comment.body" />
    </div>
</template>

<script>
    import Comment from './Comment'

    export default {
        name: 'CommentList',
        props: [ 'comments' ],
        components: {
            Comment
        }
    }
</script>

