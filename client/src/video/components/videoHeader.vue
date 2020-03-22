<template>
<div>
<van-row class="bg" type="flex" justify="center">
<van-col  span="8"></van-col>

  <van-col class="logo" span="8">
 <van-image
  width="7.5rem"
  height="3rem"
  :src = logo
/></van-col>
  
  <van-col class="useravatar" span="8">
    <van-image 
    class="avatar"
    round
    width="2.6rem"
    height="2.6rem"
    fit="fill"
    :src="useravatar"
/></van-col>
</van-row>
</div>
</template>

<script>
import '../assets/logo.png'
    export default {
        data() {
            return {
            logo:require("../assets/logo.png"),
            usernickname: '',
            useravatar: ''
                }
            },
  async created() {
    // 向服务器请求id和头像
    const res = await this.axios.get('/api/getUserInfo')
    this.usernickname = res.data.nickname
    this.useravatar = res.data.figureurl
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
    background-color: #EBEBEB
}
.logo{
    text-align: center;
    margin-top: 0.3rem;
}

.useravatar{
    text-align: right;
}
.avatar{
        margin-top: 0.6rem;
    margin-right: 0.5rem;
}
</style>
