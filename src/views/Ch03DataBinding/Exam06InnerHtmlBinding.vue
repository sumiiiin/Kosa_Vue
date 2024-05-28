<template>
    <div class="card">
        <div class="card-header">Exam06InnerHtmlBinding</div>
        <div class="card-body">
            <!-- 상태 변수를 통해 innerHtml변경하기 -->
            <div v-html="innerHtml"></div>
            <hr/>
            <button @click="changeData" class="btn btn-info btn-sm">내용 변경</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// html을 변수에 저장하고
let innerHtml = ref("");

// 함수를 통해 html내용 변경
let toggle = ref(true);
function changeData() {
    if(toggle.value) {
        innerHtml.value = `
            <div>
                <h5>풍경1</h5>
                <img src="/images/photos/photo1.jpg" height="150"/>
            </div>
        `;
    } else {
        innerHtml.value = `
            <div>
                <h5>풍경2</h5>
                <img src="/images/photos/photo2.jpg" height="150"/>
            </div>
        `;
    }
    toggle.value = !toggle.value;
}
</script>

<style scoped>
</style>