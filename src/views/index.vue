<template>
  <div class="mainPart">
    <h1 class="websiteTitle">KumoCuSO4's Website</h1>
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
.mainPart{
  text-align: center;
}
.websiteTitle{
  font-size: 60px;
}
</style>