<template>
    <div class="card">
        <div class="card-header">Exam10FallThroughAttr</div>
        <div class="card-body">
            <!-- 컴포넌트 태그의 속성은 컴포넌트의 루트 태그 속성에 들어간다. -->
            <!-- 이벤트 핸들러를 사용 할 때는  -->
            <UIComponentA id="uiComponentA" class="bg-dark" style="color:orange"
                @click="handleClick"/>

            <UIComponentB id="uiComponentB" class="bg-dark" style="color:orange"
                @click="handleClick"/>
            
            <UIComponentB id="uiComponentB" class="bg-info" style="color:red"
                @click="handleClick"/>
        </div>
    </div>
</template>

<script setup>
// 컴포넌트 사용을 위한 불러오기
import UIComponentA from "./UIComponentA.vue"
import UIComponentB from "./UIComponentB.vue";

// 클릭 이벤트 함수
function handleClick(){
    console.log("Exam10FallThroughAttr UIComponentA or B 클릭 됨");
}
</script>

<style scoped>

</style>
