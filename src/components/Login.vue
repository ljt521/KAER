<template>
  <div>
    <div class="dy-top">
      <x-header slot="header" :left-options="{showBack: false}">登录</x-header>
    </div>
    <div class="login-input-box">
      <group>
      <x-input title="账号" placeholder="请输入"></x-input>
      <x-input title="密码" type="password" placeholder="请输入"></x-input>
      </group>
      <div class="login-bo">
        <x-button type="primary">登录</x-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Login',
    data() {
    },
    methods: {}
  }
</script>

<style lang="less">
  .login-input-box {
    margin: 20% 15px;
    .login-bo {
      margin-top: 10px;
    }
  }
</style>
