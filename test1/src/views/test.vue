<template>
    <div  class="content">
    <div class="unfinished">
        <el-card>
            <h1>未完成工单展示窗口</h1>
            <hr>
        </el-card>
    </div>
    <div class="stock">
        <el-card>
            <h1>
                备料窗口
            </h1>
            <hr>
        </el-card>
    </div>
       
    </div>
    
</template>
<script setup>

</script>
<style  scoped>
.el-card{
    height: 100%;
}
.unfinished{
    background-color: bisque;
    /* 垂直方向 */
    grid-row: 1 /span 3;
    /* 水平方向 */
    grid-column: 1 /span 2;  
}
.stock{
    grid-row: 1/span 3;
    grid-column:3/span 3;
}
.content{
    height: 100%;
    background-color: rgb(201, 226, 218);
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}


</style>
