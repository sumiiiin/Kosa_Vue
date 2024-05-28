<template>
  <div class="card">
    <div class="card-header bg-light">Home컴포넌트View</div>
    <div class="card-body">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
  </div>
</template>

<!-- options 방식 -->
<!-- <script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->

<!-- composition 방식 -->
<script setup>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

var name;

</script>

<style scoped>
.home{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
