<template>
    <div class="card border-5 border-success">
        <div class="card-header">ChildB</div>
        <div class="card-body">
            <div>
                <p>data1: {{ message.data1 }}</p>
                <p>data2.name1: {{ message.data2.value.name1 }}</p>
                <p>data2.name2: {{ message.data2.value.name2 }}</p>
                <p>ChildA가 Provide한 데이터: {{ data3 }}</p>
                <button class="mt-2 btn btn-danger btn-sm" @click="changeData">자식 컴포넌트에서 데이터 변경</button>

            </div>
        </div>
    </div>
</template>

<script setup>
import { inject } from "vue";

const message = inject("message");
const data3 = inject("childA_data3");

console.log("message.data1.value: ",message.data1.value);
console.log("message.data2.value.name1: ", message.data2.value.name1); // 객체로 전달 받은 값 추출
console.log("message.data2.value.name2: ", message.data2.value.name2);

// 데이터 변경 함수
function changeData() {
    message.data1.value += "1";
    message.data2.value.name1 += "1";
    message.data2.value.name2 += "1";
}
</script>

<style scoped>

</style>
