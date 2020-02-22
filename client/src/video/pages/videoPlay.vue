<template>
  <div class="bg">
    <video class="video" style="width:100%" controls :src="'https://'+videoData.videoUrl"></video>
      <van-row type="flex">
        <van-col class="avatar" span="4">
          <van-image
            round
            width="2.6rem"
            height="2.6rem"
            fit="fill"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          /></van-col>
        <van-col  span="8" class="van-ellipsis author">测试作者</van-col>
      </van-row>
  <div class="van-ellipsis videoname">{{videoData.name}}</div>
  <div class="date">上传日期：{{videoData.uploadDate.substr(0,10)}}</div>
  <div class="undertitle">视频简介：</div>
<div class="van-multi-ellipsis--l3 introduction">{{videoData.introduction}}</div>
  </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios'
    import { Image } from 'vant';
    // var base="jiladahe1997.cn";

    Vue.use(Image);
    export default {
        name: 'videoPlay',

        data () {
            return {
                videoId:0,
                videoData:{
                    name:"",
                    introduction:"",
                    videoUrl:"",
                    imgUrl:"",
                    author:"",
                    avatar:"",
                    uploadDate:"",
                },
            }
            },
        methods:{

        },
        created:function () {
            var that=this;
            this.videoId=this.$route.query.videoId;
            axios.get("/api/videoPlay"+'?id='+that.videoId)
                .then(function (response) {
                    that.videoData=response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
  background-color:#f7f8fa;
  height: 100vh;
}
.video{
  
}
.videoname{
text-align: center;
 font-size:18px;
 color:#8C8C8C;
   margin-left: 1rem;
  margin-right: 1rem;
}
.introduction{
  font-size:16px;
  margin-left: 1rem;
  margin-right: 1rem;
  color:#8C8C8C
}
.undertitle{
font-size:10px;
margin-left: 1rem;
color:#8C8C8C;
}
.date{
  font-size:10px;
  margin-left: 1rem;
  color:#8C8C8C;
}
.avatar{
    margin-left: 0.8rem;
    margin-top: 0.8rem;
}
.author{
    margin-top: 0.8rem;
    font-size:10px;
color:#8C8C8C;
line-height:2.6rem
}
</style>
