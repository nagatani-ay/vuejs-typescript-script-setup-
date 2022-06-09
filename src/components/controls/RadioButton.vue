<script setup lang="ts">
const props = defineProps<{ modelValue: string; itemType: string ,group:string}>();
const emit = defineEmits<{ (e: 'update:modelValue', text: string): string }>();
</script>

<template>
  <label>
    <input
      type="radio"
      :value="itemType"
      :name="group"
      :checked="modelValue == itemType"
      @input="$emit('update:modelValue', $event.target.value)"
    />{{ itemType }}
  </label>
</template>

<style></style>
