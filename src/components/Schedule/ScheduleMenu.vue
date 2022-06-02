<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import {useSchedule} from "../../Function/useSchedule"
const { currentYear, currentMonth,prevCalendar,nextCalendar} = useSchedule();
</script>

<template>
  <p class="currentYear">{{ currentYear }}</p>
  <div class="schedule__controls">
    <custom-button @click="prevCalendar()">last</custom-button>
    <p class="currentMonth">{{ currentMonth }}月</p>
    <custom-button @click="nextCalendar()">next</custom-button>
  </div>
</template>

<style scoped>
.schedule__controls,
.currentYear {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.currentMonth,
.currentYear {
  font-size: 1.8em;
}
</style>
