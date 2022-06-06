import { ref, computed, onMounted } from 'vue';

import { useTodos } from './useTodos';

export function useSchedule() {
  const { todos } = useTodos();
  const currentYear = ref(new Date().getFullYear());
  const currentMonth = ref(new Date().getMonth() + 1);

  function prevCalendar() {
    currentMonth.value--;
    if (currentMonth.value == 0) {
      currentMonth.value = 12;
      currentYear.value--;
    }
  }

  function nextCalendar() {
    currentMonth.value++;
    if (currentMonth.value == 13) {
      currentMonth.value = 1;
      currentYear.value++;
    }
  }

  return {
    currentYear,
    currentMonth,
    prevCalendar,
    nextCalendar,
  };
}
