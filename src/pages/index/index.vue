<template>
  <view class="header portrait">
    <HeadTabBar></HeadTabBar>
    <XLevelScrollView></XLevelScrollView>
  </view>
  <view class="content portrait">
    aa
  </view>
  <view class="footer portrait">
    <FooterTabBar></FooterTabBar>
  </view>
  <view class="landscape">
    <LandscapeWarning></LandscapeWarning>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import XLevelScrollView from '@/components/XLevelScrollView/XLevelScrollView.vue'
import HeadTabBar from '@/components/HeadTabBar/HeadTabBar.vue'
import FooterTabBar from '@/components/FooterTabBar/FooterTabBar.vue'
import LandscapeWarning from '@/components/LandscapeWarning/LandscapeWarning.vue'
const title = ref('Hello')
</script>

<style lang="scss" scoped>
//横屏
@media only all and (orientation: landscape) {
  .portrait {
    display: none;
  }

  .landscape {
    display: inherit;
  }

  @media only all and (min-height:600px) {
    .portrait {
      display: inherit;
    }

    .landscape {
      display: none;
    }
  }
}

//竖屏
@media only all and (orientation: portrait) {
  .portrait {
    display: inherit;
  }

  .landscape {
    display: none;
  }
}
</style>
