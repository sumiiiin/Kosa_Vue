<template>
  <div class="card">
    <div class="card-header">Exam08RepeatBinding</div>
    <div class="card-body">
      <div>
        <h6>[범위 반복]</h6>
        <span v-for="n in 3" :key="n" class="me-2">
          <img :src="`/images/photos/photo${n}.jpg`" width="150" height="150" />
        </span>
      </div>

      <div class="mt-5">
        <h6>[배열 항목 반복1]</h6>
        <span v-for="(item, index) in photos" :key="index" class="me-2">
          <!-- item과 index는 key값에 들어올 수 있는데 배열에 같은 값이 있을 경우 item은 사용할 수 없다.(중복값 나오지 않음?) -->
          <img :src="`/images/photos/${item}`" width="150" height="150" />
        </span>
      </div>

      <div class="mt-5">
        <h6>[배열 항목 반복2]</h6>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Writer</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in boards" :key="item.bno">
              <td>{{item.bno}}</td>
              <td>{{item.btitle}}</td>
              <td>{{item.bwriter}}</td>
              <td>{{ item.bdate }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="mt-5">
        <h6>[객체 속성 반복]</h6>
        <div v-for="(value, name, index) in board" :key="value">
            <p>{{ name }}: {{ value }}{{ index }}</p>
            <!-- 표현식을 이용해 값 가져오기 -->

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const photos = ref(["photo1.jpg", "photo2.jpg", "photo3.jpg"]);

const boards = ref([
  { bno: 1, btitle: "제목1", bwriter: "글쓴이1", bdate: "2021-08-07" },
  { bno: 2, btitle: "제목2", bwriter: "글쓴이2", bdate: "2021-08-08" },
  { bno: 3, btitle: "제목3", bwriter: "글쓴이3", bdate: "2021-08-09" },
]);

const board = ref({
  bno: 4,
  btitle: "제목4",
  bcontent: "내용4",
  bwriter: "글쓴이4",
  bdate: "2021-08-10",
});
</script>

<style scoped></style>
