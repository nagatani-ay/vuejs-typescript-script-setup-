<script setup lang="ts">
const props = defineProps<{
  optionList: string[];
  listType: string;
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string);
}>();
</script>

<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <optgroup :label="listType">
      <option v-for="option in optionList" :key="option" :value="option">
        {{ option }}
      </option>
    </optgroup>
  </select>
</template>

<style></style>
