<template>
  <div>
    <el-container>
      <el-header :height="headerHeight">
        <el-button icon="el-icon-house">
          主页
        </el-button>
        KumoCuSO4的博客
      </el-header>

      <el-main class="MainPart">
        <el-scrollbar
            :height="`calc(100vh - ${headerHeight} - 16px)`">
          <router-view/>
        </el-scrollbar>
      </el-main>
    </el-container>

  </div>
</template>

<script>

export default {
  name: "blogLayout",
  components: {},
  methods: {
    direct(link) {
      this.$router.push(link);
    }
  },
  data() {
    return {
      headerHeight: `50px`
    }
  }
}
</script>

<style scoped>
.MainPart {
  padding: 0;
}
</style>