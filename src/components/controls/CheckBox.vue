<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>();
const emit =
  defineEmits<{ (e: 'check', modelValue: boolean):string }>();
</script>

<template>
  <input
    type="checkbox"
    :checked="modelValue"
    @change="$emit('check')"
  />
</template>

<style></style>
