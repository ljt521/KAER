<template>
  <div id="app">
    <router-view></router-view>
    <div class="x-bottom"  v-show="$route.path == '/mine' ||
     $route.path == '/dynamic' ||
      $route.path == '/customer' || $route.path == '/'" >
      <tabbar>
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
import {Tabbar, TabbarItem, XHeader, XButton, Flexbox, FlexboxItem, Icon, Blur, Group, Cell, Selector, Search} from 'vux'
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.component('blur', Blur)
Vue.component('tabbar', Tabbar)
Vue.component('tabbarItem', TabbarItem)
Vue.component('x-header', XHeader)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)
Vue.component('icon', Icon)
Vue.component('x-button', XButton)
Vue.component('search', Search)
Vue.component('selector', Selector)

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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
    .clearfix:after,.clearfix:before{
      content:"";/*加一段内容*/
      display:table;/*创建匿名的表格单元，触发bfc*/
    }
    .clearfix:after{
      clear:both;/*清除浮动*/
    }
    .clearfix{zoom:1;/*为IE6，7的兼容性设置*/}
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
    }
</style>
