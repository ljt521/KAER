<template>
  <div v-transfer-dom>
    <x-dialog v-model="openDiaLog" class="dialog-demo" :dialog-style="{'max-width': '90%', width: '90%', height: '80%'}">
      <div style="height: 18%"></div>
      <div class="img-box">
        <p style="text-align: center">请点击下面图标新增业务对象</p>
        <div class="fo-line">
          <grid :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item :link="{ path: '/new-consul-info'}">
              <img slot="icon" src="../../assets/image/add_consultation.png">
              <span slot="label">新会诊</span>
            </grid-item>
            <grid-item :link="{ path: '/new-oper-demo'}">
              <img slot="icon" src="../../assets/image/add_operation_demonstration.png">
              <span slot="label">新手术演示</span>
            </grid-item>
            <grid-item :link="{ path: '/new-iecture'}">
              <img slot="icon" src="../../assets/image/add_lecture.png">
              <span slot="label">新讲课</span>
            </grid-item>
          </grid>
        </div>
        <div>
          <grid :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item :link="{ path: '/new-paper'}">
              <img slot="icon" src="../../assets/image/add_paper.png">
              <span slot="label">新论文发表</span>
            </grid-item>
            <grid-item :link="{ path: '/new-topic'}">
              <img slot="icon" src="../../assets/image/add_research.png">
              <span slot="label">新参与课题</span>
            </grid-item>
            <grid-item :link="{ path: '/new-learning'}">
              <img slot="icon" src="../../assets/image/add_learning.png">
              <span slot="label">学术参与</span>
            </grid-item>
          </grid>
        </div>
      </div>
      <div @click="openDiaLog=false" style="position: absolute;
          bottom: 20px;
          left: 45%;
          width: 35px;
          height: 35px;
          line-height: 30px;">
        <img src="../../assets/image/add_close.png" alt="">
      </div>
    </x-dialog>
  </div>
</template>
<script>
  import {Grid, XDialog, TransferDom} from 'vux'

  export default {
    name: 'NewDiaLog',
    directives: {
      TransferDom
    },
    components: {
      XDialog,
      Grid
    },
    data () {
      return {
        openDiaLog: false
      }
    },
    mounted () {
    },
    methods: {
      /**
       * @desc:显示弹窗
       * @param:parentToChildData  [string]  父组件向子组件传递的数据,这里是图片地址
       * @param:isVisible          [boolean]  弹窗是否可见
       * */
      isShowDia(isVisible){
        this.openDiaLog = isVisible;
      },
    },
    created () {
    }
  }
</script>
