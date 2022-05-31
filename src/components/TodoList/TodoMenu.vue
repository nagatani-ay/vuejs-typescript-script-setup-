<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import { generateID, getTime, toObjectDeadline } from '../../Function/utils';
import { ref } from 'vue';
import { Todo } from '../../types';

const newText = ref('');
const newDeadline = ref('');
const isOpen =ref(false);

const emit = defineEmits<{ (e: 'create', data: Todo) }>();
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const createNewData=() => {
  const newData = {
    code: generateID(),
    text: newText.value,
    status: false,
    time: getTime(),
    deadline: toObjectDeadline(newDeadline.value),
  };
  emit('create', newData);
  newText.value = '';
  newDeadline.value = '';
  toggleMenu()
}
</script>

<template>
  <div>
    <custom-button @click="toggleMenu()">New</custom-button>
    <div v-if="isOpen">
      <text-input v-model="newText"></text-input>
      <date-input v-model="newDeadline"></date-input>
      <custom-button @click="createNewData()">create</custom-button>
    </div>
  </div>
</template>

<style></style>
