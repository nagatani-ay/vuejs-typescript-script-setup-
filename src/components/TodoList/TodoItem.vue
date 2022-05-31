<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import TextInput from '../controls/TextInput.vue';
import DateInput from '../controls/DateInput.vue';
defineProps<{ todo: Todos }>();
</script>

<template>
  <li>{{ todo.text }}</li>
</template>

<style></style>
