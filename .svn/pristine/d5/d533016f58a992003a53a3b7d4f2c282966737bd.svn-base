<template>
  <div v-wechat-title="title">
    <div class="dy-top">
      <x-header>{{title}}</x-header>
    </div>
    <div v-if="title === '全部会诊信息'">{{title}}</div>
    <div v-if="title === '全部手术演示信息'">{{title}}</div>
    <div v-if="title === '全部讲课信息'">{{title}}</div>
    <div v-if="title === '全部参与课题信息'">{{title}}</div>
    <div v-if="title === '全部论文发表信息'">{{title}}</div>
    <div v-if="title === '全部学术参与信息'">{{title}}</div>
  </div>
</template>
<script>
  export default {
    name: 'SeeAll',
    data() {
      return{
        title: '',
      }
    },
    mounted () {
      this.title = this.$route.params.title || this.$route.meta.title;
    },
    methods: {
    }
  }
</script>

<style lang="less"></style>
