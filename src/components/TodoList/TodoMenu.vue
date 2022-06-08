<script setup lang="ts">
// Components
import AddMenu from "./AddMenu.vue"
import CustomButton from '../controls/Button.vue';
import RadioButton from '../controls/RadioButton.vue';
import SortSelect from '../controls/Select.vue';
//Functions
import { useSort, filterType } from '../../Function/useSort';
import { ref } from 'vue';
// Types
import { Todo, SortType, FilterType, OrderType } from '../../types';

const { setSort } = useSort();

const filterTypes = ['全', '済', '未'];
const orderTypes = ['ascend', 'decend'];
const sortTypes = ['Text', 'Status', 'Time', 'Deadline'];

const selectSortType = ref<SortType>('Text');
const selectOrder = ref<OrderType>('decend');

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
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
      <add-menu v-if="isOpen" @toggle="toggleMenu()"></add-menu>
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
