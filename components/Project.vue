<template>
  <section class="mt-4 border rounded-md border-gray-200 cursor-pointer">
    <a class="flex flex-col lg:flex-row" target="_blank" :href="targetURL">
      <img
        class="w-40 h-max rounded-md object-cover"
        alt="image"
        :src="imageURL"
      />
      <div class="border-right p-4">
        <header class="text-xl font-black">{{ title }}</header>
        <p class="mt-1 text-lg">
          {{ description }}
        </p>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  props: {
    targetURL: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageURL: {
      type: String,
      required: true
    }
  }
};
</script>
