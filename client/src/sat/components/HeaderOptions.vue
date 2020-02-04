<template>
  <div class="container">
    <div class="userInfo">
      <span>{{ nickname }}</span>
      <img
        :src="avatar"
        alt="头像"
      >
    </div>
    <div>
      bilibili
    </div>
    <div>
      返回首页
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
      avatar: ''
    }
  },
  async created() {
    // 向服务器请求id和头像
    const res = await this.axios.get('/api/getUserInfo')
    this.nickname = res.data.nickname
    this.avatar = res.data.figureurl
  }
}
</script>


<style lang="less" scoped>
.container {
  width: 100%;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  div {
    border: solid;
    border-width: 0 0 1px 0;
    border-color: rgba(0,0,0,.5);
    padding: 5px 0 5px 0;
  }
  .userInfo {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      margin-right: 10px;
    }
    img {
      width: 26px;
      margin-right:10px
    }
  }
}
</style>