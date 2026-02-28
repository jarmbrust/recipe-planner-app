<script setup lang="ts">
const appConfig = useAppConfig();

console.log(appConfig.theme);
</script>

<template>
  <h1>Index page</h1>
  <template>
    <div>
      <span class="text-primary">Primary</span>
      <span class="text-secondary">Secondary</span>
      <span class="text-success">Success</span>
      <span class="text-info">Info</span>
      <span class="text-warning">Warning</span>
      <span class="text-error">Error</span>
    </div>
    <div>
      <div class="bg-default">Default</div>
      <div class="bg-muted">Muted</div>
      <div class="bg-elevated">Elevated</div>
      <div class="bg-accented">Accented</div>
      <div class="bg-inverted text-inverted">Inverted</div>
    </div>
  </template>
</template>
