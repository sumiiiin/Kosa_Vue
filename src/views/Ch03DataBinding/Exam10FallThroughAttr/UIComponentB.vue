<template>
    <div class="card" :id="$attrs.id">
        <div class="card-header">UIComponentB</div>
        <div class="card-body">
            <div class="mb-2" :class="$attrs.class" :style="$attrs.style" @click="$attrs.onClick">
                Content
            </div>
      
            <hr/>
            <button class="btn btn-info btn-sm me-2" @click="handleBtn1">버튼1(속성값 이용)</button>
            <button class="btn btn-danger btn-sm" @click="handleBtn2">버튼2(리스터 호출)</button>
        </div>
    </div>
</template>

<script setup>
import {defineOptions, useAttrs} from "vue";

defineOptions({
    inheritAttrs: false
    // 전체 속성에 대해 FallThrough를 비활성화 한다.
})

// use로 시작 되는건 라이프사이클과 상관이 있는 특별한 함수...?
const attrs = useAttrs();

function handleBtn1(){
    // 속성으로 전달 된 값 얻기
    console.log(attrs.id);
    console.log(attrs.class);
    console.log(attrs.style);

}

function handleBtn2(){
    attrs.onClick();
    // 속성으로 전달된 핸들러 함수(리스너)를 호출
}
</script>

<style scoped>

</style>
