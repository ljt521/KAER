<template>
  <div class="cu-app">
    <search
      position="absolute"
      auto-fixed
      placeholder="搜索关键字"
      ref="search"></search>
  </div>
</template>

<script>
import {Search} from 'vux'

export default {
  name: 'Customer',
  components: {
    Search
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .cu-app {
    .weui-search-bar {
      background-color: #073f89;
    }
  }

</style>
