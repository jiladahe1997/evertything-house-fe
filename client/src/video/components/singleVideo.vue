<template>
  <div>
      <router-link :to="{path: '/videoPlay', query: {videoId:data.id}}">
      <van-image
      width="340"
      height="190"
      fit="fill"
      :src='"https://"+data.imgUrl'
    />

    <div>{{data.name}}{{data.id}}</div>
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
</style>
