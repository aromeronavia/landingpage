<template>
  <div class="w-full pt-1 inline cursor-pointer" @click="$emit('click')">
    <WorldIcon />
    <span class="capitalize">{{ language }}</span>
  </div>
</template>

<script>
import WorldIcon from "./WorldIcon.vue";

export default {
  components: { WorldIcon },
  props: {
    language: {
      type: String,
      required: false,
      default: "en"
    }
  }
};
</script>
