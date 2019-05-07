
<!--作者：莫岭红 功能：新建客户-->
<template>
  <div >
    <div class="dy-top">
      <x-header class="x-header" slot="header" :left-options="{backText: ''}">新建客户<a slot="right" @click="goEssentialInfo()">完成</a></x-header>
    </div>
    <div class="cellBox"></div>
    <div class="backgroundStyle">
      <selector ref="defaultValueRef" title="客户头像" direction="rtl" :options="listData.list"   placeholder="请选择头像" v-model="basicData.defaultValue"></selector>
      <x-input title="客户编号" v-model="value" placeholder="请填写" text-align="right"></x-input>
      <x-input title="客户姓名" v-model="value" placeholder="请填写" text-align="right"></x-input>
      <selector ref="defaultValueRef" title="性别" direction="rtl" :options="listData.list1" placeholder="请选择" v-model="basicData.defaultValue1"></selector>
      <datetime
        v-model="value1"
        @on-change="change"
        title="出生年月"
        placeholder="请选择"
        @on-cancel="log('cancel')"
        @on-confirm="onConfirm"
        @on-hide="log('hide', $event)"></datetime>
      <x-input title="年龄" v-model="value1"  readonly="readonly" ></x-input>
      <x-input title="医院编码" v-model="value" placeholder="请填写" text-align="right"></x-input>
      <x-input title="医院名称" v-model="value" placeholder="请填写" text-align="right"></x-input>
      <selector ref="defaultValueRef" title="科室类型" direction="rtl" :options="listData.list1" placeholder="请选择" v-model="basicData.defaultValue1"></selector>
      <x-input title="科室名称" v-model="value" placeholder="请填写" text-align="right"></x-input>
      <selector ref="defaultValueRef" title="职称" direction="rtl" :options="listData.list1" placeholder="请选择" v-model="basicData.defaultValue1"></selector>
      <selector ref="defaultValueRef" title="行政职务" direction="rtl" :options="listData.list1" placeholder="请选择" v-model="basicData.defaultValue1"></selector>
      <selector ref="defaultValueRef" title="最高学历" direction="rtl" :options="listData.list1" placeholder="请选择" v-model="basicData.defaultValue1"></selector>
      <x-input title="学校名称" v-model="value" placeholder="请填写" text-align="right"></x-input>
      <x-input title="导师姓名" v-model="value" placeholder="请填写" text-align="right"></x-input>
      <x-input title="专业领域" v-model="value" placeholder="请填写" text-align="right"></x-input>
    </div>
  </div>
</template>
<script>
  import { XInput } from 'vux'
  import { Datetime } from 'vux'

  export default {
    name: 'NewCustom',
    data () {
      return {
        value:'',
        value1:"",
        basicData:{
          defaultValue: '',
          defaultValue1: '',
        },
        listData:{
          list: [{key: 'eh', value: '英语'}, {key: 'gx', value: '德语'}],
          list1: [{key: 'eh', value: '熟练'}, {key: 'gx', value: '一般'}]
        },
      }
    },
    methods:{
      change (value) {
        console.log('change', value)
      },
      log (str1, str2 = '') {
        console.log(str1, str2)
      },
      onConfirm (val) {
        console.log('on-confirm arg', val)
        console.log('current value', this.value1)
      },
    },
    components: {
      XInput,Datetime
    }
  }
</script>

<style lang="less" >

  .divBox{
    background-color: white;
    margin: 0 15px;

  }

  .spanCell{
    width: 28%;
    color:#A4A4A4;
  }
  .cellBox{
    height: 20px;
  }
  .weui-label{
    text-align: left;
  }






</style>
