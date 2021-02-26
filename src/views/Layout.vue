<!--<template>-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "Layout"-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <el-row class="cus-body">
    <!-- header -->
    <el-col :span="24" class="cus-header">
      <div style="float: left;" class="cus-header-title">
        <span style="font-size: 20px; color: #ffffff;">管理后台</span>
      </div>
      <div style="float: left;" class="cus-tools">
        <img alt="" src="@/assets/img/ps-align-justify.svg" @click="collapse"
             style="cursor: pointer; vertical-align: middle;"/>
      </div>
      <div style="float: right;">
        <el-dropdown trigger="click" :hide-on-click="false">
          <span class="el-dropdown-link" style="cursor: pointer; margin-right: 18px; color: #ffffff;"> {{ username }} </span>
          <el-dropdown-menu slot="dropdown">
            <el-popconfirm
                icon="el-icon-info"
                iconColor="red"
                title="确认退出登录吗?"
                @onConfirm="logout" >
              <el-dropdown-item slot="reference">退出登录</el-dropdown-item>
            </el-popconfirm>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
    <!-- body -->
    <div class="body_title">
      <!-- 左侧菜单栏 -->
      <el-menu class="cus-body-nav-menu"
               mode="vertical" default-active=""
               background-color="#eef1f6" :router="true"
               @open="handleOpen" @close="handleClose"
               :collapse="isCollapsed" :unique-opened="true">
        <template v-for="(e, i) in menuList">
          <el-submenu :index="i.toString()">
            <template slot="title" :key="e.title">
              <i :class="e.icon"></i>
              <span slot="title">{{ e.title }}</span>
            </template>
            <el-menu-item v-for="(item) in e.children" :key="item.path" :index="(!e.path ? ('/' + item.path) : item.path)" v-if="item.hide">
              {{ item.title }}
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
      <!-- 右侧内容区域 -->
      <div style="flex:1;overflow-y: scroll;min-width: 900px;">
        <el-col :span="24" class="cus-body-breadcrumb">
          <b class="cus-body-breadcrumb-title" >{{ $route.name }}</b>

          <el-breadcrumb class="cus-body-breadcrumb-inner"
                         separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理2</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="cus-body-content-wrapper">
          <router-view/>
        </el-col>
      </div>
    </div>
  </el-row>
</template>

<script>
// import _nav from "@/router/navigator";
import util from '@/api/cookie'
export default {
  data() {
    return {
      menuList: [],
      // 默认打开导航栏
      isCollapsed: false,
      username: '',
      subTitle: '',
    }
  },
  methods: {
    // 折叠导航栏
    collapse() {
      this.isCollapsed = !this.isCollapsed
    },
    logout() {
      util.cookies.deleteCookie('o-token')
      this.$router.push('/login')
    },
    handleOpen(key, keyPath) {
      console.log("open", key, keyPath);
      console.log(this.$route)
    },
    handleClose(key, keyPath) {
      console.log("open", key, keyPath);
    },
  },
  // created() {
  //   this.menuList = _nav
  // },
  mounted() {
    this.username = '超级管理员'
    this.subTitle = '子标题'
  },
}
</script>

<style scoped>
.cus-body{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
/* ----- header ----- */
.cus-header {
  height: 50px;
  line-height: 50px;
  background-color: #3a3f51;
}
.cus-header-title {
  width: 200px;
  height: 100%;
  text-align: center;
  border-right: 1px solid rgba(238, 241, 146, 0.3);
}
.cus-tools {
  width: 50px;
  height: 100%;
  text-align: center;
}
/* ----- body ----- */
.body_title{
  position: absolute;
  top: 50px;
  bottom: 0;
  width: 100%;
  display: flex;
  overflow: hidden;
}
/* 丝滑 折叠左侧菜单栏 */
.cus-body-nav-menu:not(.el-menu--collapse) {
  float: left;
  min-width: 200px;
}
.cus-body-breadcrumb {
  height: 56px;
  line-height: 56px;
  border-bottom: 1px solid #cfd7e5;
}
.cus-body-breadcrumb-title {
  width: 160px;
  float: left;
  font-size: 18px;
  color: #475669;
  text-align: center;
}
.cus-body-breadcrumb-inner {
  line-height: 56px;
  float: right;
  margin-right: 18px;
}
.cus-body-content-wrapper {
  padding: 20px;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow-x: auto;
}
</style>
