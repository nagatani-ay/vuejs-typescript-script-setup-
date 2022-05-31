<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import CheckBox from '../controls/CheckBox.vue';
import { ref } from 'vue';
import { toStringDeadline } from '../../Function/utils';

defineProps<{ todo: Todos }>();

const isOpen = ref(false);
const tempText = ref('');
const tempDeadline = ref('');

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <li>
    {{ tempText }}/{{ tempDeadline }}
    <custom-button @click="toggleMenu()">edit</custom-button>
    <div class="editMenu" v-if="isOpen">
      <text-input v-model="tempText" :placeholder="todo.text"></text-input>
      <date-input
        v-model="tempDeadline"
        :value="toStringDeadline(todo.deadline)"
      ></date-input>
      <custom-button @click="editData()">create</custom-button>
    </div>
    <check-box></check-box>
    <span>{{ todo.text }}</span>
    <span>{{ todo.time }}</span>
  </li>
</template>

<style></style>
