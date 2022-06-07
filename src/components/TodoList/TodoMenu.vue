<script setup lang="ts">
// Components
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import RadioButton from '../controls/RadioButton.vue';
import SortSelect from '../controls/Select.vue';
//Functions
import { generateID, getTime, toObjectDeadline } from '../../Function/utils';
import { useSort } from '../../Function/useSort';
import { useTodos } from '../../Function/useTodos';
import { ref } from 'vue';
// Types
import { Todo, SortType, FilterType, OrderType } from '../../types';

const { add, createNewData } = useTodos();
const { filterType, setFilter, setSort } = useSort();

const filterTypes = ['全', '済', '未'];
const orderTypes = ['ascend', 'decend'];
const sortTypes = ['Text', 'Status', 'Time', 'Deadline'];

const selectFilterType = ref<FilterType>('全');
const selectSortType = ref<SortType>('Text');
const selectOrder = ref<OrderType>('decend');

const newText = ref('');
const newDeadline = ref('');
const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
function onCreate() {
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
  <div>
    <!-- 新規追加 -->
    <custom-button @click="toggleMenu()">New</custom-button>
    <div v-if="isOpen">
      <text-input v-model="newText"></text-input>
      <date-input v-model="newDeadline"></date-input>
      <custom-button @click="onCreate()">create</custom-button>
    </div>
    <!-- ソート -->
    <sort-select
      class="menu"
      :optionList="sortTypes"
      v-model="selectSortType"
      listType="SortType"
    ></sort-select>
    <custom-button class="menu" @click="setSort(selectSortType, selectOrder)"
      >実行
    </custom-button>
    <radio-button
      class="menu"
      v-for="order in orderTypes"
      :key="order"
      v-model="selectOrder"
      :itemType="order"
      group="Order"
    ></radio-button>

    <!-- フィルター -->
    <radio-button
      class="menu"
      v-for="filter in filterTypes"
      :key="filter"
      v-model="selectFilterType"
      :itemType="filter"
      group="FilterMenuButton"
      @change="setFilter(selectFilterType)"
    ></radio-button>
  </div>
</template>

<style>
.menu {
  margin-right: 5px;
}
</style>
