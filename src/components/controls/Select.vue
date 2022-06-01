<script setup lang="ts">
const props =
  defineProps<{ optionList: string[]; listType: string; selectSort: string }>();
const emit = defineEmits<{}>();
</script>

<template>
  <select class="sortSelect" v-model="selectSort">
    <optgroup :label="listType">
      <option v-for="option in optionList">{{ option }}</option>
    </optgroup>
  </select>
</template>

<style></style>
