<template>
    <div class="card border-5 border-success">
        <div class="card-header">ChildA</div>
        <div class="card-body">
            <div>
                <p>data1: {{ message.data1 }}</p>
                <p>data2.name1: {{ message.data2.value.name1 }}</p>
                <p>data2.name2: {{ message.data2.value.name2 }}</p>
            </div>
            <hr/>
            <ChildB />
        </div>
    </div>
</template>

<script setup>
import { inject, provide, ref } from "vue";
import ChildB from "./ChildB.vue"

const data3 = ref("ChildA가 보낸 컴포넌트 데이터");

provide("childA_data3", data3);

const message = inject("message");

console.log("message.data1.value: ",message.data1.value);
console.log("message.data2.value.name1: ", message.data2.value.name1); // 객체로 전달 받은 값 추출
console.log("message.data2.value.name2: ", message.data2.value.name2);

</script>

<style scoped>

</style>
