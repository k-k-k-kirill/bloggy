<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    async mounted() {
      await this.fetchPosts()
    },
    methods: {
      ...mapActions([
        'fetchPosts'
      ])
    }
  }
</script>
