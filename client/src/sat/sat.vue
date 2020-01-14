<template>
  <div class="app">
    <div class="header">
      <span class="icon"><svg
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
    <div class="main" />
    <div class="item">
      <div>
        <img
          class="item-img"
          src="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/r6-siege-meta_image-home-sledge.webp"
        >
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
        <h2>FWQ暴打队友</h2>
        <a href="https://sls-cloudfunction-ap-guangzhou-code-1256609098.cos.ap-guangzhou.myqcloud.com/ouput/fwq%E8%A2%AB%E5%A4%A7%E9%94%A4%E5%AE%A1%E9%97%AE_20190926000810_transcode_30.mp4">点击观看></a>
      </div>
    </div>
  </div>
</template>


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
.main {
  height: 80vh;
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