<!--作者：莫岭红 功能：新建语种-->
<template>
  <div >
    <div class="dy-top">
      <x-header class="x-header" slot="header" :left-options="{backText: ''}">新建语种<a slot="right" @click="goEssentialInfo()">完成</a></x-header>
    </div>
    <div class="cellBox"></div>
    <div class="backgroundStyle">
      <selector ref="defaultValueRef" title="语种" direction="rtl" :options="listData.list"  v-model="basicData.defaultValue"></selector>
      <selector ref="defaultValueRef" title="熟练度" direction="rtl" :options="listData.list1" v-model="basicData.defaultValue1"></selector>
    </div>
  </div>
</template>
<script>

export default {
  name: 'NewLang',
  data () {
    return {
      basicData:{
        defaultValue: 'eh',
        defaultValue1: 'eh',
      },
      listData:{
        list: [{key: 'eh', value: '英语'}, {key: 'gx', value: '德语'}],
        list1: [{key: 'eh', value: '熟练'}, {key: 'gx', value: '一般'}]
      },

    }
  },
  methods: {
    goEssentialInfo(){
      this.$router.push('/userInfo/essential-info')
    }
  }
}
</script>

<style lang="less">
  .backgroundStyle{
    background-color: white;
    text-align: left;
    font-size: 14px;
  }
  .cellBox{
    height: 20px;
  }

</style>
