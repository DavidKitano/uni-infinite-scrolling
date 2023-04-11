<template>
  <view class="LandscapeWarning">
    <text>哎呀！试试竖屏或者在更大的屏幕上浏览吧！</text>
    <hr>
    <text>暂不支持在小机型横屏上浏览。</text>
  </view>
</template>

<script>
export default {
  name: "LandscapeWarning",
  props: {},
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
@import './LandscapeWarning.scss';
</style>