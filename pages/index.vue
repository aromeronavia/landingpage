<template>
  <div class="w-full">
    <nav class="w-full flex justify-between px-6 py-4 h-16 bg-gray-100">
      <LanguageSelector :language="language" @click="changeLanguage" />
      <DarkModeToggler :enabled="darkModeEnabled" />
    </nav>
    <section id="about-me" class="w-full text-center">
      <img
        class="rounded-full text-center mx-auto mt-6"
        width="140"
        height="140"
        alt="image"
        src="~/assets/profilepicture.jpeg"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "en",
      darkModeEnabled: false
    };
  },
  methods: {
    changeLanguage() {
      if (this.language === "en") {
        this.language = "es";
      } else {
        this.language = "en";
      }
    }
  }
};
</script>
