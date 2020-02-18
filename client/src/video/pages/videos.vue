<template>
  <div>
    <van-tabs v-model="videoCatagory">
      <van-tab v-for="(classification,inx) in classifications" :name=inx :key="inx" :title="classification">

        <van-list
          v-model="loading"
          :finished="finished[videoCatagory]"
          finished-text="没有更多视频啦"
          @load="onLoad"
        >
          <van-cell v-for="(item,index) in list[videoCatagory]" :key="index" >
            <div>
              <singleVideo :data="item"></singleVideo>
            </div>
          </van-cell>>
        </van-list>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
    import singleVideo from '../components/singleVideo'
    // var base="https://jiladahe1997.cn";

   export default {
        components:{
            singleVideo,
        },
        data() {
            return {
                classifications:["彩虹六号","战地5","CSGO","云顶之弈","日常生活"],
                videoCatagory:0,
                page:[0,0,0,0,0],
                pageSize:10,

                list: [
                    [],
                    [],
                    [],
                    [],
                    [],
                ],
                loading: false,
                finished: [false,false,false,false,false]
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                // console.log("waimian"+this);
                const xhr = new XMLHttpRequest()
                xhr.open('get',"/api/videos"+'?page='+this.page[this.videoCatagory]+"&pageSize="+this.pageSize+"&catagory="+this.videoCatagory)
                xhr.onreadystatechange=()=>{
                    if(xhr.readyState== XMLHttpRequest.DONE) {
                        if(xhr.status === 200) {
                                    this.list[this.videoCatagory]=this.list[this.videoCatagory].concat(JSON.parse(xhr.responseText).data);
                                    // console.log("limian"+this);
                                    // console.log(JSON.parse(xhr.responseText).data);
                                    this.page[this.videoCatagory]++;
                                    if(JSON.parse(xhr.responseText).data.length<this.pageSize) {
                                         this.finished[this.videoCatagory] = true;
                                    }
                            // switch(this.videoCatagory) {
                            //     case 0:
                            //         this.list.rainbowSixSeige=this.list.rainbowSixSeige.concat(JSON.parse(xhr.responseText).data);
                            //         if(JSON.parse(xhr.responseText).data.length<10){
                            //             this.finished = true;
                            //         }
                            //         listNow=list.rainbowSixSeige;
                            //         break;
                            //     case 1:
                            //         this.list.battleField5=this.list.battleField5.concat(JSON.parse(xhr.responseText).data);
                            //         if(JSON.parse(xhr.responseText).data.length<10){
                            //             this.finished = true;
                            //         }
                            //         listNow=list.battleField5
                            //         break;
                            //     case 2:
                            //         this.list.csGo=this.list.csGo.concat(JSON.parse(xhr.responseText).data);
                            //         if(JSON.parse(xhr.responseText).data.length<10){
                            //             this.finished = true;
                            //         }
                            //         listNow=list.csGo
                            //         break;
                            //     case 3:
                            //         this.list.teamfightTactics=this.list.teamfightTactics.concat(JSON.parse(xhr.responseText).data);
                            //         if(JSON.parse(xhr.responseText).data.length<10){
                            //             this.finished = true;
                            //         }
                            //         listNow=list.teamfightTactics
                            //         break;
                            //     case 4:
                            //         this.list.life=this.list.life.concat(JSON.parse(xhr.responseText).data);
                            //         if(JSON.parse(xhr.responseText).data.length<10){
                            //             this.finished = true;
                            //         }
                            //         listNow=list.life
                            //         break;
                            //     default:
                            //         alert("分类不存在")
                            // }
                        }
                    }
                }
                xhr.send()
                // 加载状态结束
                this.loading = false;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
