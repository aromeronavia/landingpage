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
      <h1 class="mt-6 text-xl">Alberto Romero 👋</h1>
      <div class="text-center mt-4">
        <a href="https://github.com/beeetooo" target="_blank">
          <img
            class="inline"
            width="24"
            height="24"
            src="~/assets/github.svg"
            alt="github-portfolio"
          />
        </a>
        <a href="https://linkedin.com/in/albertoromnav" target="_blank">
          <img
            class="inline"
            width="24"
            height="24"
            src="~/assets/linkedin.svg"
            alt="linkedin-profile"
          />
        </a>
        <a href="https://linkedin.com/in/albertoromnav" target="_blank">
          <img
            class="inline"
            width="24"
            height="24"
            src="~/assets/curriculum.svg"
            alt="curriculum-vitae"
          />
        </a>
      </div>
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
