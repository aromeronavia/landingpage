<template>
  <div class="w-full flex justify-center dark:bg-black dark:text-white">
    <div
      class="flex flex-col dark:bg-background dark:text-white w-full items-center"
    >
      <section
        id="about-me"
        class="w-full mt-12 mb-8 h-max text-center dark:border-slate-100 md:w-2/3 md:grid md:px-0 2xl:w-1/3 md:mt-16 lg:w-1/2"
        :style="{
          gridTemplateColumns: '2fr 1fr',
        }"
      >
        <div class="flex flex-col justify-center md:items-baseline">
          <HeaderInfo class="hidden md:block" />
        </div>
        <img
          class="rounded-full mx-auto"
          width="220"
          height="220"
          alt="image"
          src="~/assets/profilepicture.png"
        />
        <HeaderInfo class="md:hidden" />
      </section>
      <section
        id="links"
        class="w-full px-5 md:w-2/3 md:px-0 2xl:w-1/3 lg:w-1/2"
      >
        <ul
          class="grid grid-cols-2 gap-3 md:gap-2 md:flex md:flex-row md:flex-wrap text-center"
        >
          <li class="py-2 md:py-1 md:px-3 bg-red-600 rounded-3xl text-white">
            <a href="https://generalistengineer.substack.com/" target="_blank">
              ✍️ Substack
            </a>
          </li>
          <li class="py-2 md:py-1 md:px-3 bg-black rounded-3xl text-white">
            <a href="https://codepen.io/setzer777" target="_blank">
              ✒️ Codepen
            </a>
          </li>
          <li class="py-2 md:py-1 md:px-3 bg-violet-500 rounded-3xl text-white">
            <a href="https://slides.com/aromeronavia" target="_blank">
              📣 Talks
            </a>
          </li>
          <li
            class="py-2 md:py-1 md:px-3 bg-emerald-500 rounded-3xl text-white"
          >
            <a
              href="https://albertoromero.notion.site/Alberto-Romero-Software-Engineer-6cfdf313e02b4f14a365ed01c5a0094d?pvs=4"
              target="_blank"
            >
              📣 Side Projects
            </a>
          </li>
        </ul>
      </section>
      <section
        id="summary"
        class="w-full px-5 mt-10 flex flex-col text-lg md:w-2/3 mx-auto md:px-0 2xl:w-1/3 lg:w-1/2"
      >
        <div class="mb-10">
          <p>
            Hey! My name is Alberto Romero, I'm a software engineer at a Stealth
            Startup building
            <span class="text-red-700">Dev Tools around databases</span>. I have
            7+ years of relevant experience doing Front End with
            <span class="text-red-300"
              >React.js, Tailwind, Styled Components</span
            >, Back End with
            <span class="text-green-500"> Typescript (Knex.js, Prisma)</span>
            and
            <span class="text-blue-500">
              Python (Django, Flask, SQLAlchemy)
            </span>
            , and ultimately building with
            <span class="text-primary">Rust</span>!
          </p>
          <p class="mt-4">
            I want to remain in the Developer Tools space. I have been really
            excited on this brand new market led by awesome entrepreneurs like
            Guillermo Rauch, Cassidy Williams, Zeno Rocha and other people I
            follow who are doing amazing products.
          </p>
          <p class="mt-4">
            Feel like chatting? I'm always open to meet new people, so feel free
            to reach out to me on LinkedIn or via
            <a
              class="text-blue-500"
              href="mailto:aromeronavia@gmail.com"
              target="_blank"
              >email</a
            >
          </p>
        </div>
      </section>
      <section class="flex flex-col">
        <article class="pb-10 mb-16 hidden">
          <h2 class="text-2xl font-black dark:text-white">
            See my Toy Projects
          </h2>
          <project
            targetURL="https://workat.coffee"
            title="Work At Coffee"
            description="Web Page to review different coffee shops in Guadalajara with good remote ammenities (wifi, desks)"
            :imageURL="require('~/assets/workat.png')"
          />
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
      </section>
    </div>
    <!-- <section
      id="role"
      class="w-full text-center dark:bg-black h-screen"
    ></section> -->
  </div>
</template>

<script>
import Job from "../components/Job.vue";

export default {
  components: { Job },
  data() {
    return {
      darkModeEnabled: true,
    };
  },
  watch: {
    darkModeEnabled(val) {
      this.$colorMode.preference = val === true ? "dark" : "light";
    },
  },
};
</script>
