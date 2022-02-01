<template>
  <button class="cursor-pointer" @click="$emit('toggle')">
    <Moon :darkMode="darkMode" />
  </button>
</template>

<script>
import Moon from "./Moon.vue";

export default {
  components: { Moon },
  props: {
    darkMode: {
      type: Boolean,
      required: true
    }
  }
};
</script>
