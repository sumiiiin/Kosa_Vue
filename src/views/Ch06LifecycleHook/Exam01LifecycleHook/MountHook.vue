<template>
    <div class="card border-5 border-success">
        <div class="card-header">MountHook</div>
        <div class="card-body">
            
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted} from "vue";

// 컴포넌트가 마운트 될 때 자동으로 실행(콜백 함수)
onMounted(() => {
    console.log("MountHook 컴포넌트가 마운트 됨");
});

// 컴포넌트가 언마운트 될 때 자동으로 실행(콜백 함수)
onUnmounted(() => {
    console.log("MountHook 컴포넌트가 언마운트 됨");
});
</script>

<style scoped>

</style>
