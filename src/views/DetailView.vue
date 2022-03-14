<script lang="ts">
  import LearningClassService from '@/services/LearningClassService'
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        currentLearningClass: {},
        learningClass: {
          classId: null,
          attendeeFullName: "",
          attendeeEmail: "",
        },
        submitted: false,
        showModal: false,
      }
    },
    methods: {
      getLearningClass(id: any) {
        LearningClassService.get(id) 
          .then((response: any) => {
            this.currentLearningClass = response.data
          })
      },
      saveLearning() {
        // let data = {
        //   classId: this.learningClass.classId,
        //   attendeeFullName: this.learningClass.attendeeFullName,
        //   attendeeEmail: this.learningClass.attendeeEmail,
        // };
        this.isModalVisible = !this.isModalVisible;
        // LearningClassService.create(data)
        // .then((response: any) => {
        //   console.log(response.data);
        //   this.submitted = true;
        // })
        // .catch((e: Error) => {
        //   console.log(e);
        // });
      },
      openBasic() {
            this.showModal = true;
      },
      closeModal() {
          this.showModal = false;
      },
    },
    mounted() {
      this.getLearningClass(this.$route.params.id);
      this.saveLearning()
    },
  })
</script>
<style lang="scss" scoped>
  @import "@/assets/_styles.scss";
  .line-devide  {
    height: $three-px $solid;
    background-color:$gray;
    width: $w-full;
  }
</style>

<template>
  <div class="container px-4">
    <!-- Ops ... Sepertinya Anda tersesat -->
    <div v-if="currentLearningClass.id">
      <div class="mb-4">
        <h4 class="font-bold">{{ currentLearningClass.name }}</h4>
        <p>{{ currentLearningClass.description }}</p>
      </div>
      
      <div v-for="(mentor, index) in currentLearningClass.mentors" :key="index" class="mb-2">
        <h4 class="font-bold">Mentor {{index+1}}</h4>
        <p>{{ mentor.name}} - <span>{{ mentor.description }}</span></p>
      </div>
    </div>
    <div>
      <div class="">
        <form @click="saveLearning" class="rounded-md	border p-2">
          <div class="border-b-2 border-gray py-2 mb-2">
            <label class="">Register</label>
            <input type="hidden" name="classId" :value="currentLearningClass.id">
          </div>
          <div>
            <label class="block">Full Name</label>
            <input type="text" name="attendeeFullName" class="appearance-none block w-full h-5 text-black rounded-sm border py-3 px-3 mb-3 focus:outline-none focus:border-green-700	" id="attendeeFullName">
          </div>
          <div>
            <label class="block">Email</label>
            <input type="email" name="attendeeEmail" class="appearance-none block w-full h-5 text-black rounded-sm border py-3 px-3 mb-3 focus:outline-none focus:border-green-700	" id="attendeeEmail">
          </div>
          <div>
            <input @click="openBasic" type="button" value="Register" class="font-semibold  hover:cursor-pointer rounded-sm py-1 px-1 bg-blue" >
          </div>
        </form>
        <Dialog header="Registration Success!" v-model:visible="showModal" :breakpoints="{'960px': '75vw', '640px': '95vw'}" :style="{width: '50vw'}">
            <p class="text-center text-lg">You are registered</p>
            <template #footer>
                <Button label="OK" @click="closeModal" class="p-button-text text-center"/>
            </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>
