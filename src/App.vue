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

page,
#app {
  width: 100vw;
  height: 100vh;
  display: block;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
