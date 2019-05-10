<template>
  <div v-wechat-title="title">
    <div class="dy-top">
      <x-header>{{title}}</x-header>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MyConcern',
    data() {
      return{
        title: ''
      }
    },
    mounted(){
      this.title = this.$route.params.title || this.$route.meta.title;
    },
    methods: {
    }
  }
</script>
<style lang="less">

</style>
