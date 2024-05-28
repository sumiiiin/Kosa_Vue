<template>
    <div class="card">
        <div class="card-header">ChildB</div>
        <div class="card-body">
            <p>productNo: {{ productNo }}</p>
            <p>productKind: {{ productKind }}</p>
            <p>product: {{ product.no }}, {{ product.kind }}</p>
            <p>no: {{ no }}</p>
            <p>kind: {{ kind }}</p>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps(["productNo", "productKind", "product", "no", "kind"]);

console.log("BproductNo: ", prop.productNo, typeof(prop.productNo));
console.log("BproductKind: ", prop.productKind);
console.log("Bproduct: ", JSON.parse(JSON.stringify(prop.product)));
console.log("Bno: ", prop.no, typeof(prop.no));
console.log("Bkind: ", prop.kind);
</script>

<style scoped>
</style>