<template>
  <div>
    <div class="line1">
      <span class="left" />
      <span class="text">Design by SAT</span>
      <span class="right" />
    </div>
    <div class="line2">
      Github：<a href="https://github.com/jiladahe1997">github.com/jiladahe1997</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
.line1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left,.right{
    display: inline-block;
    height: 3px;
    width: 30vw;
    background:#ECECEC;
  }
}
.line2 {
  text-align: center;
  a{
    color:black
  }
}
</style>