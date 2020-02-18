<template>
  <div>
    <video style="width:100%" controls :src="'https://'+videoData.videoUrl"></video>
      <van-row>
        <van-col span="4">
          <van-image
            round
            width="40"
            height="40"
            fit="fill"
            :src=videoData.avatar
          /></van-col>
        <van-col span="12">{{videoData.author}}</van-col>
        <van-col span="8"></van-col>
      </van-row>

    <van-row type="flex" justify="space-between">
      <van-col span="8">{{videoData.name}}</van-col>
      <van-col span="10">上传日期：{{videoData.uploadDate}}</van-col>
    </van-row>
    <div class="van-multi-ellipsis--l3">{{videoData.introduction}}</div>
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

</style>
