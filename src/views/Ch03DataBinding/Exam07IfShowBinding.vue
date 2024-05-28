<template>
    <div class="card">
        <div class="card-header">Exam07IfShowBinding</div>
        <div class="card-body">
            <!-- Boolean값에 따라 DOM에 추가하여 보일지 말지 결정하는 디렉티브 -->
            <div id="div1" v-if = "isPhoto" class="mb-2">
                <img src="/images/photos/photo1.jpg" height="150" />
            </div>
            <!-- false일 경우 Dom에 추가도 안된다. -->

            <!-- DOM에 추가는 하고 Boolean값에 따라 보일지 말지 결정하기 -->
            <div id="div2" v-show="isPhoto" class="mb-2">
                <img src="/images/photos/photo2.jpg" height="150" />
            </div>
            <!-- 개발자 모드로 검사하면 코드가 있는것을 확인할 수 있다. Dom에 포함은 되지만 false일 경우 보이지 않는다. -->

            <hr/>
            <button class="btn btn-info btn-sm" @click="changeData">상태변수 값 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isPhoto = ref(true);

function changeData(){
    isPhoto.value = !isPhoto.value;
}

</script>

<style scoped>
</style>