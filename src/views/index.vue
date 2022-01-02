<template>
  <div>
    Hello world
    <router-link :to="{name: '博客'}">
      前往博客
    </router-link>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>

</style>