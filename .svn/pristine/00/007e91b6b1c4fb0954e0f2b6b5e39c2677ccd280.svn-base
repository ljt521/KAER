<!--作者：莫岭红 功能：个人信息-->
<template>
 <div class="perInfo" >
   <div class="divBox" >
     <cell-box>
       <span class="spanCell ">编<span class="visible">编号</span>号:</span>{{customerData.code}}
     </cell-box>
     <cell-box>
       <span class="spanCell ">姓<span class="visible">编号</span>名:</span>{{customerData.name}}
     </cell-box>
     <cell-box>
       <span class="spanCell ">出生年月 :</span>{{customerData.birthday}}
     </cell-box>
     <cell-box>
       <span class="spanCell ">年<span class="visible">编号</span>龄:</span>{{customerData.age}}
     </cell-box>
     <cell-box>
       <span class="spanCell ">医<span class="visible">编号</span>院:</span><div-span v-bind:dictCode="'YYXX'" v-bind:dictItemCode="customerData.hospitalCode"></div-span>
     </cell-box>
     <cell-box>
       <span class="spanCell ">科<span class="visible">编号</span>室:</span>{{customerData.deptName}}
     </cell-box>
     <cell-box>
       <span class="spanCell ">职<span class="visible">编号</span>称:</span><div-span v-bind:dictCode="'ZC'" v-bind:dictItemCode="customerData.title"></div-span>
     </cell-box>
     <cell-box>
       <span class="spanCell ">行政职务 :</span><div-span v-bind:dictCode="'ZW'" v-bind:dictItemCode="customerData.administrative"></div-span>
     </cell-box>
     <cell-box>
       <span class="spanCell ">最高学历 :</span><div-span v-bind:dictCode="'XL'" v-bind:dictItemCode="customerData.education"></div-span>
     </cell-box>
     <cell-box>
       <span class="spanCell ">学校名称 :</span>{{customerData.schoolName}}
     </cell-box>
     <cell-box>
       <span class="spanCell ">导师姓名 :</span>{{customerData.tutorName}}
     </cell-box>
     <cell-box style="margin-bottom: 8px">
       <span class="spanCell ">专业领域 :</span>{{customerData.expertiseArea}}
     </cell-box>
   </div>

 </div>
</template>
<script>
export default {
  name: 'CustomerInfo',
  data () {
    return {
    }
  },
  props:['customerData'],
  mounted() {
  }
}
</script>
<style lang="less" >
  .perInfo{
    .divBox{
      background-color: white;
      margin: 0 15px;
      border-radius:  0 0 5px 5px;;
      box-shadow: 0 0 2px 2px #eee;
      font-size: 13px;
      .spanCell{
        color:#A4A4A4;
        margin-right: 17px;
      }
      .weui-cell{
        color:#282828;
        &:before{
          border: none;
        }
      }

    }
    .visible{
      visibility:hidden ;
    }
    span{
      &:after{
        content: '';
        margin-right: 5px;
        display: inline-block;
      }
    }
  }

</style>
