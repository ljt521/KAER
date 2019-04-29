<template>
  <div>
    <x-header>我的<a slot="right">保存</a></x-header>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Mine',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
