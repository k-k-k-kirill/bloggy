<template>
    <article v-if="loading === false">
        <Header />
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
    import Header from '../components/Header'

    export default {
        name: 'Layout',
        components: {
            LoadingScreen,
            Header
        },
        computed: {
            loading() {
                return this.$store.getters.getLoadingStatus
            }
        }
    }
</script>