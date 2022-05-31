<script setup lang="ts">
const props = withDefaults(defineProps<{ modelValue: string }>(), {
  modelValue: '',
});
const emit = defineEmits<{ (e: 'update:modelValue', text: string): string }>();
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style></style>
