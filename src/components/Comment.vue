<template>
    <div class="col-lg-8 offset-lg-2 mb-4">
        <div class="comment-box shadow-sm p-4">
            <h4>{{ title }}</h4>
            <a class="mb-3 d-block" :href="'mailto:' + email">{{email}}</a>
            <p>{{content}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Comment',
        props: [ 'title', 'email', 'content' ]
    }
</script>

<style lang="scss">
    .comment-box {
        width: 100%;
        height: 100%;
    }
</style>