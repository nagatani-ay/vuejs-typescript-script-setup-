<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
const props = defineProps<{ calendarArray: Calendar ;currentYear:number;currentMonth:number}>();
const emit = defineEmits<{(e: 'prev'); (e: 'next');}>();
</script>

<template>
  <p class="currentYear">{{ currentYear }}</p>
  <div class="schedule__controls">
    <custom-button @click="$emit('prev')">last</custom-button>
    <p class="currentMonth">{{ currentMonth }}月</p>
    <custom-button @click="$emit('next')">next</custom-button>
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
