<template>
  <div class="cu-app">
    <search
      position="absolute"
      auto-fixed
      placeholder="搜索关键字"
      ref="search"></search>
    <div class="clearfix">
      <div class="cu-type1">
        <selector name="type1" ref="region" title="区域" :options="regionType" v-model="region" @on-change="onChange"></selector>
      </div>
      <div class="cu-type2">
        <selector name="type2" ref="departments" title="科室类型" :options="departmentsType" v-model="departments" @on-change="onTyChange"></selector>
      </div>
    </div>
    <flexbox>
      <flexbox-item><div class="flex-demo">我的</div></flexbox-item>
      <flexbox-item><div class="flex-demo">新建</div></flexbox-item>
    </flexbox>
  </div>
</template>

<script>

export default {
  name: 'Customer',
  data () {
    return {
      region: '昌平区',
      departments: '外科',
      regionType: ['昌平区', '海淀区', 'C'],
      departmentsType: ['外科', '内科', '急诊']
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    },
    onTyChange () {
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
    .cu-type1, .cu-type2 {
     width: 50%;
      float: left;
      .weui-cell_select .weui-cell__bd:after {
        transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
      }
      .vux-selector.weui-cell_select-after {
        padding-left: 0;
        background-color: #fff;
      }
    }
  }

</style>
