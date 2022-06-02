<script setup lang="ts">
import { Todo } from '../../types';
import { ref } from 'vue';
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import {toStringDeadline,toObjectDeadline} from '../../Function/utils';
const props = defineProps<{ calendarItem: Todo }>();
const emit = defineEmits<{}>();
const isOpen = ref(false);
const tempText = ref(props.calendarItem.text);
const tempDeadline = ref(toStringDeadline(props.calendarItem.deadline));
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="todo__item" @dblclick="toggleMenu()">
    
      <p>{{ calendarItem.text }}</p>
  
    <div class="item__menu" v-if="isOpen">
    <custom-button @click="toggleMenu()">×</custom-button>
    <text-input v-model="tempText"></text-input>
    <date-input v-model="tempDeadline"></date-input>
    <custom-button @click="editData()">完了</custom-button>
    </div>
  </div>
</template>

<style>
.todo__item{
 
}
.item__menu {
  z-index: 2;
  position: absolute;
  
  
  background-color: white;
  border: solid 1px rgb(34 197 94);
}
</style>
