<template>
  <div>
    <p class="mt-4 text-xl font-bold">
      {{ title }} -
      <a class="text-blue-600 underline" :href="companyURL" target="_blank">
        {{ company }}</a
      >
    </p>
    <p class="text-base mb-2">{{ duration }}</p>
    <p class="text-lg mt-1 text-justify mb-8 lg:mb-0">
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
    companyURL: {
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
