<template>
  <body class="dark:bg-gray-900 w-full h-[100vh]">
    <div
      class="dark:bg-gray-900 w-full h-max flex justify-center dark:text-white"
    >
      <div class="flex flex-col dark:text-white w-full h-full items-center">
        <label class="switch mt-4 mr-8 text-right self-end">
          <input
            type="checkbox"
            @click="toggleCheckbox"
            :checked="colorMode.preference === 'dark'"
          />
          <div class="slider round"></div>
        </label>
        <section
          id="about-me"
          class="w-full mt-8 mb-8 h-max text-center dark:border-slate-100 md:w-2/3 md:grid md:px-0 2xl:w-1/3 lg:w-1/2"
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
                href="https://generalistengineer.substack.com/?utm_source=aromeronavia.com"
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
              class="py-2 md:py-1 md:px-3 bg-violet-500 rounded-3xl text-white dark:bg-violet-700"
            >
              <a href="https://slides.com/aromeronavia" target="_blank">
                📣 Talks
              </a>
            </li>
            <li
              class="py-2 md:py-1 md:px-3 bg-gray-800 rounded-3xl text-white dark:bg-gray-700"
            >
              <a href="https://codepen.io/setzer777" target="_blank">
                ✒️ Codepen
              </a>
            </li>
          </ul>
        </section>
        <section
          id="summary"
          class="w-full px-5 mt-8 flex flex-col text-lg md:w-2/3 mx-auto md:px-0 2xl:w-1/3 lg:w-1/2"
        >
          <div class="mb-10">
            <p>
              Hey! My name is Alberto Romero, I'm a software engineer who loves
              working at startups with small and cohesive engineering teams. I
              also like building
              <a
                class="text-violet-400 underline"
                href="https://albertoromero.notion.site/Alberto-Romero-Software-Engineer-6cfdf313e02b4f14a365ed01c5a0094d?pvs=4"
                >fun side projects</a
              >
              on my free time. I spent the majority of my 2023 building with
              Rust in production for
              <a
                class="text-orange-500 underline"
                href="https://neurelo.com?utm_source=aromeronavia.com"
              >
                Neurelo</a
              >
              and my 2024
              <a
                class="text-blue-500"
                href="https://generalistengineer.substack.com/p/la-importancia-del-developer-experience"
                >improving the developer experience</a
              >
              of a Canadian Fintech called
              <a
                href="https://trykeep.com?utm_source=aromeronavia.com"
                class="text-blue-500 underline"
                >Keep</a
              >.
            </p>

            <p class="mt-4">
              As of 2025, I have 9 years of relevant experience doing Front End
              with my current stack being
              <span class="text-red-500 dark:text-red-300"
                >React.js, Tailwind, Radix, Apollo</span
              >
              and Back End with
              <span class="text-green-500">
                Typescript (Nest.js, Prisma, GraphQL)</span
              >
              and
              <span class="text-blue-500">
                Python (Django, Flask, SQLAlchemy)
              </span>
              . I also learned a couple of new tricks with
              <span class="text-gray-500">Terraform</span> last year.
            </p>
            <p class="mt-4">
              Feel like chatting? I'm always open to meet new people, so feel
              free to reach out to me on
              <a
                class="text-blue-500 underline"
                href="https://linkedin.com/in/albertoromnav?utm_source=aromeronavia.com"
                >LinkedIn</a
              >
              or via
              <a
                class="text-blue-500 underline"
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
  </body>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const colorMode = useColorMode();
const checkbox = ref(colorMode.preference === "dark" ? true : false);

const toggleCheckbox = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
  checkbox.value = !checkbox;
};

onMounted(() => {
  colorMode.preference = "dark";
});
</script>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #c3c3c3;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #101010;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

