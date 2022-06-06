<script setup lang="ts">
import ScheduleMenu from '../components/Schedule/ScheduleMenu.vue';
import TodoCalendar from '../components/Schedule/Calendar.vue';
import { useSchedule } from '../Function/useSchedule';
import { useTodos } from '../Function/useTodos';
import { ref, onMounted, watch, computed } from 'vue';
import { toStringDeadline } from '../Function/utils';
import { Todo, Calendar } from '../types';

const { currentYear, currentMonth, prevCalendar, nextCalendar } = useSchedule();

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

const calendarItems = computed(() => {
  const list: { [key: string]: Todo[] } = {};
  const keys = new Set(todos.value.map((x) => toStringDeadline(x.deadline)));

  for (let key of keys) {
    list[key] = [];
  }
  todos.value.forEach((todo: Todo) => {
    list[toStringDeadline(todo.deadline)].push(todo);
  });

  return list;
});

const { todos, edit } = useTodos();
</script>

<template>
  <schedule-menu
    :calendarArray="calendarArray"
    :currentYear="currentYear"
    :currentMonth="currentMonth"
    @prev="prevCalendar()"
    @next="nextCalendar()"
  ></schedule-menu>
  <!-- 本体 -->
  <todo-calendar
    :calendarArray="calendarArray"
    :calendarItems="calendarItems"
    :todos="todos"
    @edit="edit"
  ></todo-calendar>
</template>

<style></style>
