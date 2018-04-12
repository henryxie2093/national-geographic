<template>
  <div id="app">
    <transition>
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-left"
    };
  }
};
</script>

<style lang="less" scoped>
.child-view {
  position: absolute;
  width: 100vw;
  transition: all 1s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(0px, 0);
}
</style>
