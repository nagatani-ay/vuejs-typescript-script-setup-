<script setup lang="ts">
import TodoItem from '../components/TodoList/TodoItem.vue';
import TodoMenu from '../components/TodoList/TodoMenu.vue';
import { ref, computed } from 'vue';
const props = defineProps<{ todos: Todo[] }>();
const emit = defineEmits<{
  (e: 'create', data: Todo);
  (e: 'edit', data: Todo);
  (e: 'delete', data: string);
  (e: 'check', data: string);
}>();

const sortType = ref('Text');
const sortOrder = ref('');
const filterType = ref('全');
const changeFilter = (data) => {
  console.log(data);
};

const listFilter = computed(() => {
  let filtered_list = [];

  filtered_list = props.todos.map((x) => x);
  if (filterType.value == '全') {
  } else if (filterType.value == '済') {
    filtered_list = filtered_list.filter((x) => x.status == true);
  } else if (filterType.value == '未') {
    filtered_list = filtered_list.filter((x) => x.status == false);
  }
  return filtered_list;
});

const listSort = computed(() => {
  let sorted_list = [];
  let order = 1;
  if (sortOrder.value == 'ascend') {
    order = -1;
  } else {
    order = 1;
  }
  if (sortType.value == '') {
  } else {
  }
  // テキスト順
  if (sortType.value == 'Text') {
    sorted_list = listFilter.value
      .map((x) => x)
      .sort((a, b) => {
        if (a.text === b.text) {
          return a.deadline < b.deadline ? -order : order;
        }
        return a.text < b.text ? -order : order;
      });
    // 完了順
  } else if (sortType.value == 'Status') {
    let truelist = listFilter.value
      .filter((x) => x.status == true)
      .sort((a, b) => {
        if (a.text === b.text) {
          return a.deadline < b.deadline ? -order : order;
        }
        return a.text < b.text ? -order : order;
      });
    let falselist = listFilter.value
      .filter((x) => x.status == false)
      .sort((a, b) => {
        if (a.text === b.text) {
          return a.deadline < b.deadline ? -order : order;
        }
        return a.text < b.text ? -order : order;
      });

    if (order == 1) {
      sorted_list = truelist.concat(falselist);
    } else {
      sorted_list = falselist.concat(truelist);
    }

    // 最終更新時間
  } else if (sortType.value == 'Time') {
    sorted_list = listFilter.value
      .map((x) => x)
      .sort((a, b) => {
        if (a.time === b.time) {
          return a.text < b.text ? -order : order;
        }
        return a.time < b.time ? -order : order;
      });
    // 締切順
  } else if (sortType.value == 'Deadline') {
    sorted_list = listFilter.value
      .map((x) => x)
      .sort((a, b) => {
        if (a.deadline === b.deadline) {
          return a.text < b.text ? -order : order;
        }
        return a.deadline < b.deadline ? -order : order;
      });
  }
  return sorted_list;
});
</script>

<template>
  <div>ToDo</div>
  <div class="menu">
    <todo-menu
      :selectFilterType="filterType"
      @create="$emit('create', $event)"
      @filter="$emit(changeFilter())"
    ></todo-menu>
  </div>
  <ul>
    <todo-item
      v-for="todo in todos"
      :key="todo.code"
      :todo="todo"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
      @check="$emit('check', $event)"
    ></todo-item>
  </ul>
</template>

<style></style>
