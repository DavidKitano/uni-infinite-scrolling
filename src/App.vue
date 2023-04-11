<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
@import 'normalize.css';
@import './assets/scss/base.scss';

/* *,
page {
  background-color: #FAFAFA;
} */

::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: transparent;
}
</style>
