<template>
  <html class="dark:bg-black w-full h-full">
    <h1>Color mode: {{ $colorMode.value }}</h1>

    <select v-model="$colorMode.preference">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <div class="w-full h-full flex justify-center dark:text-white">
      <div class="flex flex-col dark:text-white w-full h-full items-center">
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
              <a
                href="https://generalistengineer.substack.com/"
                target="_blank"
              >
                ✍️ Substack
              </a>
            </li>

            <li
              class="py-2 md:py-1 md:px-3 bg-emerald-500 rounded-3xl text-white"
            >
              <a
                href="https://albertoromero.notion.site/Alberto-Romero-Software-Engineer-6cfdf313e02b4f14a365ed01c5a0094d?pvs=4"
                target="_blank"
              >
                🎸 Side Projects
              </a>
            </li>
            <li
              class="py-2 md:py-1 md:px-3 bg-violet-500 rounded-3xl text-white"
            >
              <a href="https://slides.com/aromeronavia" target="_blank">
                📣 Talks
              </a>
            </li>
            <li class="py-2 md:py-1 md:px-3 bg-black rounded-3xl text-white">
              <a href="https://codepen.io/setzer777" target="_blank">
                ✒️ Codepen
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
              Hey! My name is Alberto Romero, I'm a software engineer at a
              Stealth Startup building
              <span class="text-red-700">Dev Tools around databases</span>. I
              have 7+ years of relevant experience doing Front End with
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
              Feel like chatting? I'm always open to meet new people, so feel
              free to reach out to me on LinkedIn or via
              <a
                class="text-blue-500"
                href="mailto:aromeronavia@gmail.com"
                target="_blank"
                >email</a
              >
            </p>
          </div>
        </section>
      </div>
      <!-- <section
      id="role"
      class="w-full text-center dark:bg-black h-screen"
    ></section> -->
    </div>
  </html>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
</script>
