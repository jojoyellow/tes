<template>
    <div class="order">
        <el-card>
         <table border="0" >
            <tr style="height: 70px;">
                <td style="width: 100px;">
                    <el-text>
                        申请单号：
                    </el-text>
                    <el-input v-model="orderData.queryData.o_sn"></el-input>
                </td>
                <td>
                <el-text>
                        项目名称：
                    </el-text>
                    <el-input v-model="orderData.queryData.o_object"></el-input>
                </td>
                <td>
                <el-text>
                        工单状态：
                    </el-text>
                    <el-input v-model="orderData.queryData.o_stat"></el-input>
                </td>
            </tr>
            <tr style="height: 70px;">
                <td>
                    <el-text>
                        线&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别：
                    </el-text>
                    <el-input v-model="orderData.queryData.o_type"></el-input>
                </td>
                <td>
                <el-text>
                        申&nbsp&nbsp请&nbsp&nbsp人：
                    </el-text>
                    <el-input v-model="orderData.queryData.o_who"> </el-input>
                </td>
                <td>
                <el-text>
                       完工日期：
                    </el-text>
                    <el-input v-model="orderData.queryData.o_finish_num"></el-input>
                </td>
            </tr>
         </table>
        
            <div class="clickbutton">
                <el-button type="primary" @click="queryOrder">查询工单</el-button>
                <el-button type="primary" >导出记录</el-button>
                <el-button type="primary" >打印表单</el-button>
             
            </div>


        </el-card>


        <!-- 新建工单对话框 -->
        <el-dialog v-model="centerDialogVisible" title="申请单需求明细" width="500" center>
            <el-form :model="orderData.form" align="center" :rules="orderData.rules" ref="orderform">
                <el-form-item label="工装名称:" prop="shenqingdanhao1">
                    <el-input v-model="orderData.form.shenqingdanhao1"></el-input>
                </el-form-item>
                <el-form-item label="单&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp位:" prop="shenqingdanhao2">
                    <el-input v-model="orderData.form.shenqingdanhao2"></el-input>
                </el-form-item>
                <el-form-item label="数&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp量:" prop="shenqingdanhao3">
                    <el-input v-model="orderData.form.shenqingdanhao3"></el-input>
                </el-form-item>
                <el-form-item label="规&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp格:" prop="shenqingdanhao4">
                    <el-input v-model="orderData.form.shenqingdanhao4"></el-input>
                </el-form-item>
                <el-form-item label="用&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp途:" prop="shenqingdanhao5">
                    <el-input v-model="orderData.form.shenqingdanhao5"></el-input>
                </el-form-item>
                <el-button type="primary" @click="createOrder">提交</el-button>
                <el-button type="warning">取消</el-button>
            </el-form>

        </el-dialog>

        <!-- 信息展示窗口 -->
    </div>
    <div class="info">
        <el-card>

            <el-table :data="orderData.tableData" style="width: 100%">
                <el-table-column fixed prop="sn" label="序号" width="60" />
                <el-table-column prop="o_sn" label="申请单号" width="120" />
                <el-table-column prop="o_object" label="线别" width="120" />
                <el-table-column prop="family" label="班组" width="60" />
                <el-table-column prop="o_date" label="申请日期" width="80" />
                <el-table-column prop="o_type" label="合同类别" width="120" />
                <el-table-column prop="o_sign" label="签收状态" width="120" />
                <el-table-column prop="o_new" label="交付数量" width="120" />
                <el-table-column prop="o_tools" label="订单明细" width="120" />
                <!-- 查询不需要编辑 -->
                <!-- <el-table-column fixed="right" label="操作" width="220">
                    <template  #default="scope" >
                        <el-button link type="primary" @click="deleteR(scope.$index)">编辑</el-button>
                       <el-button link type="primary">删除</el-button>
    
                    </template>
                </el-table-column> -->
            </el-table>

 








            <!-- <table border="1" cellpadding="1" cellspacing="0" width="100%">
                <thead class="tdcss" height="35px" bgcolor="#89cceb">
                    <tr align="center">
                        <td>申请单号</td>
                        <td>申请日期</td>
                        <td>项目名称</td>
                        <td>family</td>
                        <td>结算途径</td>
                        <td>工装名称</td>
                        <td>申请数量</td>
                        <td>申请人</td>
                        <td>工装类型</td>
                        <td>操作</td>


                    </tr>
                </thead>
                <tbody align="center">
                    <tr v-for="item of orderData.tableData">
                        <td v-for="(value, key) in item" :key="key">{{ value }}</td>
                        <td>
                            <el-button type="primary">编辑</el-button>
                            <el-button type="danger">删除</el-button>

                        </td>
                    </tr>
                </tbody>
            </table> -->
            <hr>
            <div class="demo-pagination-block">

                <!-- 
      v-model:current-page="currentPage4"   页面大
      v-model:page-size="pageSize4"
      :page-sizes=pages
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"      
      :total="total" 
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"



                 -->

                <el-pagination v-model:current-page="orderData.queryData.current1" 
                               v-model:page-size="orderData.queryData.size1"
                     :page-sizes = [4,6,8,12,14]
                     :small="small" :disabled="disabled" 
                     :background="background"
                    layout="total, sizes, prev, pager, next, jumper" 
                    :total="orderData.total"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </el-card>

    </div>      
</template>
<script  setup>
import { ElText } from "element-plus";
import { ref, reactive } from "vue";
import { OrderApi } from "../utils/API.js"


function deleteR(index){
  console.log(index)
}


const pageSize4 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)


const handleSizeChange = (val) => {
    console.log(`${val} items per page`),
        queryOrder()


}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`),
        queryOrder()
}

const centerDialogVisible = ref(false)




const queryOrder = () => {
    OrderApi(orderData.queryData).then(res => {
        orderData.tableData = res.records
        orderData.total = res.total
    })

}


const orderData = reactive({
    total: 400,
    queryData:{o_tools_type: "",
            o_finish_num: "",
            o_who: "",
            o_date: "",
            o_tools: "",
            o_type: "",
            o_sign: "",
            o_sn: "",
            o_new: "",
            sn: 1,
            o_object: "",
            family: "",
            o_order_num: "",
            o_old: "",
            o_stat: "",          
            current1: 1,
            size1: 6





    },

    tableData: [{}],
    form: {
        shenqingdanhao1: '',
        shenqingdanhao2: '',
        shenqingdanhao3: '',
        shenqingdanhao4: '',
        shenqingdanhao5: '',



    },
    rules: {
        shenqingdanhao1: [
            {
                required: true, message: '不可为空', trigger: 'blur'
            }
        ],
        shenqingdanhao2: [
            {
                required: true, message: '不可为空', trigger: 'blur'
            }
        ],
        shenqingdanhao3: [
            {
                required: true, message: '不可为空', trigger: 'blur'
            }
        ],
        shenqingdanhao4: [
            {
                required: true, message: '不可为空', trigger: 'blur'
            }
        ],
        shenqingdanhao5: [
            {
                required: true, message: '不可为空', trigger: 'blur'
            }
        ],

    }

})


const createOrder = () => {


}


</script>
<style scoped>

.tdcss {
    background-color: #89cceb;
}


.order {
    margin: 5px;
}

.info {
    margin: 5px;
}

.clickbutton {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #c8c9ca;
    height: 20px;
    padding: 15px;
    margin-top: 20px;
}

.a1 {
    padding-left: 15px;
}

.el-input {
    width: 200px;
}

.order-query {
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    flex-wrap:wrap-reverse;
}

.el-card {
    height: 100%;
}
</style>
