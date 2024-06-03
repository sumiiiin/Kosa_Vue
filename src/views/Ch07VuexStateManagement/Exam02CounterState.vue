<template>
    <div class="card border-5 border-success">
        <div class="card-header">Exam02CounterState</div>
        <div class="card-body">
            <h6>[Counter (하위) 상태 읽기]</h6>
            <p>Counter 단방향 바인딩: {{  $store.state.counter.count }}</p>
            <p>Counter 단방향 바인딩: {{  $store.getters["counter/getCount"] }}</p>
            <p>Counter 단방향 바인딩: {{  getCount() }}</p>
            <p>Counter 단방향 바인딩: {{  computedCount }}</p>
            <hr/>
            <p>Counter 양방향 바인딩: <input type="text" v-model="$store.state.counter.count"></p>
            <hr/>
            <h6>[Counter (하위) 상태 변경]</h6>
            <button class="btn btn-info btn-sm me-2" @click="changeByMutation">Count 변경(Mutation 동기 방식)</button>
            <button class="btn btn-danger btn-sm me-2" @click="changeByAction">Count 변경(Action 비동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

function getCount(){
    //return store.state.counter.count;
    return store.getters["counter/getCount"];
}

const computedCount = computed(() => {
    return store.state.counter.count;
})

function changeByMutation(){
    store.commit("counter/setCount", 1)
}

function changeByAction(){ 
    store.dispatch("counter/addAction", 1)
}

</script>

<style scoped>

</style>
