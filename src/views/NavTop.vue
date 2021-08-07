<template>
    <div id="top">
      <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">AntV🐜数据可视化</template>
          <el-submenu index="2-1">
            <template slot="title">G2</template>
            <el-menu-item index="2-1-1">基础饼图</el-menu-item>
            <el-menu-item index="2-1-2">环图</el-menu-item>
            <el-menu-item index="2-1-3">南丁格尔玫瑰图</el-menu-item>
          </el-submenu>
<!--          <el-menu-item index="2-1">选项1</el-menu-item>-->
          <el-submenu index="2-2">
            <template slot="title">G2Plot</template>
            <el-menu-item index="2-2-1">饼图</el-menu-item>
            <el-menu-item index="2-2-2">环图</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://github.com/" target="_blank">个人主页</a></el-menu-item>
      </el-menu>
    </div>
</template>
<script>
  export default {
    name:"NavTop",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>