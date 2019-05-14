<template>
  <selector ref="region" :title="tilteValue" :options="list" v-model="region"  @on-change="onChange" ></selector>
</template>
<script>
  export default {
  name: 'DivSelector',
    data(){
      return {
        region: '',
        list:[],
      }
    },
    props:['dictCode','tilteValue'],
    created() {
      this.$get('/api/dict-tables/search-with-list', {dictCode: this.dictCode}).then((info) => {
        this.list = info.dictItems;
      }).catch(error => {
        console.log(error);
      });
    },
    methods:{
      onChange (val) {
      }
    }
  }

</script>
<style>

</style>
