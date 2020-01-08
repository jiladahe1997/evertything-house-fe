<template>
  <div>
    <div class="container">
      <div class="welcome">
        <h1>欢迎来到jiladahe1997の站</h1>
      </div>
      <div class="menu">
        <span>SAT</span>
        <span>工作/学习</span>
        <span>动漫/壁纸</span>
      </div>
      <div class="recommend">
        <div class="recommend-item">
          今日推荐1
        </div>
        <div class="recommend-item">
          今日推荐2
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './assets/background.jpg'

export default {
  created() {
    this.axios.get('/api/sentences', {
      params: {
        id: 1
      }
    })
  }
}
</script>

<style lang='less' scoped>
.container {
  height: 100%;
  padding: 1px; /*清除外边距塌陷 */
  .welcome {
    padding: 1px; /*清除外边距塌陷 */
    margin-top: 93px;
    height: 390px;
    background-image: url('./assets/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    h1 {
      margin-top: 100px;
      font-size: 45px;
    }
  }
  .menu {
    display: flex;
    margin-top: 30px;
    justify-content: space-around;
  }
  .recommend {
    margin-top: 40px;
    background-color: #F7F7F7;
    height: 200px;
    overflow: scroll;
    .recommend-item {
      height: 150px;
    }
  }
}
</style>
