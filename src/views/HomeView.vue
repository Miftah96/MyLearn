<script lang="ts">
import { defineComponent } from 'vue'
import LearningclassService from "@/services/LearningClassService"

export default defineComponent({
  data() {
   return {
     learningClasses: [],
     currentLearningClass: {},
     currentIndex: -1,
     name: "" 
   };
  },
  methods: {
      retrieveLearningClasses() {
        LearningclassService.getAll()
          .then((response: any) => {
            this.learningClasses = response.data.items
          })
          .catch(e => {
            console.log(e);
          })
      }, 
      showLearningClass(learningclass: any, index = -1) {
        this.currentLearningClass = {}
        this.currentIndex = -1
      }
  },
  mounted() {
    this.retrieveLearningClasses();
  },
})
</script>
<style lang="scss">
  .hover-secondary:hover {
    background-color: blue;
  }
</style>

<template>
  <main class="container">
    <div v-for="(row, index) in learningClasses" :key="index" class="mx-auto px-4 w-full">
      <router-Link :to="'/detail/'+ row.id" class="flex flex-col py-4 md:flex-row ">
        <div class="rounded-xl shadow-md p-2">
          <h4 class="font-bold">{{ row.name }}</h4>
          <p class="lh-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo ea porro, alias dolorem, consequuntur officiis libero ad aperiam, dolore ipsa non nulla corporis consectetur?</p>
        </div>
      </router-Link>
    </div>
  </main>
</template>
