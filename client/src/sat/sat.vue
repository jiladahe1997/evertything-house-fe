<template>
  <div class="app">
    <div class="header">
      <span
        class="icon"
        @click="moreClickHandle"
      ><svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-gengduo" />
      </svg></span>
      <span>SAT</span>
      <span class="icon"><svg
        class="icon"
        aria-hidden="true"
      >
        <use xlink:href="#icon-fenxiang" />
      </svg></span>
    </div>
    <HeaderOptions
      :class="[
        'headerDropdown',
        moreVisible ? 'headerDropdown-open' : 'headerDropdown-close'
      ]"
    />
    <div class="main" />
    <div class="item">
      <div>
        <!-- <img
          class="item-img"
          src="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/r6-siege-meta_image-home-sledge.webp"
        > -->
        <video style="width:100%" controls src="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/ouput/fwq%E8%A2%AB%E5%A4%A7%E9%94%A4%E5%AE%A1%E9%97%AE_20190926000810_transcode_30.mp4"></video>
        <h2>WK窒息操作</h2>
        <a href="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/ouput/fwq%E8%A2%AB%E5%A4%A7%E9%94%A4%E5%AE%A1%E9%97%AE_20190926000810_transcode_30.mp4">点击观看></a>
      </div>
    </div>
    <div class="item">
      <div>
        <img
          class="item-img"
          src="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/rainbow6-home-header-secondary-discover-the-game_316830.webp"
        >
        <h2>WK旋转刀法</h2>
        <a href="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/%E6%97%8B%E8%BD%AC%E5%88%80%E6%B3%95.mp4">点击观看></a>
      </div>
    </div>
    <div class="item">
      <div>
        <img
          class="item-img"
          src="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/rainbow6-home-header-secondary-discover-the-game_316830.webp"
        >
        <h2>bg指挥wk绕后刀两人</h2>
        <a href="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/%E7%BB%95%E5%90%8E%E5%88%80%E4%B8%A4%E4%BA%BA.mp4">点击观看></a>
      </div>
    </div>
    <div class="item">
      <div>
        <img
          class="item-img"
          src="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/rainbow6-home-header-secondary-discover-the-game_316830.webp"
        >
        <h2>bg闪光盾</h2>
        <a href="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/bg%E9%97%AA%E5%85%89%E7%9B%BE%E5%A4%A7%E5%B8%88%E6%93%8D%E4%BD

%9C~1.mp4">点击观看></a>
      </div>
    </div>
    <div class="item">
      <div>
        <img
          class="item-img"
          src="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/rainbow6-home-header-secondary-discover-the-game_316830.webp"
        >
        <h2>未命名</h2>
        <a href="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/Tom%20Clancy's%20Rainbow%20Six%20%20Siege%202020.01.31%20-
%2021.39.53.05.DVR~1.mp4">点击观看></a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderOptions from './components/HeaderOptions.vue'
export default {
  components: {
    HeaderOptions
  },
  data() {
    return {
      moreVisible: false
    }
  },
  methods: {
    moreClickHandle() {
      this.moreVisible = !this.moreVisible
      console.log(1);
      
    }
  }
}
</script>


<style lang="less" scoped>
.header {
  width: 100%;
  height: 48px;
  line-height: 48px;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: #f5f5f7;
  span {
    display: inline-block;
    &:nth-of-type(2n+1) {
      height: 48px;
    }
  }
}
.headerDropdown {
  position: fixed;
  top: 48px;
  overflow: hidden;
}
.main {
  height: 650px;
  background-image: url("https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/backgroud.jpg");
  background-size:100% 100%;
}
.item {
  text-align: center;
  margin-bottom: 5vh;
  font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
  .item-img {
    width: 100%;
  }
  h2 {
    margin: 0;
  }
  a:visited {
    color: #06c
  }
}
</style>

<style scoped>
@keyframes headerDropdownOpen {
  from { height: 0 }
  to { height: 101px;}
}
@keyframes headerDropdownClose {
  from { height: 101px }
  to { height: 0;}
}
.headerDropdown-open {
  animation: headerDropdownOpen 1s;
}
.headerDropdown-close {
  animation: headerDropdownClose 1s;
  animation-fill-mode: forwards;
}
</style>