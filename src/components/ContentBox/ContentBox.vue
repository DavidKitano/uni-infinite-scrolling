<template>
  <view class="ContentBox">
    <img :src="imgUrl" alt="网络错误" loading=" lazy" width="100%" decoding="async" />ContentBox
    <slot></slot> {{ imgUrl }}
  </view>
</template>

<script lang="ts">
export default {
  name: "ContentBox",
  props: ['imgUrl'],
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() { },
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() { },
  // 组件周期函数--监听组件数据更新之后
  updated() { },
  // 组件周期函数--监听组件激活(显示)
  activated() { },
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() { },
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() { },
} 
</script>

<style scoped lang="scss">
@import 'normalize.css';
@import '../../assets/scss/base.scss';
@import './ContentBox.scss';
</style>