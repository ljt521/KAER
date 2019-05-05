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
    <div class="cu-con">
      <flexbox>
        <flexbox-item><div class="flex-demo"><p class="cu-span"><span class="cu-left"></span><span class="cu-right">我的</span></p></div></flexbox-item>
        <flexbox-item><div class="flex-demo"><div class="cu-div"><x-icon type="ios-plus-empty" size="21"></x-icon><span>新建客户</span></div></div></flexbox-item>
      </flexbox>
      <div class="cu-content">
        <div class="cu-content-top">
          <div class="userImg">
            <img src="" alt="dadada">
          </div>
          <div class="userImg-r">
            <p><span style="font-size: 20px;padding-right: 10px;">赵静</span>
              <span style="font-size: 18px;padding-right: 10px;">主治医师</span>
              <span class="cu-title">待跟进</span></p>
            <p><span>中国人民解放军第三军区医院</span></p>
            <p><span>骨科</span></p>
          </div>
        </div>
      </div>
    </div>
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
    .cu-con {
      padding: 0 15px;
      margin: 18px 0;
      .cu-span {
        padding: 0;
        margin: 0;
        .cu-left {
          float: left;
          width: 6px;
          background-color: #073f89;
          height: 21px;
          border-radius: 3px;
        }
        .cu-right {
          padding-left: 10px;
        }
      }
      .cu-div {
        text-align: right;
        color: #19498b;
        span {
          float: right;
        }
      }
      .cu-content {
        background-color: #fff;
        margin-top: 15px;
        border-radius: 5px;
        .cu-content-top {
          padding: 15px;
          .userImg{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #e6e7ec;
            overflow: hidden;
            display: inline-block;
            float: left;
          }
          .userImg-r {
            width: calc(100% - 80px);
            margin-left: 90px;
            .cu-title {
              width: 60px;
              height: 20px;
              background-color: #f6be07;
              display: inline-block;
              border-radius: 5px;
              color: #ffffff;
              text-align: center;
              line-height: 20px;
              position: relative;
              top: -5px;
            }
          }
        }

      }
    }
  }
  p {
    margin: 0;
    text-align: left;
  }
</style>
