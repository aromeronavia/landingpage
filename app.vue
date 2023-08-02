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
              , and lately building with Rust.
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
  </body>
</template>
<script setup lang="ts">
const colorMode = useColorMode();
const checkbox = ref(colorMode.preference === "dark" ? true : false);

const toggleCheckbox = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
  checkbox.value = !checkbox;
};
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

