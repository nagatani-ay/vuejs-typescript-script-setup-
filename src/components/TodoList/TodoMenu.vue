<script setup lang="ts">
// Components
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import RadioButton from '../controls/RadioButton.vue';
import SortSelect from '../controls/Select.vue';
//Functions
import { generateID, getTime, toObjectDeadline } from '../../Function/utils';
import { useSort, filterType } from '../../Function/useSort';
import { useTodos } from '../../Function/useTodos';
import { ref } from 'vue';
// Types
import { Todo, SortType, FilterType, OrderType } from '../../types';

const { add, createNewData } = useTodos();
const { setSort } = useSort();

const filterTypes = ['全', '済', '未'];
const orderTypes = ['ascend', 'decend'];
const sortTypes = ['Text', 'Status', 'Time', 'Deadline'];

const selectSortType = ref<SortType>('Text');
const selectOrder = ref<OrderType>('decend');

const newText = ref('');
const newDeadline = ref('');
const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function onCreate() {
  //promiseを使える？
  if (newText.value === '' || newDeadline.value === '') {
    alert('値を入力してください');
  } else {
    add(createNewData(newText.value, newDeadline.value));
    newText.value = '';
    newDeadline.value = '';
    toggleMenu();
  }
}
</script>

<template>
  <div class="flex">
    <!-- 新規追加 -->
    <div class="fixed bottom-0 right-0 m-10">
      <custom-button
        v-if="!isOpen"
        class="p-5 rounded-full bg-white"
        @click="toggleMenu()"
        >New</custom-button
      >
      <div v-if="isOpen" class="flex content-center">
        <custom-button class="p-1 bg-white" @click="toggleMenu()"
          >cancel</custom-button
        >
        <text-input v-model="newText" class="border m-2"></text-input>
        <date-input v-model="newDeadline" class="border m-2"></date-input>
        <custom-button @click="onCreate()" class="border p-2"
          >create</custom-button
        >
      </div>
    </div>
    <!-- ソート -->
    <sort-select
      class="mr-2"
      :optionList="sortTypes"
      v-model="selectSortType"
      listType="SortType"
    ></sort-select>
    <custom-button class="mr-2" @click="setSort(selectSortType, selectOrder)"
      >実行
    </custom-button>
    <radio-button
      class="mr-2 block"
      v-for="order in orderTypes"
      :key="order"
      v-model="selectOrder"
      :itemType="order"
      group="Order"
    ></radio-button>

    <!-- フィルター -->
    <radio-button
      class="mr-2"
      v-for="filter in filterTypes"
      :key="filter"
      v-model="filterType"
      :itemType="filter"
      group="FilterMenuButton"
    ></radio-button>
  </div>
</template>

<style></style>
