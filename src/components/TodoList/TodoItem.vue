<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import CheckBox from '../controls/CheckBox.vue';
import { ref } from 'vue';
import {
  toStringDeadline,
  toObjectDeadline,
  getTime,
} from '../../Function/utils';
import { Todo } from '../../types';

const props = defineProps<{ todo: Todo }>();
const emit = defineEmits<{
  (e: 'edit', data: Todo);
  (e: 'delete', data: string);
  (e: 'check', data: string);
}>();

const isOpen = ref(false);
const tempText = ref('');
const tempDeadline = ref('');

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const editData = () => {
  const newData = {
    code: props.todo.code,
    text: tempText.value,
    status: props.todo.status,
    time: getTime(),
    deadline: toObjectDeadline(tempDeadline.value),
  };
  emit('edit', newData);
  tempText.value = '';
  tempDeadline.value = '';
  toggleMenu();
};
const deleteData = () => {
  emit('delete', props.todo.code);
  toggleMenu();
};
</script>

<template>
  <li>
    <custom-button @click="toggleMenu()">edit</custom-button>
    <!-- 編集メニュー -->
    <div class="editMenu" v-if="isOpen">
      <custom-button @click="deleteData()">delete</custom-button>
      <text-input v-model="tempText" :placeholder="todo.text"></text-input>
      <date-input v-model="tempDeadline"></date-input>
      <custom-button @click="editData()">完了</custom-button>
    </div>
    <!-- 表示アイテム -->
    <check-box
      :modelValue="todo.status"
      @check="$emit('check', todo.code)"
    ></check-box>
    <span>
      <span class="text">{{ todo.text }}</span>
      <span class="time">{{ todo.time }}</span>
    </span>

    <span class="deadline">{{ toStringDeadline(todo.deadline) }}</span>
  </li>
</template>

<style>
.time {
  font-size: 0.8em;
  color: transparent;
}

.time:hover {
  color: grey;
}
</style>
