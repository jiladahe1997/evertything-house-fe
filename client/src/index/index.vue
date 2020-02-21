<template>
  <div>
    <div class="container">
      <div class="welcome">
        <h1>欢迎来到阿春の站</h1>
      </div>
      <div class="menu">
        <span><a href="/sat">SAT</a></span>
        <span><a href="/video#/videos">视频</a></span>
        <span><a href="/video#/videoUpload">视频上传</a></span>
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
    background-image: url('./assets/background1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    h1 {
      margin-top: 15vh;
      font-size: 2.5rem;
    }
  }
  .menu {
    display: flex;
    margin-top: 5vh;
    justify-content: space-around;
  }
  .recommend {
    margin-top: 6vh;
    background-color: #F7F7F7;
    height: 20vh;
    overflow: scroll;
    .recommend-item {
      height: 17vh;
    }
  }
}
</style>
