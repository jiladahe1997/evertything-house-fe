<template>
  <div>
    <videoHeader />
    <div class="container">
      <video
        id="video"
        ref="video"
        class="video-js"
        data-setup="{}"
      >
        <source
          src="/api/music/stream/audio.m3u8"
          type="application/x-mpegURL"
        >
      </video>
      <div class="text">
        {{ time }}
      </div>
    </div>
    <div class="actionContainer">
      <img
        class="refresh"
        src="../assets/refresh.png"
        alt=""
        @click="refresh"
      >
      <img
        v-if="isPause"
        class="action"
        src="../assets/play.png"
        @click="play"
      >
      <img
        v-if="isPlaying"
        class="action"
        src="../assets/pause.png"
        @click="pause"
      >
      <img
        class="refresh"
        src="../assets/refresh.png"
        alt=""
        @click="refresh"
      >
    </div>
    <Footer />
  </div>
</template>

<script>
import dayjs from 'dayjs'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
// import 'videojs-errors';
import videoHeader from '../components/videoHeader.vue'
import Footer from '../components/Footer.vue'

export default {
  components:{
    videoHeader,
    Footer
  },
  data(){
    return {
      status: 'playing',
      time: ''
    }
  },
  computed:{
    isPause() {
      return this.status === 'paused'
    },
    isPlaying() {
      return this.status === 'playing'
    }
  },
  mounted() {
    videojs('video',{
      controls: false,
      autoplay: false,
      preload: 'auto',
      poster: 'https://s2.ax1x.com/2020/03/08/3xhyq0.jpg'
    }, function onPlayerReady() {
      // this.play()
      // this.on('error', function(){
      //   this.error(null)
      //   // this.error('111')
      // })
    })
    // .errors({
    //   errors: {
    //     4: {
    //       headline: '当前没有直播源，请联系BG开启直播',
    //       message :'',
    //       code:'',
    //       details:''
    //     }
    //   }
    // })
    this.$nextTick(()=>{
      if(videojs.getPlayer('video').paused()){
        this.status = 'paused'
      }
    })
    this.updateTime()
  },
  methods:{
    updateTime() {
      this.time =  dayjs().format('YYYY-MM-DD HH:mm:ss')
      setTimeout(this.updateTime, 1000)
    },
    pause(){
      this.status='paused'
      videojs.getPlayer('video').pause();
    },
    play() {
      this.status='playing'
      videojs.getPlayer('video').play();
    },
    refresh(){
      window.location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 40vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  background-color:#8B8D92;
  padding-top: 4vh;
  margin-bottom: 10vh;
  .video-js {
    display: inline-block;
    height: 30vh;
    width: 70vw;
    margin-bottom: 2vh;
  }
  .text{
    color: white;
  }
}
.actionContainer {
  display: flex;
  justify-content: space-between;;
  align-items: center;
  margin-bottom: 12vh;
  padding: 0 6vw;
  .refresh{
    width: 30px;
    height: 30px;
  }
  .action{
    width:100px;
    height: 100px;
  }
}

/deep/ .vjs-big-play-button 
{
  display: none;
}
/deep/ .vjs-error-display::before {
  display: none;
}
</style>