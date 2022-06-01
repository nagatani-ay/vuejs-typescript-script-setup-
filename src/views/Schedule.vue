<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ScheduleMenu from '../components/Schedule/ScheduleMenu.vue';
import TodoCalendar from '../components/Schedule/Calendar.vue';


const props = defineProps<{}>();
const emit = defineEmits<{}>();

const currentYear=ref(new Date().getFullYear())
const currentMonth=ref(new Date().getMonth() + 1)


//  const calendarArray = computed(() => {
//    let calendarArray=[];
//   const firstDayWeek = new Date(currentYear.value, currentMonth.value,1).getDay();
//   const lastDayWeek = new Date(currentYear.value, currentMonth.value,0).getDay();
// console.log(firstDayWeek)
//   for (i=0;i<firstDayWeek ;i++){
//     console.log(i)
//   }


//  });
</script>

<template>
  <schedule-menu :currentMonth="currentMonth"
  :currentYear="currentYear"></schedule-menu>
  <todo-calendar></todo-calendar>
<!-- {{calendarArray}} -->
  
</template>

<style></style>
