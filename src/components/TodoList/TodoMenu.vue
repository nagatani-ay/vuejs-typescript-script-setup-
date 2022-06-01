<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import { generateID, getTime, toObjectDeadline } from '../../Function/utils';
import { ref } from 'vue';
import { Todo } from '../../types';
import RadioButton from '../controls/RadioButton.vue';
import SortSelect from '../controls/Select.vue';

const filterTypes = ref(['全', '済', '未']);
const selectFilterType = ref('全');

const sortTypeList = ref(['Text', 'Status', 'Time', 'Deadline']);
const selectSortType = ref('Text');

const orderList = ref(['ascend', 'decend']);
const selectOrder = ref('decend');

const newText = ref('');
const newDeadline = ref('');
const isOpen = ref(false);
const props = defineProps<{}>();
const emit = defineEmits<{
  (e: 'create', data: Todo);
  (e: 'update:filter', selectFilterType: string);
  (e: 'update:sort', selectSortType: string, selectOrder: string);
}>();
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const createNewData = () => {
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
  toggleMenu();
};
</script>

<template>
  <div>
    <custom-button @click="toggleMenu()">New</custom-button>
    <div v-if="isOpen">
      <text-input v-model="newText"></text-input>
      <date-input v-model="newDeadline"></date-input>
      <custom-button @click="createNewData()">create</custom-button>
    </div>
    <sort-select
      :optionList="sortTypeList"
      :selectSort="selectSortType"
      listType="SortType"
    ></sort-select>
    <radio-button
      v-for="order in orderList"
      :itemType="order"
      group="Order"
      v-model="selectOrder"
    ></radio-button>
    <custom-button @click="$emit('update:sort', selectSortType, selectOrder)">
      実行
    </custom-button>
    <radio-button
      v-for="filter in filterTypes"
      :itemType="filter"
      group="FilterMenuButton"
      v-model="selectFilterType"
    ></radio-button>
    <custom-button @click="$emit('update:filter', selectFilterType)">
      実行
    </custom-button>
  </div>
</template>

<style></style>
