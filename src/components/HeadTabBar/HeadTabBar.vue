<template>
  <view class="HeadTabBarBox">
    <view class="HeadTabBar">
      <Camera class="icon"></Camera>
      <view class="HeadTabBarItemsBox">
        <view class="HeadTabBarItems">
          <button class="inactive">关注</button>
        </view>
        <view class="HeadTabBarItems">
          <button class="active">发现</button>
        </view>
        <view class="HeadTabBarItems">
          <button class="inactive">{{ localPlace }}</button>
        </view>
      </view>
    </view>
    <view class="SearchBar">
      <Search :color="searchColor" @click="search(searchContent)"></Search>
      <input v-model="searchContent" :placeholder="placeholder" placeholder-class="inputPlaceholder" maxlength="15"
        @input="getCandidate()" @keyup.enter="search(searchContent)" @confirm="search(searchContent)" />
    </view>
  </view>
</template>


<script lang="ts">
import Camera from '../Icons/Camera.vue'
import Search from '../Icons/Search.vue'

export default {
  name: "HeadTabBar",
  data() {
    return {
      searchContent: "",
      placeholder: "",
      searchColor: "#b0b0b0",
      localPlace: "同城"
    }
  },
  computed: {},
  methods: {
    getPlaceholder: () => {
      // 通过后台/其它算法获取placeholder
      // let res = ....
      let res = '妆容画廊';
      return `大家都在搜 "${res}"`;
    },
    search: (content: string) => {
      // 搜索
      if (!content)
        return;
      console.log(`搜索了内容${content}`);
    },
    getCandidate: () => {
      // 通过算法获取搜索候选
      // 此处应该用上防抖和节流
    },
    getLocalPlace: () => {
      // 通过算法获取当前同城位置
      let res = '深圳'
      return res;
    }
  },
  watch: {},
  components: {
    Camera,
    Search
  },

  // 组件周期函数--监听组件挂载完毕
  mounted() {
    this.placeholder = this.getPlaceholder();
    this.localPlace = this.getLocalPlace();
  },
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
@import './HeadTabBar.scss';
</style>