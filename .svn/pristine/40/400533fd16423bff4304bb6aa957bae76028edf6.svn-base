<template>
  <div v-wechat-title="title">
    <div class="dy-top">
      <x-header>{{title}}</x-header>
    </div>
    <div class="my-concern">
      <div class="cu-con" v-if="$route.params.title == '我的关注(客户)'">
        <div class="cu-content" v-for="(customer,index) in customerData" :key="index">
          <div class="cu-content-top">
            <div class="user-img">
              <img v-bind:src="customer.hospitalName" alt="dadada">
            </div>
            <div class="userImg-r">
              <p><span style="font-size: 15px;padding-right: 10px;">{{customer.name}}</span>
                <span style="font-size: 18px;padding-right: 10px;">
                      <div-span style="font-size: 13px" v-bind:dictCode="'ZC'" v-bind:dictItemCode="customer.title"></div-span>
                    </span>
                <span class="cu-title" v-if="index < 2">待跟进</span></p>
              <p>
                <img class="cu-img-size" src="../assets/image/client_hospital.png" alt="">
                <span style="color: #888888;font-size: 13px" class="cu-span-top">
                      <div-span style="display: inline-block;max-width: calc(100% - 20px);" class="span-web"
                                v-bind:dictCode="'YYXX'" v-bind:dictItemCode="customer.hospitalCode"></div-span>
                      </span>
              </p>
              <p style="margin-top: 3px">
                <img class="cu-img-size" src="../assets/image/client_department.png" alt="">
                <span style="color: #888888;font-size: 13px" class="cu-span-top">
                        <div-span v-bind:dictCode="'KSLX'" v-bind:dictItemCode="customer.deptCode"></div-span>
                      </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cu-con" v-if="$route.params.title == '我的关注(同事)'">
        <div class="cu-content" v-for="(subCustomer,index) in subCustomerData" :key="index">
          <div class="cu-content-top">
            <div class="user-img">
              <img v-bind:src="subCustomer.hospitalName" alt="dadada">
            </div>
            <div class="userImg-r">
              <p><span style="font-size: 15px;padding-right: 5px;">{{subCustomer.name}}</span>
                <div-span style="font-size: 13px;" v-bind:dictCode="'ZC'"
                          v-bind:dictItemCode="subCustomer.title"></div-span>
                <span class="cu-title" v-if="index < 2">待跟进</span>
              </p>
              <p style="margin-top: 3px"><img class="cu-img-size" style="position: relative;"
                                              src="../assets/image/client_hospital.png" alt="">
                <span style="color: #888888;font-size: 13px" class="cu-span-top">
                      <div-span style="display: inline-block;max-width: calc(100% - 40px);" class="span-web"
                                v-bind:dictCode="'YYXX'" v-bind:dictItemCode="subCustomer.hospitalCode"></div-span>
                    </span></p>
              <p style="margin-top: 3px">
                <img class="cu-img-size" style="position: relative;" src="../assets/image/client_department.png"
                     alt=""/>
                <span style="color: #888888;font-size: 13px;display: inline-block;line-height: 19px;"
                      class="cu-span-top">
                      <div-span style="position: relative;display: inline-block;line-height: 19px;"
                                v-bind:dictCode="'KSLX'" v-bind:dictItemCode="subCustomer.deptCode"></div-span>
                    </span>
                <span style="color: #888888;display:inline-block;max-width: calc(100% - 160px);line-height:21px;float:right;"  class="span-web">
                      <img style="height: 13px;" src="../assets/image/client_responsible_person.png" alt=""/>
                          {{subCustomer.leaderName}}
                    </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MyConcern',
    data () {
      return {
        title: '',
        customerData: [],
        subCustomerData: [],
      }
    },
    mounted () {
      this.title = this.$route.params.title || this.$route.meta.title
      if (this.$route.params.title == '我的关注(客户)') {
        this.$get('/api/customer', {sort: 'isFollowUp,name,DESC', page: 0, size: 10}).then(info => {
          this.customerData = info
        }).catch(error => {
          console.log(error)
        })
      } else if (this.$route.params.title == '我的关注(同事)') {
        this.$search('/api/customer', {sort: 'isFocusOn,isFollowUp,name,DESC', page: 0, size: 10},{isSubData: 'true'}).then(info => {
          this.subCustomerData = info
        }).catch(error => {
          console.log(error)
        })
      }
    },
    methods: {}
  }
</script>
<style lang="less">
.my-concern {
  .cu-con {
    padding: 0 15px;
    .cu-content {
      background-color: #fff;
      margin-top: 10px;
      border-radius: 5px;
      box-shadow: 0 0 2px 2px #eee;
      .cu-content-top {
        position: relative;
        padding: 10px;
        .user-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #e6e7ec;
          overflow: hidden;
          display: inline-block;
          float: left;
          margin: 4px 0 0 10px;
          img {
            width: 50px;
            height: 50px;
          }
        }
        .userImg-r {
          width: calc(100% - 110px);
          margin-left: 70px;
          position: relative;
          .cu-title {
            font-size: 11px;
            width: 42px;
            background-color: #f6be07;
            display: inline-block;
            border-radius: 5px;
            color: #ffffff;
            text-align: center;
            line-height: 18px;
            position: relative;
            top: -1px;
          }
        }
      }
    }
  }
  p {
    margin: 0;
    text-align: left;
  }

  .cu-img-size {
    float: left;
    padding-right: 5px;
    width: 15px;
    height: 15px;
    margin-top: 4px
  }

  .cu-span-top {
    position: relative;
    top: 2px
  }

  .span-web {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
