<template>
  <view class="header portrait">
    <HeadTabBar></HeadTabBar>
    <XLevelScrollView></XLevelScrollView>
  </view>
  <scroll-view class="content portrait" scroll-y @scrolltolower="reachBottom">
    <view class="leftContent" id="leftContent">
      <template v-for="(ct, idx) in contentsLeft" :key="idx">
        <ContentBox :imgUrl="ct.url" :avatarUrl="ct.avatar">
          <template #text> {{ ct.text }} </template>
          <template #like>{{ ct.like }}</template>
          <template #id>{{ ct.id }}</template>
        </ContentBox>
      </template>
    </view>
    <view class="rightContent" id="rightContent">
      <template v-for="(ct, _idx) in contentsRight" :key="_idx">
        <ContentBox :imgUrl="ct.url" :avatarUrl="ct.avatar">
          <template #text>{{ ct.text }}</template>
          <template #like> {{ ct.like }}</template>
          <template #id>{{ ct.id }}</template>
        </ContentBox>
      </template>
    </view>
    <!-- <view>没有更多啦</view> -->
  </scroll-view>
  <view class="footer portrait">
    <FooterTabBar></FooterTabBar>
  </view>
  <view class="landscape">
    <LandscapeWarning></LandscapeWarning>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { onLoad, onShow, onReady } from '@dcloudio/uni-app';
import XLevelScrollView from '@/components/XLevelScrollView/XLevelScrollView.vue';
import HeadTabBar from '@/components/HeadTabBar/HeadTabBar.vue';
import FooterTabBar from '@/components/FooterTabBar/FooterTabBar.vue';
import LandscapeWarning from '@/components/LandscapeWarning/LandscapeWarning.vue';
import ContentBox from '@/components/ContentBox/ContentBox.vue';
import * as opt from '@/utils/optimize'
import * as server_sim from '@/utils/serverSimulator'
let isLoad: Boolean = true;
let contentsLeftHeight = ref<Number>(0);
let contentsRightHeight = ref<Number>(0);
const contentsLeft = reactive([
  { url: "", id: "", avatar: "", text: "", like: "" }
]);
const contentsRight = reactive([
  { url: "", id: "", avatar: "", text: "", like: "" }
]);


/**
 * 计算高度
 */
const computeHeight = () => {
  // 不能用DOM操作，因为除了H5等页面其他的平台是没有DOM的
  try {
    uni.createSelectorQuery().select('#leftContent').boundingClientRect(data => {
      contentsLeftHeight.value = data.height; // 没有错，是uniapp自身库的一个定义问题
    }).exec();
    uni.createSelectorQuery().select('#rightContent').boundingClientRect(data => {
      contentsRightHeight.value = data.height; // 没有错，是uniapp自身库的一个定义问题
    }).exec();
  }
  catch (e) {
    console.error("获取高度出现错误\n" + e);
  }
}

/**
 * 获取内容
 * @param isInit 是否是初始化操作
 */
const getContents = async (isInit: Boolean) => {
  isLoad = false;
  let cts: any[];
  if (isInit) {
    console.log('初始化');
    isLoad = true;
    contentsLeft.pop();
    contentsRight.pop();
    contentsLeftHeight.value = 0;
    contentsRightHeight.value = 0;
  }
  cts = JSON.parse(JSON.stringify(server_sim.contents)); // 深拷贝，接入Api，每次只返回4~8个
  // 成功的话
  if (cts.length < 1) {
    console.log('没有内容啦');
    return;
  }
  isLoad = true;
  for (let i = 0; i < cts.length; i++) {
    await opt.getRatioHW(cts[i].url, 16 * 11).then((ratioH) => {
      if (ratioH.newUrl) {
        cts[i].url = ratioH.newUrl;
      }
      if (contentsLeftHeight.value == contentsRightHeight.value) {
        contentsLeft.push(cts[i]);
        console.log('相等' + contentsLeft);
        contentsLeftHeight.value += (ratioH.res + 16 * 5.5); // 图片高+其它部分的高 1rem=16px
        console.log('左高', contentsLeftHeight.value);
        console.log('右高', contentsRightHeight.value);
      }
      else if (contentsLeftHeight.value < contentsRightHeight.value) {
        contentsLeft.push(cts[i]);
        console.log('右大' + contentsLeft);
        contentsLeftHeight.value += (ratioH.res + 16 * 5.5);
        console.log('左高', contentsLeftHeight.value);
        console.log('右高', contentsRightHeight.value);
      }
      else {
        contentsRight.push(cts[i]);
        console.log('左大' + contentsRight);
        contentsRightHeight.value += (ratioH.res + 16 * 5.5);
        console.log('左高', contentsLeftHeight.value);
        console.log('右高', contentsRightHeight.value);
      }
    });
  }
};

/**
 * 触底执行
 * @param args rest参数
 */
const reachBottom = (...args: any[]) => {
  uni.showToast({
    title: "加载中...",
    mask: true,
    icon: "loading"
  })
  if (!isLoad) {
    return;
  }
  opt.debounce(() => { // 防抖
    getContents(false);
    console.log('触底');
  }, 1500, true);

  setTimeout(function () {
    uni.hideLoading();
  }, 3000);
}

/**
  生命周期函数
*/
onReady(async () => {
  computeHeight(); // 初始化计算一下高度
  await getContents(true);
});
</script>

<style lang="scss" scoped>
@import 'normalize.css';
@import '../../assets/scss/base.scss';
@import './index.scss';
</style>
