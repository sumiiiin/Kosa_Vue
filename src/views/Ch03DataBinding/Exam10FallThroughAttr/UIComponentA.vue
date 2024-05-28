<template>
    <div class="card">
        <div class="card-header">UIComponentA</div>
        <div class="card-body">
            <div :class="props.class" :style="props.style" @click="emit('click')">
                <!-- class를 사용하고 싶으면 props.class라고 하면 된다. -->
            Content</div>
            <button class="mt-2 btn btn-info btn-sm" @click="handleClick">버튼</button>
        </div>
    </div>
    
</template>

<script setup>
const props = defineProps(["class", "style"])
// 이 컴포넌트가 태그로 사용될 때 작성한 속성 값을 받아서 사용할 수 있게 담는다.? 대신 FallThrough에서는 빠짐

const emit = defineEmits(["click"]);
// 이 컴포넌트가 태그로 사용될 때 작성한 이벤트 핸들러(리스너)를 받아서 사용할 수 있게 담는다.? 대신 FallThrough에서는 빠짐
// 클릭 이벤트를 FallThrough에서 가져온다. 클릭이벤트를 발생시키면 index.vue에 정의된 함수가 실행된다.
// emit은 이벤트를 발생시켜주는 코드
// emit이 리턴하는건 함수이다. emit()으로 사용해야하는이유?

function handleClick(){
    // 컴포넌트의 속성 값 읽기
    console.log(props.class);
    console.log(props.style);

    // 컴포넌트의 click 이벤트를 발생
    emit('click');
}
</script>

<style scoped>

</style>
