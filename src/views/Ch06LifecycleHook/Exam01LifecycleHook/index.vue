<template>
    <div class="card border-5 border-success">
        <div class="card-header">Exam01LifecycleHook</div>
        <div class="card-body">
            <MountHook />
            <UpdateHook class="mt-2"/>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import MountHook from "./MountHook.vue";
import UpdateHook from "./UpdateHook.vue";
const data = ref("변하냐?");
provide("data",data);

</script>

<style scoped>

</style>
