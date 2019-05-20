<template>
  <span>
    {{message.value}}
  </span>
</template>

<script>
  export default {
    name: 'DivSpan',
    props: ['dictCode', 'dictItemCode'],
    data() {
      return{
        message: {}
      }
    },
    mounted() {
      const data = {dictCode: this.dictCode, code:  this.dictItemCode, allowEnglish: false}
      if(this.dictItemCode){
        this.$get('/api/dict-item/search-code', data).then(info => {
          this.message = info;
        })
      }

    },
    methods: {
    },
    watch:{
      dictItemCode(){
        const data = {dictCode: this.dictCode, code:  this.dictItemCode, allowEnglish: false}
        this.$get('/api/dict-item/search-code', data).then(info => {
          this.message = info;
        })
      }
    }
  }
</script>
