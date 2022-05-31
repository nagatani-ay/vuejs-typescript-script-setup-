<script setup lang="ts">
const props = defineProps<{ modelValue: string; filter: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', text: string): string }>();
</script>

<template>
  <label>
    <input
      type="radio"
      :value="filter"
      name="group"
      :checked="modelValue == filter"
      @input="$emit('update:modelValue', $event.target.value)"
    />{{ filter }}
  </label>
</template>

<style></style>
