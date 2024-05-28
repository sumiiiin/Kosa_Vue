<template>
   <div class="d-flex flex-column vh-100">
      <AppHeader />
      <div class="flex-grow-1 container-fluid">
        <div class="row h-100">
          <div class="col-md-6 col-lg-4 bg-dark px-2">
            <div class=" h-100 d-flex flex-column">
              <div class="flex-grow-1 mb-3" style="height:0px; overflow-y:auto; overflow-x:hidden;">
                <!-- overflow-y:auto;(화면을 벗어나게 되면 스크롤이 생김 y축) overflow-x:hidden;(화면을 벗어나게 되면 스크롤을 숨김 x축) -->
                <AppMenu />
              </div>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-8 bg-dark px-2 ">
            <div class=" h-100 d-flex flex-column">
              <div class="flex-grow-1 overflow-auto" style="height:0px">
                <router-view/>
                <!-- router/index.js에서 매핑한거 나옴 현재 페이지는 '/'경로이기 때문에 /로 매핑한게 나온다. -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
</script>

<style>

</style>
