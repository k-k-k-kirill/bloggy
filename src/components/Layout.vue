<template>
    <article v-if="loading === false">
        <header>
            <nav class="navbar navbar-light bg-light">
                <router-link class="h3 navbar-brand" to="/">Bloggy</router-link>
            </nav>
        </header>
        <main>
            <div class="container">
                <slot></slot>
            </div>
        </main>
    </article>
    <LoadingScreen v-else />
</template>

<script>
    import LoadingScreen from '../views/LoadingScreen.vue'

    export default {
        name: 'Layout',
        components: {
            LoadingScreen
        },
        computed: {
            loading() {
                return this.$store.getters.getLoadingStatus
            }
        }
    }
</script>