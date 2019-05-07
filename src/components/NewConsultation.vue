<!--作者：莫岭红 功能：新建会诊量-->
<template>
  <div >
    <div class="dy-top">
      <x-header class="x-header" slot="header" :left-options="{backText: ''}">新建会诊量<a slot="right" @click="goEssentialInfo()">完成</a></x-header>
    </div>
    <div class="cellBox"></div>
    <div class="backgroundStyle">
      <selector ref="defaultValueRef" title="年度" direction="rtl" :options="list"  v-model="defaultValue"></selector>
      <selector ref="defaultValueRef" title="会诊中的角色" direction="rtl" :options="list" v-model="defaultValue"></selector>
      <selector ref="defaultValueRef" title="会诊量" direction="rtl" :options="list" v-model="defaultValue"></selector>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'NewConsultation',
    data () {
      return {
        defaultValue: 'eh',
        list: [{key: 'eh', value: '英语'}, {key: 'gx', value: '广西'}],
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
