<script setup lang="ts">
const props = defineProps<{
  optionList: string[];
  listType: string;
  selectOption: string;
}>();
const emit = defineEmits<{}>();
</script>

<template>
  <select v-model="selectOption">
    <optgroup :label="listType">
      <option v-for="option in optionList">{{ option }}</option>
    </optgroup>
  </select>
</template>

<style></style>
