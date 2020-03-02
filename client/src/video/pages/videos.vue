<template>
<div class="bg">
  <videoHeader></videoHeader>
    <van-tabs  v-model="videoCatagory" sticky  background="#EBEBEB"  color="#dbd79d" title-inactive-color="#8C8C8C" title-active-color="#dbd79d">
      <van-tab  title-style="font-weight:bold" v-for="(classification,inx) in classifications" :name=inx :key="inx" :title="classification">

        <van-list
          v-model="loading[videoCatagory]"
          :finished="finished[videoCatagory]"
          finished-text="没有更多视频啦"
          @load="onLoad"
        >
        <!-- <van-cell v-for="(item,index) in list[videoCatagory]" :key="index" > -->
          <div v-for="(item,index) in list[videoCatagory]" :key="index" >
            <div>
              <singleVideo :data="item"></singleVideo>
            </div>
          </div>
          <!-- </van-cell> -->
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
    import singleVideo from '../components/singleVideo'
    import videoHeader from '../components/videoHeader'
    import axios from 'axios'
    import Vue from 'vue'

   export default {
        components:{
            singleVideo,
            videoHeader,
        },
        data() {
            return {
                classifications:["彩虹六号","战地5","CSGO","云顶之弈","日常生活","鬼畜搞笑"],
                videoCatagory:0,
                page:[0,0,0,0,0,0],
                pageSize:10,

                list: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
                loading: [false,false,false,false,false,false],
                finished: [false,false,false,false,false,false]
            };
        },
        methods: {
            onLoad() {
                
                var that = this;
                var catagoryNow=this.videoCatagory;
                 axios.get("/api/videos"+'?page='+that.page[catagoryNow]+"&pageSize="+that.pageSize+"&catagory="+catagoryNow)
                .then(function (response) {
                  that.list[catagoryNow]=that.list[catagoryNow].concat(response.data.data);
                  that.page[catagoryNow]++;
                  Vue.set(that.loading,catagoryNow,false);
                  if(response.data.data.length<that.pageSize){
                      that.finished[catagoryNow] = true;
                    }
                })
                .catch(function () {
                  // alert("请求失败请重试");
                    Vue.set(that.loading,catagoryNow,false);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
  background-color:#f7f8fa;
  height: 100vh;
}

</style>
