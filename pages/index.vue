<template>
  <div class="w-full" :class="`${color}-mode dark:bg-black`">
    <nav class="w-full flex justify-between px-6 py-4 h-16 bg-gray-100">
      <LanguageSelector :language="language" @click="changeLanguage" />
      <!-- <DarkModeToggler
        :enabled="darkModeEnabled"
        @toggle="darkModeEnabled = !darkModeEnabled"
      /> -->
    </nav>
    <div class="flex">
      <section
        id="about-me"
        class="w-full h-max text-center xl:border-r xl:text-left xl:px-12 dark:bg-black py-20"
      >
        <img
          class="rounded-full mx-auto"
          width="140"
          height="140"
          alt="image"
          src="~/assets/profilepicture.jpeg"
        />
        <h1 class="mt-6 text-2xl text-center dark:text-white">
          Alberto Romero
        </h1>
        <div class="mt-4 text-center">
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
          <a href="/resume">
            <img
              class="inline"
              width="24"
              height="24"
              src="~/assets/curriculum.svg"
              alt="curriculum-vitae"
            />
          </a>
        </div>
        <ul
          class="mt-12 text-xl w-max text-left mx-auto xl:text-lg xl:text-left xl:w-full"
        >
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
      <section class="hidden xl:block pr-32 pl-20">
        <section id="summary" class="text-justify pt-10">
          <p class="text-3xl"></p>
          <h2 class="text-xl">About Me 👋</h2>
          <p>
            I've been doing software engineering for 7+ years in corps and
            startups at Mexico and Silicon Valley.
          </p>
          <p>
            I have relevant experience as Engineering Lead and Engineering
            Manager across different startups. I like to ship things and iterate
            fast. I have helped companies in Mexico with technical mentoring and
            talent referral. I really enjoy working with the community, so I
            created a group of Technical Leaders called
            <a
              class="text-blue-700 font-bold underline"
              href="https://esquinacto.com"
              target="_blank"
              >Esquina CTO</a
            >
            to gather together and share common painpoints in the startup
            ecosystem, from the tech side.
            <a
              class="text-blue-700 font-bold underline"
              href="https://forms.gle/dqaq5SqJ76yWtAjW9"
              target="_blank"
              >Let me know how can I help</a
            >
          </p>
        </section>
        <section class="grid grid-cols-2">
          <article class="hidden xl:block py-5">
            <h2 class="text-xl text-black">Most Recent Projects</h2>
            <project
              targetURL="https://pianokeyboard.xyz"
              title="Piano Keyboard"
              description="Piano Keyboard, capable of reproducing sounds with different sinoidal shapes"
              :imageURL="require('~/assets/piano.png')"
            />
            <project
              targetURL="https://explorethefret.com"
              title="Explore the Fretboard"
              description="Discover how to play different scale modes (Doryan, Lydyan, etc) from the guitar with a Guitar Freat tool"
              :imageURL="require('~/assets/fretboard.png')"
            />
            <project
              targetURL="https://areehiring.com/apply/38dd989a-9c67-4f78-8ed8-255dd2107bb9"
              title="Aree Hiring"
              description="Meant to be a Toggl Hire clone. I did a very small quiz around Javascript, and made the system to score candidates and relate them to job posts"
              :imageURL="require('~/assets/aree.png')"
            />
          </article>
          <article class="hidden xl:block py-5 ml-10">
            <h2 class="text-xl text-left text-black mb-1">
              Most Revelant Experience
            </h2>
            <p class="mt-1 text-md font-bold">
              Shiphero - Senior Software Engineer
              <span class="text-xs">June 2021 - Current</span>
            </p>
            <p class="text-sm mt-1 text-justify">
              I did focus my first 6 months on refactoring the codebase to
              reduce legacy code and improve stability of different parts of the
              back end code base. Currently I'm working with React Native to
              build new features for our customers.
            </p>
            <p class="mt-1 text-md font-bold">
              GoExpedi - Engineering Manager
              <span class="text-xs">April 2020 - April 2021</span>
            </p>
            <p class="text-sm mt-1 text-justify">
              Managing a team of 10 engineers and an Engineering Manager.
              Responsible for product delivery, process ceremonies and
              continuous improvement of the overall team. Embraced a Continuous
              Delivery culture within the team, making sure we get early
              feedback and we commit healthy code into our test environments.
              Did coding 20% of my time.
            </p>
            <p class="mt-1 text-md font-bold">
              Rever - Senior Product Engineer
              <span class="text-xs">December 2018 - March 2020</span>
            </p>
            <p class="text-sm mt-1 text-justify">
              Focused on <strong>Technical Planning</strong> (decomposing
              features through our different teams) and worked on our interview
              processes (defining interview questions and metrics). My
              responsibilities are to make our Front and Back end teams deliver
              quality code by doing Code Reviews, Technical Specification
              documents, Pair Programming and doing workshops for Software
              Design and Testing. Worked with Node.js, Python, MongoDB and
              PostgreSQL.
            </p>
          </article>
        </section>
      </section>
    </div>
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
          "about.langs": "Langs: Javascript, Python, Ruby & Rust",
          "about.creator": "Creator of",
          "about.soundcloud": "Listen to my music on"
        },
        es: {
          "about.design": "Apasionado del Diseño de Software",
          "about.langs": "Langs: Javascript, Python, Ruby & Rust",
          "about.creator": "Creador de",
          "about.soundcloud": "Escucha mi musica en"
        }
      };

      return translations[this.language][key];
    }
  }
};
</script>
