<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import { useTodos } from '../../Function/useTodos';
import { ref } from 'vue';
const { add, createNewData } = useTodos();
const props = defineProps<{}>();
const emit = defineEmits<{ e: 'toggle' }>();
const newText = ref('');
const newDeadline = ref('');

function onCreate() {
  if (newText.value === '' || newDeadline.value === '') {
    alert('値を入力してください');
  } else {
    add(createNewData(newText.value, newDeadline.value));
    newText.value = '';
    newDeadline.value = '';
    emit('toggle');
  }
}
</script>

<template>
  <div class="flex content-center">
    <custom-button @click="emit('toggle')">cancel</custom-button>
    <text-input v-model="newText"></text-input>
    <date-input v-model="newDeadline"></date-input>
    <custom-button class="create_button" @click="onCreate()">create</custom-button>
  </div>
</template>

<style></style>
