<template>
  <el-row justify="space-around">
    <el-col :xs="0" :sm="0" :md="3" :lg="3" :xl="3">
      <!-- 预留空间 -->
    </el-col>

    <el-col class="blogListCenter" :xs="18" :sm="18" :md="16" :lg="16" :xl="16">
      <div v-for="blog in blogList" :key="blog.name">
        <router-link class="blogLink" :to="'/blog/view/'+blog.name">
          <h1>
            {{blog.title}}
          </h1>
        </router-link>

        <el-scrollbar max-height="300px" class="blogListItemContent">
          <Markdown :source="blog.content" :html="true" />
        </el-scrollbar>

        <el-divider/>
      </div>
    </el-col>

    <el-col :xs="0" :sm="0" :md="3" :lg="3" :xl="3">
      <!-- 预留空间 -->
    </el-col>
  </el-row>
</template>

<script>
import Markdown from 'vue3-markdown-it';
import {getBlogList} from "@/api/blog";

export default {
  name: "blog",
  components: {
    Markdown
  },
  data() {
    return {
      blogList: []
    }
  },
  methods: {
    direct(link) {
      if (this.$route.path !== link) {
        this.$router.push(link);
      }
    }
  },
  mounted() {
    this.blogList = getBlogList();
  }
}
</script>

<style scoped>
.blogListCenter{
  padding-left: 30px;
  padding-right: 30px;
  background: #fdfaf2;
}
.blogListItemContent{
  box-shadow: 0 2px 4px rgba(0,0,0,0.2),0 0 6px rgba(0,0,0,0.4);
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
}
.blogLink:link{
  color: rgb(33, 81, 208);
  text-decoration: none;
}
.blogLink:visited {
  color: rgb(33, 81, 208);
  text-decoration: none;
}
.blogLink:hover {
  color: hotpink;
}
.blogLink:active {
  color: blue;
}
</style>