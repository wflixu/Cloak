<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';

const onTest = () => {
  invoke('my_custom_command')
    .then((response) => {
      console.log('Response from Rust:', response);
    })
    .catch((error) => {
      console.error('Error calling Rust function:', error);
    });
}
</script>

<template>
  <main>
    <h1>Home</h1>
    <Button @click="onTest">test</Button>
  </main>
</template>
