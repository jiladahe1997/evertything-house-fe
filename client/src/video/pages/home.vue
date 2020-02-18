<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div><router-link to="/videos">videos</router-link></div>
      <div><router-link to="/videoPlay">videoPlay</router-link></div>
      <div><router-link to="/videoUpload">videoUpload</router-link></div>
    </div>
  </div>

</template>

<script>
    // var base="jiladahe1997.cn";
    export default {
        name: 'home',
        data () {
            return {
                msg: 'home'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
