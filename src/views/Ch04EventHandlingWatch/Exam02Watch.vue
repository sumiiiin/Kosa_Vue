<template>
    <div class="card">
        <div class="card-header">Exam02Watch</div>
        <div class="card-body">
            <div class="row mb-2">
                <label class="col-sm-2 col-form-label">UserId</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="userId">
                </div>
            </div>
            <div class="mb-2">
                <button class="btn btn-info btn-sm" @click="handleProductChange">product 상태의 객체 변경</button>
            </div>            
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

//상태 생성
let userId = ref("");

//상태 감시
watch(userId, (newUserId, oldUserId) => {
    console.group("userId 변경 감시"); // 여기서부터
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.groupEnd(); //여기까지 그룹
});

//상태 생성
let product = ref({
    name: "",
    company: "",
    price: 0
});

// 객체 자체가 변경 될 때를 감시, 객체는 그대로 있고 속성만 바뀌면 watch가 감시하지 못한다.
watch(product, (newProduct, oldProduct) => {
    console.group("product 객체 자체 변경 감시");
    console.log("newProduct: ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct: ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
})

// 객체 자체 뿐만 아니라 객체의 속성이 변경되는 것도 감시한다.
watch(product, (newProduct, oldProduct) => {
    console.group("product 객체와 객체의 속성 변경 감시");
    console.log("newProduct: ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct: ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();
}, {deep : true});

// 특정 속성만 변경되는걸 감시하고 싶다.
watch(() => {return product.value.price}, (newPrice, oldPrice) => {
    console.group("product의 price속성만 변경 감시");
    console.log("newPrice: ", JSON.parse(JSON.stringify(newPrice)));
    console.log("oldPrice: ", JSON.parse(JSON.stringify(oldPrice)));
    console.groupEnd();
}) // 화살표 함수에서 return이 하나인 경우에 중괄호와 return을 생략할 수 있다.

function handleProductChange(){
    // 속성 값만 변경
    product.value.price = 90000000;

    // 객체 자체가 변경
    product.value = {
        name: "제네시스",
        company: "현대",
        price: 80000000
    };
}

// 복수개의 상태를 감시할 경우(복잡하니까 하나씩 하자)
watch([userId, product], ([newUserId, newProduct],[oldUserId, oldProduct]) => {
    console.group("복수개 product 객체 자체 변경 감시");
    console.log("newProduct: ", JSON.parse(JSON.stringify(newProduct)));
    console.log("oldProduct: ", JSON.parse(JSON.stringify(oldProduct)));
    console.groupEnd();

    console.group("복수개 userId 변경 감시"); // 여기서부터
    console.log("newUserId: " + newUserId);
    console.log("oldUserId: " + oldUserId);
    console.groupEnd(); //여기까지 그룹
});

</script>

<style scoped>
</style>