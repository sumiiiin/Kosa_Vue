<template>
  <div class="card">
    <div class="card-header">HelloWorld</div>
    <div class="card-body">
      <h4>{{ msg }}</h4>
      <hr/>
      <span>UI Component 입니다.</span>
    </div>

  </div>
  <div>


  </div>
</template>

<script setup>
//import { defineProps } from "vue";
// 내보내기 하는 데 거기서 msg 속성을 받아와서 template에서 사용함
const props = defineProps(['msg']);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span{
  color : green;
}
</style>
