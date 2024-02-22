

<template>

  <div class="menu">
  <el-row >  
    <el-col :span="24">
  
      <el-menu
        router
        default-active="1"
    
        @open="handleOpen"
        @close="handleClose"
      >
     
     
        
      <el-sub-menu index="1">
        <template #title>
         <h3>库存管理</h3>
        </template>
            <el-menu-item index="/test">展示信息总览</el-menu-item>
            <el-menu-item index="/ruku">入库信息查询</el-menu-item>
   
            <el-menu-item index="/chuku">出库查询</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
         <h3>订单管理
         </h3>
        </template>
            <el-menu-item index="/orderQuery">申请单查询</el-menu-item>
            <el-menu-item index="/orderInput">申请单录入</el-menu-item>
          </el-sub-menu>
  
        
      </el-menu>
    </el-col>
  </el-row>
  </div>
  
<div class="main">

<div class="header">

    <div class="header-a" >武汉众羿鸿信息综合管理系统</div>
    <div class="header-b" >admin<el-button type="primary">退出</el-button></div>
  
</div>


  <RouterView></RouterView>

</div>

</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.el-card{
  width: 100%;
}
.header{
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  padding:0 30px;
  background-color: #ffffff;
}

.el-menu{
  padding-top:60px;

}

.showPage{
 flex: 2;

}
.content{
  display: flex;
  flex-direction: row;
  width: 100%;
}
/* .el-row{
  background-color:rgb(214, 221, 230);
 height: 40px;

} */
.menu{
  background-color: #ffffff;




 width: 200px;
}
.main{
  width: 100%;
  display:flex;
  flex-direction: column;
 

}
</style>

