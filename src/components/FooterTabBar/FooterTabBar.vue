<template>
  <view class="FooterTabBarBox">
    <view class="HeadTabBarItems">
      <button class="active">首页</button>
    </view>
    <view class="HeadTabBarItems">
      <button class="inactive">商城</button>
    </view>
    <view class="HeadTabBarItems">
      <button class="adds">+</button>
    </view>
    <view class="HeadTabBarItems">
      <button class="inactive">消息</button>
      <text v-if="msgCount > 0" class="msgCount">{{ msgCount }}</text>
    </view>
    <view class="HeadTabBarItems">
      <button class="inactive">我</button>
    </view>
  </view>
</template>

<script>
export default {
  name: "FooterTabBar",
  data() {
    return {
      msgCount: 8
    }
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
@import './FooterTabBar.scss';
</style>