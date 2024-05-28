<template>
    <div class="card">
        <div class="card-header">Exam05AttrBinding</div>
        <div class="card-body">
            <div class="mb-4">
                <h5>:속성="변수"</h5>
                <a :href="vueHome" class="me-3">뷰 홈페이지</a>
                <RouterLink :to="appHome">홈 페이지</RouterLink>
            </div>

            <div class="mb-4">
                <!-- 문자열 속에 변수 넣을 때? -->
                <h5>:속성="연산식" | `매개변수화된 문자열`</h5>
                <img :src="'/images/photos/' + imgName" height="150" class="me-2"/>
                <!-- 연산식 -->
                <img :src="`/images/photos/${imgName}`" height="150" class="me-2"/>
                <!-- 매개변수화 -->
            </div>

            <div class="mb-4">
                <!-- 클래스 안에 변수 사용할 때 -->
                <h5>:class="변수 | 객체 | 배열"</h5>
                <div class="mb-3 fw-bold">아름다운 풍경</div>
                <div class="mb-3" :class="className1">아름다운 풍경</div>
                <div class="mb-3" :class="[className1, className2]">아름다운 풍경</div>
                <div class="mb-3" :class="{'fw-bold':isBold, 'text-danger':isRed}">아름다운 풍경</div>
            </div>

            <div class="mb-4">
                <!-- 스타일 안에 변수 사용할 때 -->
                <h5>:style="변수 | 객체 | 배열"</h5>
                <div style="margin-bottom: 10px; font-weight: bold;">아름다운 풍경</div>
                <div style="margin-bottom: 10px;" :style="[style1, style2]">아름다운 풍경</div>
                <div style="margin-bottom: 10px;" :style="{'font-weight':fontWeight, 'color':textColor}">아름다운 풍경</div>
            </div>

            <hr/>

            <button class="btn btn-info btn-sm" @click="changeData">상태 변수값 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

let vueHome = ref("https://vuejs.org");
let appHome = ref("/");
let imgName = ref("photo1.jpg");
let className1 = ref("fw-bold");
let className2 = ref("text-danger");
let isBold = ref(false);
let isRed = ref(true);
let style1 = ref("font-weight: bold");
let style2 = ref("color: green");
let fontWeight = ref("bold");
let textColor = ref("green");

let toggle = ref(true);
// 상태 변수 변경하는 함수
function changeData() {
    if(toggle.value) {
        imgName.value = "photo2.jpg";
        className1.value = "text-warning";
        fontWeight.value = "";
        textColor.value = "#0000ff";
    } else {
        imgName.value = "photo1.jpg";
        className1.value = "text-danger";
        fontWeight.value = "bold";
        textColor.value = "#00ff00";
    }
    toggle.value = !toggle.value;
}
</script>

<style scoped>
</style>