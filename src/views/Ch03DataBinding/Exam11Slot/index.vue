<template>
    <div class="card">
        <div class="card-header">Exam11Slot</div>
        <div class="card-body">
            <button class="btn btn-info btn-sm me-2" @click="showDialogA">기본 다이얼로그</button>
            <button class="btn btn-info btn-sm me-2" @click="showDialogB">알림 다이얼로그</button>
            <button class="btn btn-info btn-sm" @click="showDialogC">로그인 다이얼로그</button>
        </div>
        <!-- template에 id를 주지 않고 태그에서 주는 이유는 각 template에 id를 다르게 주기 위함 fallthrough -->
        <DialogA id="dialogA"/>
        <DialogB id="dialogB" @close="hideDialogB"/>

        <!-- 실제로 close라는 이벤트는 없지만 fallthrough를 이용해 DialogB에 보내기 위함이다.
            아이디는 루트태그에, 이벤트는 버튼에 속성 적용하려 한다. -->
        <DialogC id="dialogC" @close="hideDialogC"/>
    </div>
</template>

<script setup>
import {onMounted} from "vue";

import DialogA from "./DialogA.vue";
import DialogB from "./DialogB.vue";
import DialogC from "./DialogC.vue";

import {Modal} from "bootstrap";

// 초기화
let modalDialogA = null;
let modalDialogB = null;
let modalDialogC = null;

// 컴포넌트가 생성되고, Dom에 부착될 때 자동으로 실행되는 콜백(자동으로 실행한다.)
// script setup은 마운트 되기 전에 실행이 되기 때문에 마운트를 하고 실행해야 하면 onMounted함수를 사용햐야 한다.
onMounted(() => {
    modalDialogA = new Modal(document.querySelector("#dialogA"));
    modalDialogB = new Modal(document.querySelector("#dialogB"));
    modalDialogC = new Modal(document.querySelector("#dialogC"));
    // ID로 검색하려면 DOM에 부착 된 다음에 할 수 있음(생명주기 나중에 배움)
});

// 모달 열기
function showDialogA() {
    modalDialogA.show();
}

function showDialogB() {
    modalDialogB.show();
}

function showDialogC() {
    modalDialogC.show();
}

function hideDialogB() {
    modalDialogB.hide();
}

function hideDialogC(){
    modalDialogC.hide();

}
</script>

<style scoped>

</style>
