<template>
  <div>
    <header class="mainHeader">

    </header>
    <index/>
  </div>
</template>

<script>
import Index from "@/views/index.vue";
export default {
name: "mainLayout",
  components: {Index}
}
</script>

<style scoped>
.mainHeader{
  width: auto;
  height: 60px;
  background-color: black;
}
</style>