<template>
  <div>
     <router-link :to="{path: '/videoPlay', query: {videoId:data.id}}">
  <!-- <van-row type="flex" justify="center">
  <van-col span="24"> -->

<div class="card">
      <van-image
      class="img"
      width="18rem"
      height="10rem"
      radius="0.6rem"
      fit="fill"
      :src='"https://"+data.imgUrl'>
    <template v-slot:loading>
    <van-loading type="spinner" size="20" />
  </template>
  </van-image>  
 <div class="van-ellipsis title">{{data.name}}</div>

</div>

    <!-- </van-col>
</van-row> -->
    </router-link>
  </div>
</template>

<script>

    export default {
        props: {
            data: Object
        },
        data() {
            return {
                }
            }
        }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
 font-size:14px;
 color:#8C8C8C;
 margin-left: 1rem;
 margin-right: 1rem;
} 
.card {
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;

    position: relative;
    left: 50%;
    transform: translateX(-50%);

    text-align: center;
    width:20rem;
    background-color: #fff;
    border-radius: 0.8rem;
    box-shadow: 0 8px 12px #ebedf0;
}
</style>
