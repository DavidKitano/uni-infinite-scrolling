<template>
  <view class="XLevelScrollViewBox">
    <scroll-view class="XLevelScrollView" scroll-x>
      <view class="XLevelScrollViewItems">
        <button class="inactive">资讯</button>
      </view>
      <view class="XLevelScrollViewItems">
        <button class="inactive">搞笑</button>
      </view>
      <view class="XLevelScrollViewItems">
        <button class="inactive">游戏</button>
      </view>
      <view class="XLevelScrollViewItems">
        <button class="inactive">穿搭</button>
      </view>
      <view class="XLevelScrollViewItems">
        <button class="active">Vlog</button>
      </view>
      <view class="XLevelScrollViewItems">
        <button class="inactive">科技数码</button>
      </view>
      <view class="XLevelScrollViewItems">
        <button class="inactive">运动健身</button>
      </view>
      <view class="XLevelScrollViewItems">
        <button class="inactive">休闲娱乐</button>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts">
export default {
  name: "XLevelScrollView",
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
@import './XLevelScrollView.scss';
</style>