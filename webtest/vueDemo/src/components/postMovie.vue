<template>
     <el-card>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="actors"
        label="主演">
      </el-table-column>
    </el-table>
    <button @click="handlePostMovie()">数据</button>
</el-card>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: []
        }
      },
      methods:{
        handlePostMovie:function(){
          this.$axios.get('/api/movie/top250')
          .then(res =>{
            console.log(res)
          })
          .catch(err =>{
            console.log(err)
          })
        }
      }
    }
  </script>