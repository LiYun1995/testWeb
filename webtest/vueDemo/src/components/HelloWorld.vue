<template>
  <el-container>
    <el-header>
        <div class="headnav">
          <span>
            <i class="el-icon-more"></i>
          </span>
          <ul>
            <li><i class="el-icon-edit-outline"></i></li>
            <li><i class="el-icon-view"></i></li>
            <li><i class="el-icon-close"></i></li>
          </ul>
        </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col :span="12">
            <el-menu
              style="width:200px;height:880px"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>顶级导航</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <router-link to="/HelloWorld/FormBd">表单</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <router-link to="/HelloWorld/Fucie">FucIE</router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>系统设置</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <router-link @click="handleScreen()" to="/HelloWorld/Editor">富文本编辑器</router-link>
                  </el-menu-item>
                  <el-menu-item index="-2">
                    <router-link to="/HelloWorld/PostMovie">
                      数据
                    </router-link>
                  </el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <div class="interesting">
        <router-view></router-view>
      </div>
      </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header{
   box-shadow:0 2px 3px -1px gray;
}
.el-header span{
  display: inline-block;
  float: left;
}
.el-header ul{
  list-style: none;
  float: right;
}
.el-header ul li{
  float: left;
  margin: 0 5px;
}
.el-header i{
  cursor: pointer;
}
.el-aside {
  background: black;
  color: #333;
  text-align: left;
  position: fixed;
}

.el-main {
  color: #333;
  text-align: left;
  line-height: 160px;
  padding-left: 220px;
}

body > .el-container {
}
.interesting{
  width: 80%;
  margin-top:20px;
  margin-left: 220px;
  text-align: left;
}
a{
  text-decoration: none;
  color: #fff;
}
</style>