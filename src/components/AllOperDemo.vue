<!--全部手术演示-->
<template>
  <div class="co-top" >
    <swipeout>
      <swipeout-item transition-mode="follow" class="fo-tex" v-for="(operationDemo,index) in operationDemoData" :key="index" >
        <div slot="right-menu" >
          <swipeout-button type="primary" @click.native="onButtonClick(operationDemo)">编辑</swipeout-button>
          <swipeout-button type="warn" @click.native="deleteData(operationDemo.id)">删除</swipeout-button>
        </div>
        <div slot="content" :class="{'vux-1px-b': index !== operationDemoData.length}" >
          <span class="fo-span"></span>
          <div-span v-bind:dictCode="'SSMC'" v-bind:dictItemCode="operationDemo.operationName"></div-span>
          <p style="margin: 10px 0">
            <icon class="all-img-size " style="color: #888888;font-size: 15px;margin-left: -2px;padding-right: 13px;" type="waiting-circle"></icon>
            <span>{{operationDemo.demoDate }}</span>
          </p>
          <p style="margin: 10px 0">
            <span class="right">
              <img class="all-img-size " src="../assets/image/follow_up_role.png" alt="">
              <div-span v-bind:dictCode="'SSJS'" v-bind:dictItemCode="operationDemo.roleinOperation"></div-span>
            </span>
          </p>
          <p style="margin: 10px 0">
            <span class="right">
              <img class="all-img-size " src="../assets/image/follow_up_position.png" alt="">
              <div-span v-bind:dictCode="'CH'" v-bind:dictItemCode="operationDemo.demoOccasion"></div-span>
            </span>
          </p>
          <p style="margin: 10px 0">
            <span class="right"><img class="all-img-size " src="../assets/image/follow_up_product_information.png" alt="">
              <template v-for="(data, i) in operationDemo.product[0]">
                <div-span v-bind:dictCode="'CPXX'" v-bind:dictItemCode="data"></div-span>
                <div-span v-bind:dictCode="'CPPP'" v-bind:dictItemCode="operationDemo.product[1][i]"></div-span>
              </template>
            </span>
            </p>
            <p style="margin: 10px 0">
              <span class="right"><img class="all-img-size " src="../assets/image/follow_up_product_information.png" alt="">{{operationDemo.activityName }}</span>
            </p>
          </div>
      </swipeout-item>
    </swipeout>
  </div>
</template>
<script>
  export default {
    name: 'AllOperDemo',
    data() {
      return{
        operationDemoData:[]
      }
    },
    props:['personId'],
    created(){
      this.getOperationDemoInfo()
    },
    methods: {
      getOperationDemoInfo(){
        this.$search('/api/OperationDemoInfo', {page: 0, size: 20}, {'customer.id': this.personId}).then(request => {
          this.operationDemoData= this.$sortData(request);
        }).catch(error => {
          console.log(error)
        })
      },
      deleteData(id) {
        let that = this
        that.$vux.confirm.show({
          title: '操作提醒',
          content: '是否确认删除?',
          onConfirm() {
            that.$del('/api/OperationDemoInfo/' + id).then(val => {
              that.$vux.toast.text('删除成功', 'middle');
              that.getOperationDemoInfo()
            }).catch(err => {
            })
          }
        })

      },
      onButtonClick(data){
        this.$router.push({
          name: 'NewOperDemo',
          params: {
            title: '编辑手术演示',
            data:data
          }
        })
      }

    },

  }
</script>

<style lang="less">
  .co-top{
    padding:10px 15px;
    text-align: left;
    background: white;
    .fo-span {
      display: inline-block;
      width: 2px;
      height: 13px;
      margin-right: 5px;
      background-color: #074089;
      position: relative;
      top: 2px;
    }
    .fo-tex {
      margin-bottom: 10px;
      border-bottom: 1px solid #C7C7C7;
      p{
        color: #888888;
        font-size: 13px;
        .right{
          margin-right: 30px;
          img{
            vertical-align: middle;
            margin-right: 5px;
          }
        }
      }
    }
    .vux-1px-b:after{
      border: none;
    }

  }
  .slide {
    padding: 0;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }

  .animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
  }

  .all-img-size  {
    padding-right: 5px;
    width: 15px;
    height: 15px;
  }

</style>
