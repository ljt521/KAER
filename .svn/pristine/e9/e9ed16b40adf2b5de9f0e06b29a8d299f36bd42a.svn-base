<!--作者：莫岭红 功能：新建学术团队-->
<template>
  <div style="text-align: left">
    <div class="dy-top">
      <x-header class="x-header" slot="header" :left-options="{backText: ''}">新建学术团队<a slot="right">完成</a></x-header>
    </div>
    <div class="cellBox"></div>
    <div class="backgroundStyle">
      <selector ref="defaultValueRef" title="学会名称" direction="rtl" :options="list" value="广东" v-model="defaultValue"></selector>
      <selector ref="defaultValueRef" title="学组名称" direction="rtl" :options="list" v-model="defaultValue"></selector>
      <selector ref="defaultValueRef" title="职务" direction="rtl" :options="list" v-model="defaultValue"></selector>
      <selector ref="defaultValueRef" title="学组名称" direction="rtl" :options="list" v-model="defaultValue"></selector>
      <selector ref="defaultValueRef" title="学会级别" direction="rtl" :options="list" v-model="defaultValue"></selector>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AcademicTeam',
    data () {
      return {
        defaultValue: 'eh',
        list: [{key: 'eh', value: '英语'}, {key: 'gx', value: '广西'}],
      }
    }
  }
</script>
<style>
  .backgroundStyle{
    background-color: white;
    text-align: left;
    font-size: 14px;
  }
  .cellBox{
    height: 20px;
  }
</style>

