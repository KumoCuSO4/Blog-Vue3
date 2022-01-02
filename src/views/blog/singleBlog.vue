<template>
  <div class="blogItem">
    <Markdown
        :source="'# :sparkles: '+blog.title+' :sparkles: \n\n'+blog.content"
        :html="true"/>
  </div>
</template>
<script>

import {getBlog} from "@/api/blog";
import Markdown from 'vue3-markdown-it';


export default {
  name: "singleBlog",
  props:['blogName'],
  components: {
    Markdown
  },
  data() {
    return {
      blog: {}
    }
  },
  mounted() {
    this.blog = getBlog(this.blogName)
  }
}
</script>

<style scoped>
.blogItem{
  margin-left: 60px;
  margin-right: 60px;

}
</style>