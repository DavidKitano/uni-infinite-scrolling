<template>
  <view class="ContentBox">
    <image :src="imgUrl" mode="widthFix" alt="网络错误" :lazy-load="true" :draggable="false" />
    <view class="ContentText">
      <slot name="text">加载中...</slot>
    </view>
    <view class="ContentBar">
      <view class="idBar">
        <image class="avatar" :src="avatarUrl" mode="scaleToFill" alt="网络错误" :lazy-load="true" :draggable="false"></image>
        <text class="id">
          <slot name=id>
            加载中...
          </slot>
        </text>
      </view>
      <view class="likeBar">
        <Heart>
          <slot name="like">0</slot>
        </Heart>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import Heart from '../Icons/Heart.vue'
export default {
  name: "ContentBox",
  props: ['imgUrl', 'avatarUrl'],
  components: {
    Heart
  },
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