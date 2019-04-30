<template>
  <div>
    <div class="dy-top">
      <x-header class="x-header" slot="header" :left-options="{showBack: false}">动态</x-header>
    </div>
    <div>
      <div class="space">
        <div class="dy-div-icon">
          <icon type="waiting-circle"></icon>
        </div>
        <div class="dy-div">
          <i>2019/4/30 11:56:50</i>
          <h4>李峰</h4>
          <i>新增了@丁一@论文信息#1浅谈临床医学小儿科质量中和花单声道是的是的</i>
        </div>
      </div>
      <div class="space">
        <div class="dy-div-icon">
          <icon type="waiting-circle"></icon>
        </div>
        <div class="dy-div">
          <i>2019/4/30 11:56:50</i>
          <h4>李峰</h4>
          <i>新增了@丁一@论文信息#1浅谈临床医学小儿科质量中和花单声道是的是的</i>
        </div>
      </div>
      <div class="space">
        <div class="dy-div-icon">
          <icon type="waiting-circle"></icon>
        </div>
        <div class="dy-div">
          <i>2019/4/30 11:56:50</i>
          <h4>李峰</h4>
          <i>新增了@丁一@论文信息#1浅谈临床医学小儿科质量中和花单声道是的是的</i>
        </div>
      </div>
      <div class="space">
        <div class="dy-div-icon">
          <icon type="waiting-circle"></icon>
        </div>
        <div class="dy-div">
          <i>2019/4/30 11:56:50</i>
          <h4>李峰</h4>
          <i>新增了@丁一@论文信息#1浅谈临床医学小儿科质量中和花单声道是的是的</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .dy-top {
    height: 40px;
    width: 100%;
    .x-header {
      position: fixed;
      width: 100%;
      z-index: 999;
      margin-bottom: 20px;
    }
    .vux-header {
      background-color: #073f89;
    }
  }

  .space {
    padding: 24px;
    margin: 20px 15px;
    background-color: #fff;
    border-radius: 5px;
    text-align: left;
    height: 130px;
    max-height: 130px;
    .dy-div-icon {
      float: left;
      height: 140px;
    }
    .dy-div {
      padding-top: 5px;
      i {
        font-style: normal;
        color: #a3a3a3;
      }
      h4 {
        line-height: 0;
      }
    }
    .weui-icon-waiting-circle {
      color: #a3a3a3;
    }
    .weui-icon-waiting-circle::after {
      content: '';
      width: 1px;
      height: calc(130px + 22px);
      border-left: 1px solid #a3a3a3;
      display: block;
      position: relative;
      left: 16px;
      top: -2px;
    }
  }
</style>
