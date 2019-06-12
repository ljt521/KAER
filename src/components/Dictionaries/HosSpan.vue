<template>
  <span>
    {{message}}
  </span>
</template>

<script>
  export default {
    name: 'HosSpan',
    props: ['code'],
    data() {
      return{
        message: {}
      }
    },
    mounted() {
      if(this.code){
        this.$get('/api/hospital/' + this.code).then(info => {
          this.message = info.hcoName
        })
      }

    },
    watch:{
      dictItemCode(){
        this.$get('/api/hospital/' + this.code).then(info => {
          this.message = info.hcoName
        })
      }
    }
  }
</script>
