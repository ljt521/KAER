<template>
  <div>
    <div class="search_box">
      <div class="search_middle">
        <div class="search_input_box" @click="touch">
          <i class="weui-icon-search search_icon"></i>
          <x-input class="search_input" v-model="countText" :placeholder="placeholder || '输入关键字'"
                   @on-focus="onFocus"
                   @on-blur="onBlur"
                   @on-enter="enter"
                   @on-click-clear-icon="clickClear"
                   @compositionstart="onComposition($event, 'start')"
                   @compositionend="onComposition($event, 'end')"
                   @input="onComposition($event, 'input')"></x-input>
        </div>
      </div>
      <div @click="searchClick" class="search_but">{{cancelText || '搜索'}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchBox',
    props: ['position', 'placeholder', 'cancelText'],
    data () {
      return {
        countText: '',
      }
    },
    methods: {
      emitEvent () {
        this.$nextTick(() => {
          this.$emit('input', this.countText)
          this.$emit('on-change', this.countText)
        })
      },
      onComposition ($event, type) {
        if (type === 'start') {
          this.onInput = true
        }
        if (type === 'end') {
          this.onInput = false
          this.emitEvent()
        }
        if (type === 'input') {
          if (!this.onInput) {
            this.emitEvent()
          }
        }
      },
      clickClear () {
        this.countText = ''
      },
      enter() {
        this.$emit('on-enter', this.countText)
      },
      searchClick() {
        if(this.countText) {
          this.$emit('on-search', this.countText)
        }
      },
      onFocus () {
        this.$emit('on-focus')
      },
      onBlur () {
        this.$emit('on-blur')
      },
      touch () {
        this.$emit('on-touch')
      },
    }
  }
</script>

<style lang="less">
  .search_input_box {
    position: absolute;
    width: calc(100% - 30px);
    text-align: center;
  }

  .search_middle {
    height: 30px;
    width: calc(100% - 60px);
    background-color: #fff;
    border-radius: 4px;
    display: inline-block;
    position: relative;
  }

  .search_box {
    width: 100%;
    background-color: #073f89;
    line-height: 38px;
    height: 38px;
    padding: 4px 0 0 10px;
    text-align: left;
  }

  .search_but {
    color: #fff;
    display: inline-block;
    height: 28px;
    width: 40px;
    position: relative;
    top: -9px;
    text-align: center;
    line-height: 28px;
    font-size: 13px;
  }

  .search_icon {
    position: absolute;
    left: 6px;
    top: 8px;
  }

  .search_input {
    padding: 0 !important;
    height: 30px !important;
    margin: 0 0 0 30px !important;
  }
</style>
