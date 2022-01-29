<template>
  <div>
    <p class="mt-1 text-xl lg:text-base font-bold">
      {{ company }} - {{ title }}
      <span class="hidden lg:inline text-xs">{{ duration }}</span>
    </p>
    <p class="lg:hidden text-base mb-2">{{ duration }}</p>
    <p class="text-lg lg:text-sm mt-1 text-justify mb-8 lg:mb-0">
      {{ summary }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    company: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    }
  }
};
</script>
