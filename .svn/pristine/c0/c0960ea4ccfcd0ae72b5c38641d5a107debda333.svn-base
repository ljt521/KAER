<template>
  <div class="location">
    <div class="search">
      <search position="absolute" auto-fixed ref="searchData" placeholder="搜索关键字" v-model="keywordsSearch"></search>
      <div class="locationTab">
        <div class="filter">
          <div-selector v-bind:dictCode="'KSLX'" v-on:listenSelect="departmentChange"></div-selector>
        </div>
        <div class="filter">
          <div-selector v-bind:dictCode="'QY'" v-on:listenSelect="areaChange"></div-selector>
        </div>
        <div class="filter">
          <div-selector v-bind:dictCode="'QY'" v-on:listenSelect="areaChange"></div-selector>
        </div>
        <div class="filter">
          <div-selector v-bind:dictCode="'QY'" v-on:listenSelect="areaChange"></div-selector>
        </div>
      </div>
      <div class="hospitalInfo">
        <div class="info" v-for="item of list" :key="item.id">
          <h3>人民医院</h3>
          <span>医院等级</span>
          <span>医院类型</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Location',
    data() {
      return {
        keywordsSearch: '',
        list: [{id:1},{id:2},{id:3},{id:4},{id:5}]
      }
    },

  }
</script>
<style lang="less">
  .location{
    .search{
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 99;
      height: 80px;
      .weui-search-bar__form {
        border-radius: 50%;
      }
      .weui-search-bar {
        padding: 4px 10px;
      }
      .weui-search-bar__input {
        padding: 5px 2px !important;
      }
      .weui-search-bar {
        background-color: #073f89;
      }
      .weui-search-bar__label {
        top: 5px;
      }
    }
    .locationTab{
      position: fixed;
      top:40px;
      background-color: #fff;
      width: 100%;
      .filter{
        display: inline-block;
        background-color: #fff;
        float: left;
        width: 25%;
        .vux-selector.weui-cell_select-after {
          background-color: #fff;
          height: 35px;
        }
        .weui-label {
          width: 70px;
        }
      }
    }
    .hospitalInfo{
      text-align: left;
      padding-left: 15px;
      margin-top: 50px;
      background: #fff;
      .info{
        border-bottom: 1px solid #D9D9D9;
        height: 49px;
        h3{
          margin: 5px 0;
        }
        span{
          display: inline-table;
          width: 100px;
          color:#999;
        }
      }
    }
  }
</style>
