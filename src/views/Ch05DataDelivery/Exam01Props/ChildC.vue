<template>
    <div class="card">
        <div class="card-header">ChildC</div>
        <div class="card-body">
            <p>propA: {{ propA }}</p>
            <p>propB: {{ propB }}</p>
            <p>propC: {{ propC }}</p>
            <p>propD: {{ propD }}</p>
            <p>propE: {{ propE }}</p>
            <p>propF.message: {{ propF.message }}</p>
            <p>propG: {{ propG[0] }}, {{ propG[1] }}</p>
            <p>propH: {{ propH() }}</p>
            <p>propI: {{ propI }}</p>

        </div>
    </div>
</template>

<script setup>
const prop = defineProps({
    propA: String, //propA는 문자로 받을거야
    propB: Number, //propB는 숫자로 받을 거야
    propC: [String, Number], //propC는 문자 아니면 숫자로 받을거야
    propD: {
        type:String,
        required: true //propD는 반드시 포함해야해 근데 에러는 안나고 경고만 뜬다.
    },
    propE: {
        type: Number,
        default: 3 //propE의 기본값은 3이다.
    },
    propF: {
        type: Object,
        default(){
            return{ message:"Hello" };
        }
    },
    propG: {
        type:Array,
        default(){
            return["black", "white"];
        }
    },
    propH: {
        type: Function,
        default(){
            return "기본값2"
        }
    },
    propI: {
        type: Number,
        validator(value) {
            return value > 0 && value < 11;
        }
    }
});
</script>

<style scoped>

</style>
