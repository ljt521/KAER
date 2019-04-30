<template>
  <div class="mine">
    <div class="herder">
      <div class="userImg">
        <img src="" alt="dadada">
      </div>
      <div class="userInfo">
        <p>刘伟</p>
        <p>信息技术部</p>
      </div>
    </div>
    <div class="settingContent">
      <div>
        <img src="" alt="da">
        <span>我的设置</span>
        <i></i>
      </div>
      <div>
        <img src="" alt="da">
        <span>我的关注（客户）</span>
        <i></i>
      </div>
      <div>
        <img src="" alt="da">
        <span>我的关注（同事）</span>
        <i></i>
      </div>
    </div>
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

<style lang="less">
.mine{
  .herder{
    background: #205395;
    height: 150px;
    .userImg{
      float: left;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #4C75A9;
      margin: 50px 0 30px 22px;
      overflow: hidden;
    }
    .userInfo{
      float: left;
      margin: 64px 0 0 14px;
      text-align: left;
      color: #fff;
      p{
        margin: 0;
      }
      p:first-child{
        font-size: 22px;
      }
      p:last-child{
        font-size: 14px;
        margin-top: 3px;
      }
    }
  }
  .settingContent{
    div{
      background: #fff;
      position: relative;
      height: 55px;
      border-bottom: 1px solid #C7C6CC;
      vertical-align: middle;
      img{
        position: absolute;
        left: 15px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      span{
        position: absolute;
        top: 33%;
        left: 26%;
      }
      i:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
        margin-right: 15px;
      }
    }
  }
}
</style>
