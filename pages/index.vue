<template>
  <div class="w-full" :class="`${color}-mode dark:bg-black`">
    <nav class="w-full flex justify-between px-6 py-4 h-16 bg-gray-100">
      <LanguageSelector :language="language" @click="changeLanguage" />
      <!-- <DarkModeToggler
        :enabled="darkModeEnabled"
        @toggle="darkModeEnabled = !darkModeEnabled"
      /> -->
    </nav>
    <section id="about-me" class="w-full text-center dark:bg-black py-20">
      <img
        class="rounded-full text-center mx-auto "
        width="140"
        height="140"
        alt="image"
        src="~/assets/profilepicture.jpeg"
      />
      <h1 class="mt-6 text-2xl dark:text-white">Alberto Romero 👋</h1>
      <div class="text-center mt-4">
        <a href="https://github.com/beeetooo" target="_blank">
          <img
            class="inline mr-2"
            width="24"
            height="24"
            src="~/assets/github.svg"
            alt="github-portfolio"
          />
        </a>
        <a href="https://linkedin.com/in/albertoromnav" target="_blank">
          <img
            class="inline mr-2"
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
      <h2 class="text-xl mt-12 font-black">About me</h2>
      <ul class="text-lg w-max text-left mx-auto">
        <li>🗺️ {{ translate("about.design") }}</li>
        <li>💻 {{ translate("about.langs") }}</li>
        <li>
          🔄 {{ translate("about.creator") }}
          <a class="underline" href="https://esquinacto.com"> Esquina CTO </a>
        </li>
        <li>
          🎸 {{ translate("about.soundcloud") }}
          <a class="underline" href="https://soundcloud.com/watashiwabeto"
            >SoundCloud</a
          >
        </li>
      </ul>
    </section>
    <!-- <section
      id="role"
      class="w-full text-center dark:bg-black h-screen"
    ></section> -->
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
  computed: {
    color() {
      if (this.darkModeEnabled) {
        return "dark";
      }

      return "light";
    }
  },
  methods: {
    changeLanguage() {
      if (this.language === "en") {
        this.language = "es";
      } else {
        this.language = "en";
      }
    },
    translate(key) {
      const translations = {
        en: {
          "about.design": "Passionate about Software Design",
          "about.langs": "Langs: Javascript, Python and Ruby",
          "about.creator": "Creator of",
          "about.soundcloud": "Listen to my music on "
        },
        es: {
          "about.design": "Apasionado del Diseño de Software",
          "about.langs": "Langs: Javascript, Python y Ruby",
          "about.creator": "Creador de",
          "about.soundcloud": "Escucha mi musica en"
        }
      };

      return translations[this.language][key];
    }
  }
};
</script>
