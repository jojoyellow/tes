<template>
    <!-- 新建入库单对话框 -->


    <el-dialog v-model="dialogVisible" title="新建入库单" width="500" :before-close="handleClose">
        <el-form :model="chukuinfo.subinfo"
           :rules="chukuinfo.rules"
           ref="chukuform"
        >
        <el-form-item label="材料名称" prop="wuliaoname" 
    

    >
            <el-input v-model="chukuinfo.subinfo.wuliaoname"></el-input>
            </el-form-item>
            <el-form-item label="出库数量" prop="chukunum" >
                <el-input v-model="chukuinfo.subinfo.chukunum"></el-input>
            </el-form-item>
            <el-form-item label="领料人" prop="type" >
                <el-input v-model="chukuinfo.subinfo.type"></el-input>
            </el-form-item>
            <el-form-item label="所需项目" prop="object" >
                <el-input v-model="chukuinfo.subinfo.object"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="pushArray(chukuform)" >
                    提交
                </el-button>
            </div>
        </template>
    </el-dialog>


    <el-card> 

        <div  class="details-button">
            基础信息
            <hr>
        </div>

        <div class="BaseInfo">

            <div class="BaseInfodiv"><el-text class="mx-1" type="info">出库员:</el-text> <el-input
                    v-model="chukuinfo.basedInfo.chukuyuan"></el-input></div>
            <div class="BaseInfodiv"><el-text class="mx-1" type="info">出库日期:</el-text> <el-input
                    v-model="chukuinfo.basedInfo.chukuriqi"></el-input></div>
            <div class="BaseInfodiv"><el-text class="mx-1" type="info">仓库名称:</el-text> <el-input
                    v-model="chukuinfo.basedInfo.cangku"></el-input></div>


        </div>


        <!-- 入库按钮 -->
        <div class="details">
            <p>出库明细</p>
            <hr>
            <div class="details-button">
            <el-button plain @click="dialogVisible = true" type="warning">
                添加入库明细
            </el-button> <el-button type="danger">批量入库</el-button>

        </div>
        <div >
            <table style="width: 100%;" cellspacing=0; cellpadding=0 border="1" :data="tableDate">
                <thead>
                    <tr align="center" height="40px" bgcolor="#F5F7FA">
                        <td>物料名称</td>
                        <td>出库数量</td>
                        <td>所属项目</td>
                        <td>单位</td>
                        <td>操作</td>

                    </tr>
                    <tr v-for="item in tableDate">
                        <td v-for="(value, key) in item" :key="key" align="center">{{ value }}</td>
                        <td align="center"><el-button @click="update" id="aa1">修改</el-button></td>

                    </tr>
                </thead>
            </table>
        </div>

        </div>



    </el-card>
   
        <el-card>
            <div class="floot">
            <el-button>出库</el-button>
            <el-button type="danger">打印出库单</el-button>
        </div>
        </el-card>
  
</template>
    
<style scoped>
.tableinfo{
    overflow:scroll;
}
.details-button{
    margin:10px 0;
}
.floot{
    width: 100%;
    display: flex;
    justify-content: center;
}
.details {
    padding-top: 50px;
}

.BaseInfo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;


}

.BaseInfodiv {
    padding: 3px 0;
    margin-right: 15px;

}



/* background-color: beige; */
</style>
<script  setup>
import { computed, reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const chukuinfo=reactive({
    basedInfo:{
       chukuyuan:'',
       chukuriqi:'',
       cangku:'',


    },
    subinfo:{
        wuliaoname:'',
        chukunum:'',
        object:'',
        type:'',
        

    },
    rules:{
       wuliaoname:[{
     required:true, message:'此项为必填', trigger:'blur'

    }] ,
    chukunum:[{
        required:true, message:'此项不可为空',trigger:'blur'
    }],
    object:[{
        required:true, message:'此项不可为空',trigger:'blur'
    }],
    type:[{
        required:true, message:'此项不可为空',trigger:'blur'
    }]
},


})
const chukuform=ref()

const update = (e) => {

    const aa2 = document.getElementById('aa1')
    aa2.addEventListener('click', console.log("12522"))

    console.log(aa2)
}

const tableDate = ref([
])


const pushArray = (formEL) => {

    dialogVisible.value = false

formEL.validate(res=>{
    if(!res){
      alert("请检查表单")
      return
    }
    tableDate.value.push((JSON.parse(JSON.stringify(chukuinfo.subinfo))))
    chukuinfo.subinfo={}
})
    // if(!formEL){
    //     return formEL={}

    // }

    //   push进tableDate的warehousing对象时引用地址，需要JSON拷贝后传递
    

    console.log(chukuinfo)

    



}

const dialogVisible = ref(false)

const handleClose = (done) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}


</script>