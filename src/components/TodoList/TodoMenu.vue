<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import { generateID, getTime, toObjectDeadline } from '../../Function/utils';
import { ref } from 'vue';
import { Todo, SortType, FilterType, OrderType } from '../../types';
import RadioButton from '../controls/RadioButton.vue';
import SortSelect from '../controls/Select.vue';

const filterTypes = ['全', '済', '未'];
const orderList = ['ascend', 'decend'];
const sortTypeList = ['Text', 'Status', 'Time', 'Deadline'];

const selectFilterType = ref<FilterType>('全');
const selectSortType = ref<SortType>('Text');
const selectOrder = ref<OrderType>('decend');

const newText = ref('');
const newDeadline = ref('');
const isOpen = ref(false);
const props = defineProps<{}>();
const emit = defineEmits<{
  (e: 'create', data: Todo);
  (e: 'update:filter', selectFilterType: string);
  (e: 'update:sort', selectSortType: string, selectOrder: string);
}>();
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function createNewData() {
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
    <!-- ソート -->
    <sort-select
      :optionList="sortTypeList"
      :selectOption="selectSortType"
      listType="SortType"
      v-model="selectSortType"
    ></sort-select>
    <radio-button
      v-for="order in orderList"
      :key="order"
      v-model="selectOrder"
      :itemType="order"
      group="Order"
    ></radio-button>
    <custom-button @click="$emit('update:sort', selectSortType, selectOrder)">
      実行
    </custom-button>
    <!-- フィルター -->
    <radio-button
      v-for="filter in filterTypes"
      :key="filter"
      v-model="selectFilterType"
      :itemType="filter"
      group="FilterMenuButton"
    ></radio-button>
    <custom-button @click="$emit('update:filter', selectFilterType)">
      実行
    </custom-button>
  </div>
</template>

<style></style>
