
<template>
    <el-dialog v-model="dialogFormVisible" title="申请单明细" width="500">
        <el-form :model="orderInput.detail">
            <el-form-item label="材料明细" :label-width="formLabelWidth">
                <el-input v-model="orderInput.detail.o_tools" autocomplete="off" />
            </el-form-item>
            <el-form-item label="材料数量" :label-width="formLabelWidth">
                <el-input v-model="orderInput.detail.o_order_num" autocomplete="off" />
            </el-form-item>

            <el-form-item label="材料单位" :label-width="formLabelWidth">
                <el-input v-model="orderInput.detail.o_type" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="outputTableData">
                    提交
                </el-button>
            </div>
        </template>
    </el-dialog>
    <el-card>

        <el-form :model="orderInput.form" label-width="120px">
            <el-form-item label="申请单号">
                <el-input v-model="orderInput.form.o_sn" />
            </el-form-item>
            <el-form-item label="合同类别">
                <el-select v-model="orderInput.form.o_sign" placeholder="OA or 经费英雄">
                    <el-option label="OA" value="shanghai" />
                    <el-option label="经费英雄" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="下单日期">
                <el-col :span="5">
                    <el-date-picker v-model="orderInput.form.o_date" type="date" placeholder="Pick a date"
                        style="width: 100%" />
                </el-col>

            </el-form-item>
            <el-form-item label="项目名称">
                <el-input v-model="orderInput.form.o_object" />
            </el-form-item>
            <el-form-item label="申请人">
                <el-input v-model="orderInput.form.o_who" />
            </el-form-item>
            <el-form-item label="工单状态">
                <el-input v-model="orderInput.form.o_stat" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" plain @click="dialogFormVisible = true">新建商品明细</el-button>
            </el-form-item>




        </el-form>

        <el-table :data="orderInput.tableData" height="400px" style="width: 100%">
            <el-table-column prop="o_sn" label="申请单号" />
            <el-table-column prop="o_sign" label="合同类别"  />
            <el-table-column prop="o_date" label="申请日期"  />
            <el-table-column prop="o_tools" label="物料名称"  />
            <el-table-column prop="o_order_num" label="物料数量" />
            <el-table-column prop="o_type" label="单位" />
            <el-table-column prop="o_who" label="申请人"  />
            <el-table-column prop="o_stat" label="申请状态"/>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>


    </el-card>
    <el-card>
        <el-button type="warning" @click="hello">
            提交入库单
        </el-button>
    </el-card>
</template>

<script  setup>

import { reactive, ref } from 'vue'
import{bacthAdd} from '../utils/API'


const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const hello = () => {
    console.log("FA发送的数据是：",orderInput.tableData)
    bacthAdd(JSON.stringify(orderInput.tableData)).then(res=>{
        console.log(res)
    })
   
}

const outputTableData = () => {
    dialogFormVisible.value = false
    const result = { ...orderInput.form, ...orderInput.detail }
    console.log("result:", result)
    orderInput.tableData.push(JSON.parse(JSON.stringify(result)))
    console.log(orderInput.tableData)
    orderInput.detail = {}

}

// do not use same name with ref
const orderInput = reactive({
    detail: {
        o_tools: "211",
        o_order_num: "asdaqf",
        o_type: "safas",

    },
    form: {
        o_sn: "",
        o_sign: "",
        o_date: "",
        o_object: "",
        o_who: "",
        o_stat: "",



    },

    // family: "",
    // o_new: "",
    //     sn: "",      
    //     o_old: "",
    //     o_tools_type: "",
    //     o_finish_num: "",
    tableData: [



    ]

})

const onSubmit = () => {
    console.log('submit!')
}

</script>
<style scoped>
.a1 {
    width: 300px;
}

.el-input {
    width: 300px;
}

.el-select {
    width: 300px;
}
</style>

