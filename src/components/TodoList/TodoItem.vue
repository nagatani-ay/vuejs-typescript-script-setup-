<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import CheckBox from '../controls/CheckBox.vue';
import { ref, computed } from 'vue';
import { toStringDeadline } from '../../Function/utils';
import { Todo } from '../../types';
import { useTodos } from '../../Function/useTodos';

const { edit, checked, remove, editData } = useTodos();
const props = defineProps<{ todo: Todo }>();
const isOpen = ref(false);
const tempText = ref(props.todo.text);
const tempDeadline = ref(toStringDeadline(props.todo.deadline));

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function onEdit() {
  if (tempText.value === '' || tempDeadline.value === '') {
    alert('値を入力してください');
  } else {
    edit(editData(props.todo, tempText.value, tempDeadline.value));
    toggleMenu();
  }
}
const localValue = computed({
  get() {
    return props.todo.status;
  },
  set() {
    checked(props.todo.code);
  },
});

function removeData() {
  remove(props.todo.code);
  toggleMenu();
}
</script>

<template>
  <li>
    <custom-button class="toggle" @click="toggleMenu()">edit</custom-button>
    <!-- 編集メニュー -->
    <div class="editMenu" v-if="isOpen">
      <custom-button class="remove_button" @click="removeData()"
        >remove</custom-button
      >
      <text-input v-model="tempText"></text-input>
      <date-input v-model="tempDeadline"></date-input>
      <custom-button class="edit_button" @click="onEdit()">完了</custom-button>
    </div>
    <!-- 表示アイテム -->
    <check-box v-model="localValue"></check-box>
    <span>
      <span class="text">{{ todo.text }}</span>
      <span class="time"
        ><span v-if="todo.status">完了:</span>{{ todo.time }}</span
      >
    </span>

    <span class="deadline">{{ toStringDeadline(todo.deadline) }}</span>
  </li>
</template>

<style>
.time {
  color: lightgrey;
}
</style>
