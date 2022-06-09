import { ref, computed } from 'vue';
import { Calendar } from '../types';
const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth() + 1);

export function useSchedule() {
  const dayOfWeeksJP = ['日', '月', '火', '水', '木', '金', '土'];
  const calendarArray = computed(() => {
    const calendarArray: Calendar[] = [];
    const year = currentYear.value;
    const month = currentMonth.value;

    const firstDayWeek = new Date(`${year}-${month}-${1}`).getDay(); //月初の曜日
    const lastDayWeek = new Date(year, month, 0).getDate(); //当月最終日
    const lastMonthDay = new Date(year, month - 1, 0); //前月最終日
    const nextMonthDay = new Date(year, month + 1); //次月

    for (let i = 0; i < firstDayWeek; i++) {
      calendarArray.push({
        date: {
          year: lastMonthDay.getFullYear(),
          month: lastMonthDay.getMonth() + 1,
          day: lastMonthDay.getDate() - firstDayWeek + i + 1,
        },
        dayofweek: i,
      });
    }
    for (let i = 0; i < lastDayWeek; i++) {
      calendarArray.push({
        date: {
          year: currentYear.value,
          month: currentMonth.value,
          day: i + 1,
        },
        dayofweek: (i + firstDayWeek) % 7,
      });
    }

    let count = calendarArray[calendarArray.length - 1].dayofweek;
    let loop = 0;
    while (count != 6) {
      calendarArray.push({
        date: {
          year: nextMonthDay.getFullYear(),
          month: nextMonthDay.getMonth(),
          day: loop + 1,
        },
        dayofweek: count + 1,
      });

      count++;
      loop++;
      if (count > 7) {
        break;
      }
    }
    return calendarArray;
  });
  function getYear() {
    return currentYear;
  }
  function getMonth() {
    return currentMonth;
  }
  function prevCalendar() {
    currentMonth.value--;
    if (currentMonth.value == 0) {
      currentMonth.value = 12;
      currentYear.value--;
    }
  }

  function setClassName(data: string | number) {
    if (typeof data == 'string') {
      const index = dayOfWeeksJP.findIndex((e) => e == data);
      return `dayofweek--${index}`;
    } else {
      return `dayofweek--${data}`;
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
    getYear,
    getMonth,
    prevCalendar,
    nextCalendar,
    calendarArray,
    setClassName,
    dayOfWeeksJP,
  };
}
