<template>
    <div class="card border-5 border-success">
        <div class="card-header">UpdateHook</div>
        <div class="card-body">
            <p>count: {{ count }}</p>
            <p>data: {{ data }}</p>
            <button class="btn btn-info btn-sm mt-2 me-2" @click="count++">상태 변경</button>
            <button class="btn btn-info btn-sm mt-2" @click="data +='!'">상태 변경!</button>
        </div>
    </div>
</template>

<script setup>
import { inject, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";

const data = inject("data");

// 상태 생성 -> 상태가 바뀌면 리렌더링이 된다.
const count = ref(0);

// Lifecycle Hook 정의
// 컴포넌트가 마운트 될 때 자동으로 실행(콜백 함수)
onMounted(() => {
    console.log("UpdateHook 컴포넌트가 마운트 됨");
});

// 컴포넌트가 언마운트 될 때 자동으로 실행(콜백 함수)
onUnmounted(() => {
    console.log("UpdateHook 컴포넌트가 언마운트 됨");
});

// 컴포넌트의 상태가 변경되면 자동으로 실행
onUpdated(() => {
    console.log("UpdateHook 컴포넌트가 업데이트 됨");
    //count.value +=1; update -> 여기서는 상태변경을 할 수 없음 무한루프 걸림 계속 상태변경상태? 왜?
});

// 컴포넌트의 상태가 변경되기 직전에 자동으로 실행
onBeforeUpdate(() => {
    console.log("UpdateHook 컴포넌트가 업데이트 직전이 됨");
});
</script>

<style scoped>

</style>
