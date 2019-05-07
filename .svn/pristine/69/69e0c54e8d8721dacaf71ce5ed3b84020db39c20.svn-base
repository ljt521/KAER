<template>
  <div class="divBox ">
    <swipeout class="vux-1px-tb">
      <swipeout-item transition-mode="follow"  v-for="(item,i) of 3" :key="i">
        <div slot="right-menu">
          <swipeout-button type="primary">编辑</swipeout-button>
          <swipeout-button type="warn">删除</swipeout-button>
        </div>
        <div slot="content" :class="{'vux-1px-b': i !== 3}" style="padding: 0 12px;">
          <cell is-link>
            <span slot="title" >
              <span class="spanCell">全<span class="visible">全</span>国：</span>
              <span class="leftSpan">常委</span>
              青委副主任
            </span>
          </cell>
        </div>
      </swipeout-item>
    </swipeout>
      <div class="cardFoot" v-on:click="goAacdemicTeam">
        <img src="../assets/image/client_details_add@2x.png" alt="" >&nbsp;新建学术团队
      </div>
  </div>
</template>
<script>
  export default {
    name: 'AcademicDuty',
    data () {
      return {
        list: [{key: 'eh', value: '熟悉'}, {key: 'fh', value: '一般'}],
      }
    },
    methods:{
      goAacdemicTeam(){
        this.$router.push({
          path: '/academic-team'
        })
      }
    }
  }
</script>
<style lang="less" >
  .divBox{
    background-color: white;
    margin: 0 15px;
    padding-bottom: 10px;
  }
  .weui-cell{
    padding: 7px 15px;
    font-size: 14px;
    text-align: left;
  }
  .weui-cell:before{
    border: none ;
  }
  .spanCell{
    width: 20%;
    color:#A4A4A4;
  }

  .cardFoot{
    img{
      width: 15px;
      vertical-align: middle;
    }
    font-size: 14px;
    padding-top: 12px;
    margin-bottom: 10px;
  }

</style>
