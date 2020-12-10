<template>
    <div class="col-md-6 col-lg-4 mb-4">
        <router-link :to="`/post/${id}`">
            <div class="teaser shadow-sm p-4">
                <h3 class="text-capitalize">{{ title }}</h3>
                <p>{{ content.substring(0,100)+".." }}</p>

                <router-link :to="`/post/${id}`">Read more</router-link>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Teaser',
    props: ['title', 'content', 'id']
}
</script>

<style lang="scss">
    .teaser {
        width: 100%;
        height: 100%;
        color: #000;
        transition: all 0.15s ease-in-out;

        &:hover {
            transform: translateY(-10px);
        }
    }
</style>