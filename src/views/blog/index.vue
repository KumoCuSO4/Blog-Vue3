<template>
  <el-row justify="space-around">
    <el-col :xs="0" :sm="0" :md="3" :lg="3" :xl="3">
      <!-- 预留空间 -->
    </el-col>

    <el-col class="blogListCenter" :xs="18" :sm="18" :md="16" :lg="16" :xl="16">
      <div v-for="blog in blogList" :key="blog.name">
        <router-link :to="'/blog/view/'+blog.name">
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
    const modulesFiles =  require.context('@/blogs', true,  /\.md$/);
    modulesFiles.keys().forEach((module_item) => {
      //console.log(module_item)
      //console.log(modulesFiles(module_item).default);
      var info_end = modulesFiles(module_item).default.lastIndexOf("---");
      var infos = modulesFiles(module_item).default.substring(0,info_end).split("\n");
      var content = modulesFiles(module_item).default.substring(info_end+3)
      var title = "";
      for(var i in infos) {
        var info = infos[i];
        var pos = info.indexOf(':');
        var type = info.substring(0,pos);

        var str = info.substring(pos+1);
        if(type==="title") {
          console.log(str)
          title = str;
        }
      }
      this.blogList.push({"name":module_item,"title":title,"content":content})
    });

    //console.log(this.blogList)
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
</style>