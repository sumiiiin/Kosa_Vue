<template>
  <div class="card">
    <div class="card-header">Exam02EventEmit</div>
    <div class="card-body">
      <Child
        @child-event-1="handelChildEvent1"
        @child-event-2="handelChildEvent2"
        @increment-event="handleIncrementEvent"
        @decrement-event="handleDecrementEvent"
        :counter="counter"
      />
    </div>
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import {ref} from "vue";

function handelChildEvent1(data) {
  console.log("handleChildEvent1() 실행");
  console.log(data);
}

function handelChildEvent2(arg1, arg2) {
  console.log("arg1: ", arg1);
  console.log("arg2: ", arg2);
}

// 상태 정의
const counter = ref(0);

// 상태 값 증가
function handleIncrementEvent(amount){
    counter.value += amount;
}

// 상태 값 감소
function handleDecrementEvent(amount){
    counter.value -= amount;
}
</script>

<style scoped></style>
