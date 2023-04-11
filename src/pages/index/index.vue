<template>
  <view class="header portrait">
    <HeadTabBar></HeadTabBar>
    <XLevelScrollView></XLevelScrollView>
  </view>
  <view class="content portrait">
    <view class="contentBox">
      <view class="leftContent">
        <template v-for="(ct, idx) in contents" :key="idx">
          <ContentBox :imgUrl="ct.url" v-if="(idx + 1) % 2 == 1">
            {{ ct }}
          </ContentBox>
        </template>
      </view>
      <view class="rightContent" v-if="contents.length >= 2">
        <template v-for="(ct, _idx) in contents" :key="_idx">
          <ContentBox :imgUrl="ct.url" v-if="(_idx + 1) % 2 == 0">
            {{ ct }}
          </ContentBox>
        </template>
      </view>
    </view>
    <view>没有更多啦</view>
  </view>
  <view class="footer portrait">
    <FooterTabBar></FooterTabBar>
  </view>
  <view class="landscape">
    <LandscapeWarning></LandscapeWarning>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import XLevelScrollView from '@/components/XLevelScrollView/XLevelScrollView.vue';
import HeadTabBar from '@/components/HeadTabBar/HeadTabBar.vue';
import FooterTabBar from '@/components/FooterTabBar/FooterTabBar.vue';
import LandscapeWarning from '@/components/LandscapeWarning/LandscapeWarning.vue';
import ContentBox from '@/components/ContentBox/ContentBox.vue';
const title = ref('Hello');
const contents = reactive([
  {
    url: 'www.a.com',
    id: 'aaa'
  },
  {
    url: 'www.b.com',
    id: 'bbb'
  },
  {
    url: 'www.c.com',
    id: 'ccc'
  }, {
    url: 'www.d.com',
    id: 'ddd'
  }, {
    url: 'www.d.com',
    id: 'ddd'
  }, {
    url: 'www.d.com',
    id: 'ddd'
  }, {
    url: 'www.d.com',
    id: 'ddd'
  },
])
</script>

<style lang="scss" scoped>
@import 'normalize.css';
@import '../../assets/scss/base.scss';
@import './index.scss';
</style>
