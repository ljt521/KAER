<!--作者：吕俊涛 功能：动态组件-->
<template>
  <div id="timeAx">

    <div>
      <div class="divBox"></div>
      <div class="space" v-for="item of list">
        <div class="dy-div-icon">
          <icon type="waiting-circle"></icon>
        </div>
        <div class="dy-div">
          <i class="dy-size">{{item.createdDate|formatDate}}</i>
          <i class="dy-size2">{{item.personName}}</i>
          <i class="dy-size3">
            <span>{{item.direction}}</span><div-span v-bind:dictCode="'YYXX'" v-bind:dictItemCode="item.hospitalCode"></div-span> 
            <span class="router-link" @click="goDiaLog">@{{item.customerName}}@</span> 
            <span>{{item.obj}}</span>
            <span class="router-link" @click="goDiaLog">#{{item.content}}#</span>
          </i>
        </div>
      </div>


    </div>
<!--    <div v-transfer-dom>-->
<!--      <x-dialog v-model="showToast" class="dialog-demo" hide-on-blur>-->
<!--        <div style="padding:15px;font-size: 13px" >-->
<!--          <p style="margin: 10px 0">-->
<!--            <span class="right">法国“器官移植”原则及立法建设回顾性研究 </span>-->
<!--          </p>-->
<!--          <p style="margin: 10px 0">-->
<!--            <span class="right">法国“器官移植”原则及立法建设回顾性研究 </span>-->
<!--          </p>-->

<!--        </div>-->
<!--      </x-dialog>-->
<!--    </div>-->

  </div>

</template>

<script>
  import { XDialog } from 'vux'
  import { TransferDom } from 'vux'
  export default {
    name: 'TimeAxis',
    directives: {
      TransferDom
    },
    components: {
      XDialog
    },
    data () {
      return {
        list:[],
        showToast:false,
      }
    },
    created(){
     this.getDynamic()
    },
    methods: {
      getDynamic(){
        this.$get('/api/customerDynamic',{sort:'createdDate,DESC'}).then(info => {
          this.list = info;
        })
      },
      goDiaLog(){
        this.showToast=!this.showToast;
      }
    }
  }
</script>

<style lang="less">
  #timeAx{
    padding-top: 6px;
    margin-bottom: 30px;
    .space {
      padding: 12px 12px 0 12px;
      margin: 0 15px 10px;
      background-color: #fff;
      border-radius: 5px;
      text-align: left;
      position: relative;
      .dy-div-icon {
        position:absolute;
      }
      .dy-div {
        padding-top: 5px;
        padding-left: 33px;
        font-size: 15px;
        .dy-size{
          display: inline-block;
          color:#888888;
          font-style: normal;
        }
        .dy-size2{
          display: block;
          font-size: 13px;
          color:#888888;
          float: right;
          font-style: normal;
        }
        .dy-size3{
          font-style: normal;
          font-size: 13px;
          display: block;
          padding: 10px 0;
        }
        .router-link {
          color: #1D679D;
          text-decoration: none;
        }
      }
      .weui-icon-waiting-circle::after {
        content: '';
        width: 1px;
        height: calc(116px - 20px);
        border-left: 1px solid #DDDDDD;
        display: block;
        position: relative;
        left: 16px;
        top: -2px;
      }
    }
    .dialog-demo{
      p{
        color: #888888;
        font-size: 13px;
      }
    }
  }
</style>
