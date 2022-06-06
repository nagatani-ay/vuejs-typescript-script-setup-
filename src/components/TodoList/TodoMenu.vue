<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
import { generateID, getTime, toObjectDeadline } from '../../Function/utils';
import { useSort } from '../../Function/useSort';
import { ref } from 'vue';
import { Todo, SortType, FilterType, OrderType } from '../../types';
import RadioButton from '../controls/RadioButton.vue';
import SortSelect from '../controls/Select.vue';
const props = defineProps<{}>();
const emit = defineEmits<{
  (e: 'create', data: Todo);
}>();
const { filterType, setFilterType, setSortType, setSortOrder } = useSort();
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
      class="menu"
      :optionList="sortTypes"
      v-model="selectSortType"
      listType="SortType"
    ></sort-select>
    <custom-button class="menu" @click="setSortType(selectSortType)"
      >実行
    </custom-button>
    <radio-button
      class="menu"
      v-for="order in orderTypes"
      :key="order"
      v-model="selectOrder"
      :itemType="order"
      group="Order"
      @change="setSortOrder(selectOrder)"
    ></radio-button>

    <!-- フィルター -->
    <radio-button
      class="menu"
      v-for="filter in filterTypes"
      :key="filter"
      v-model="selectFilterType"
      :itemType="filter"
      group="FilterMenuButton"
      @change="setFilterType(selectFilterType)"
    ></radio-button>
  </div>
</template>

<style>
.menu {
  margin-right: 5px;
}
</style>
