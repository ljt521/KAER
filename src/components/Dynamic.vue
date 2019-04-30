<template>
  <div>
    <div class="x-header">
      <x-header slot="header" :left-options="{showBack: false}">动态</x-header>
    </div>
    <div class="timeline-demo">
      <timeline>
        <timeline-item>
          <p class="recent">2016-04-17 12:00:00</p>
          <h3 class="recent">李峰</h3>
          <h4 class="recent">新增</h4>
        </timeline-item>
        <timeline-item>
          <p class="recent">2016-04-17 12:00:00</p>
          <h3 class="recent">李峰</h3>
          <h4 class="recent">新增</h4>
        </timeline-item>
        <timeline-item>
          <p class="recent">2016-04-17 12:00:00</p>
          <h3 class="recent">李峰</h3>
          <h4 class="recent">新增</h4>
        </timeline-item>
      </timeline>
      <timeline>
        <timeline-item>
          <p class="recent">2016-04-17 12:00:00</p>
          <h3 class="recent">李峰</h3>
          <h4 class="recent">新增</h4>
        </timeline-item>
        <timeline-item>
          <p class="recent">2016-04-17 12:00:00</p>
          <h3 class="recent">李峰</h3>
          <h4 class="recent">新增</h4>
        </timeline-item>
        <timeline-item>
          <p class="recent">2016-04-17 12:00:00</p>
          <h3 class="recent">李峰</h3>
          <h4 class="recent">新增</h4>
        </timeline-item>
      </timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  data () {
    return {
      count: 3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '~vux/src/styles/1px.less';
  .timeline-demo {
    p {
      color: #888;
      font-size: 0.8rem;
    }
    h4 {
      color: #666;
      font-weight: normal;
    }
    .recent {
      text-align: left;
      padding: 13px 0 0 20px;
      color: #999;
    }
  }
  .vux-timeline > ul {
    padding: 0;
    li {
      background-color: pink;
      .vux-timeline-item-tail {
        position: absolute;
        content: '';
        height: 100%;
        width: 1px;
        left: 19px;
        top: 20px;
        background-color: #04BE02;
      }
      .vux-timeline-item-head-first {
        width: 20px;
        height: 20px;
        left: 10px;
        top: 10px;}
      .vux-timeline-item-head {
        width: 10px;
        height: 10px;
        left: 14px;
        top: 9px;}
    }
  }
  .x-header{
    position: fixed;
    width: 100%;
    z-index: 999;
  }
</style>
