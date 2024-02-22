<template>
<div class="home">
  <div class="home-1 card-style">
    <span>入库数据录入窗口</span>
    <hr>
  </div>
  <div class="home-2 card-style">
    <span>表格信息展示窗口</span>
    <hr>
    111<el-input v-model="aee"></el-input>
    {{ aee }}
  
  </div>

  
</div>
</template>
<script setup>
import { ref } from 'vue';
const aee=ref()
</script>

<style scoped>
.card-style{
  border-radius: 4px;
    background-color: #ffffff;
    border: 1px solid #e4e7ed;
}
.home-1{
  flex:1;
  padding:25px;
}
.home-2{
  flex:3;
  padding:25px;
}

.home{
  display: flex;
  flex-direction:column;
  margin: 0;
  padding: 0;
  height: 100%;


  background-color: beige;
}

</style>
