<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item selected link="/dynamic">
        <!--<img slot="icon" src="./assets/img/ic_tab_home_normal.png">-->
        <!--<img slot="icon-active" src="./assets/img/ic_tab_home_active.png">-->
        <span slot="label">动态</span>
      </tabbar-item>
      <tabbar-item show-dot link="/customer">
        <!--<img slot="icon" src="./assets/img/ic_tab_subject_normal.png">-->
        <!--<img slot="icon-active" src="./assets/img/ic_tab_subject_active.png">-->
        <span slot="label">客户</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/mine">
        <!--<img slot="icon" src="./assets/img/ic_tab_profile_normal.png">-->
        <!--<img slot="icon-active" src="./assets/img/ic_tab_profile_active.png">-->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem, XHeader } from 'vux'
Vue.component('tabbar', Tabbar)
Vue.component('tabbarItem', TabbarItem)
Vue.component('x-header', XHeader)

export default {
  name: 'APP',
  data () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
