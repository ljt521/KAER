<template>
  <div id="app">
    <router-view></router-view>
    <div class="app-top" v-show="$route.path == '/mine' ||
     $route.path == '/dynamic' ||
      $route.path == '/customer' || $route.path == '/'" >
      <tabbar class="x-bottom">
        <tabbar-item selected link="/dynamic">
          <img slot="icon" src="./assets/icon/icon_nav_msg.png">
          <span slot="label">动态</span>
        </tabbar-item>
        <tabbar-item show-dot link="/customer">
          <img slot="icon" src="./assets/icon/icon_nav_cell.png">
          <span slot="label">客户</span>
        </tabbar-item>
        <tabbar-item badge="2" link="/mine">
          <img slot="icon" src="./assets/icon/icon_nav_button.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import {Tabbar, TabbarItem, XHeader, XButton, Flexbox, FlexboxItem, Icon, Timeline, TimelineItem, Scroller} from 'vux'

Vue.component('tabbar', Tabbar)
Vue.component('tabbarItem', TabbarItem)
Vue.component('x-header', XHeader)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('icon', Icon)
Vue.component('timeline', Timeline)
Vue.component('timeline-item', TimelineItem)
Vue.component('x-button', XButton)
Vue.component('scroller', Scroller)

export default {
  name: 'APP',
  data () {
    return {
      select: 'customer'
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
    .app-top {
      width: 100%;
      height: 60px;
    }
    .x-bottom {
      position: fixed;
      z-index: 500;
      bottom: 0;
      width: 100%;
      background-color: #f7f7fa;
      .weui-tabbar__label {
        line-height: 0;
      }
    }
  }
</style>
