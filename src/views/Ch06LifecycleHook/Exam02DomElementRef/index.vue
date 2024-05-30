<template>
    <div class="card border-5 border-success">
        <div class="card-header">Exam02DomElementRef</div>
        <div class="card-body">
            <div>
                <h6>[DOM 요소 참조]</h6>
                <p>data: {{ data }}</p>
                <div class="d-flex">
                    <input id="input1" ref="input1Ref" type="text" style="line-height: 25px;" />
                    <!-- ref는 input객체가 생성되면 객체의 참조값을 받는 속성이다. 이 코드에서는  input1Ref에 들어가게 된다. -->

                    <button class="btn btn-sm btn-info ms-2" @click="setData">입력 양식값 변경</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// 상태 생성
const data = ref("summer");
const input1Ref = ref(null);

function setData(){
    // 방법1
    //const input1 = document.querySelector("#input1");
    // 화면로드 후 버튼 클릭하면 실행하는 함수이기 때문에 마운트가 완료 된 이후라서 querySelector를 사용할 수 있다.
    //data.value = input1.value;

    // 방법2
    data.value = input1Ref.value.value;
    console.log(input1Ref);
    console.log(input1Ref.value);
}
</script>

<style scoped>

</style>
