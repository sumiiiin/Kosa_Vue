<template>
    <div class="card">
        <div class="card-header">Exam09FormBinding</div>
        <div class="card-body">
            <form @submit.prevent="handleSubmit">
                <!-- @submit.prevent 바로 서버로 데이터가 들어가는 것을 막음 (ajax로 통신해야 하기 때문?) -->
                <!-- 유효성 검사 후에 수동으로 서버와 통신하는 코드를 함수에 작성해야 함 -->
                <div class="input-group mb-2">
                    <span class="input-group-text">상품</span>
                    <input type="text" class="form-control" v-model="product.name">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">회사</span>
                    <input type="text" class="form-control" v-model="product.company">
                </div>
                    
                <div class="input-group mb-2">
                    <span class="input-group-text">가격</span>
                    <input type="number" class="form-control" v-model="product.price">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">설명</span>
                    <input type="text" class="form-control" v-model="product.info">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">국가</span>
                    <select class="form-control" v-model="product.madein">
                        <option value="한국">한국</option>
                        <option value="미국">미국</option>
                        <option value="독일">독일</option>
                    </select>
                </div>
                <div class="input-group mb-2">
                    <span class="input-group-text">색상</span>
                    <div class="form-control">
                        <!-- v-model이 같은 것 끼리 그룹화가 되어 checkbox로 사용할 수 있다. name을 지정하여 사용해도 된다. -->
                        <div class="form-check form-check-inline">
                            <!-- 아이디는 label의 for속성 때문에 필요하지 객체를 찾기 위해 필요한게 아니다.  -->
                            <input id="chekboxBlack" class="form-check-input" type="checkbox" value="black" v-model="product.colors">
                            <label class="form-check-label" for="chekboxBlack">블랙</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="chekboxRed" class="form-check-input" type="checkbox" value="red" v-model="product.colors">
                            <label class="form-check-label" for="chekboxRed">레드</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input id="chekboxYellow" class="form-check-input" type="checkbox" value="yellow" v-model="product.colors">
                            <label class="form-check-label" for="chekboxYellow">옐로우</label>
                        </div>
                    </div>
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">판매1</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="chekboxSale1" value="true" 
                            v-model="product.sale1">
                            <label class="form-check-label" for="chekboxSale1">판매1</label>
                        </div>
                    </div>
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">판매2</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="chekboxSale2" 
                            v-model="product.sale2" true-value="yes" false-value="no">
                            <label class="form-check-label" for="chekboxSale2">판매2</label>
                        </div>
                    </div>
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">성별</span>
                    <div class="form-control">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex1" value="man" v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex1">남성</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="chekboxSex2" value="woman" v-model="product.sex">
                            <label class="form-check-label" for="chekboxSex2">여성</label>
                        </div>
                    </div>
                </div>

                <div>
                    <input type="submit" value="등록" class="btn btn-danger btn-sm me-2"/>
                    <!-- vue에서 리셋 버튼을 양식을 초기화 하지 않고 값을 모두 지워버림 -->
                    <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

// 초기 기본 값 
let product = ref({
    name: "셔츠",
    company: "지오다노",
    price: 20000,
    info: "통풍이 잘되어 시원해요",
    madein: "미국", // option중에 하나를 작성해야 한다.
    colors: ["black", "yellow"], // 배열은 항목의 value값으로 설정하고
    sale1: true, // 값이 하나라면 Boolean으로 설정
    sale2: "yes", // true false 이외의 다른 값을 사용하고 싶으면 true-value..등을 이용한다.
    sex: "woman"
});

function handleSubmit() {
    // 유효성 검사...
    ///console.log(product.value);
    console.log(JSON.parse(JSON.stringify(product.value))); // proxy 객체를 js 객체로 바꾸는 방법
    /// 서버 통신 코드...
}

// Resets버튼 재 초기화(설정 되지 않은 값은 나오지 않는다.)
function handleReset(){
    console.log("handleReset() 실행");

    // 객체 자체를 바꾸는 것
    product.value = { // 상태는 상태 자체를 바꿀 수 없다. (참조값이 달라지기 때문에) 상태 속의 값을 변경하여 사용해야 한다.
    name: "셔츠",
    company: "지오다노",
    price: 20000,
    info: "통풍이 잘되어 시원해요",
    madein: "미국", // option중에 하나로 작성해야 한다.
    colors:["black", "yellow"]
};
   // 객체의 속성을 바꾸는 것
   // product.value.name = "셔츠" 
}
</script>

<style scoped>
</style>

