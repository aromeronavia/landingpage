<template>
  <div class="w-full" :class="`${color}-mode dark:bg-black dark:text-white`">
    <nav
      class="w-full flex justify-end px-6 py-4 h-16 bg-gray-100 dark:bg-gray-800"
    >
      <dark-mode-toggler
        :dark-mode="darkModeEnabled"
        @toggle="darkModeEnabled = !darkModeEnabled"
      />
    </nav>
    <div class="flex flex-col lg:flex-row dark:bg-background dark:text-white">
      <section
        id="about-me"
        class="w-full h-max text-center lg:border-r lg:text-left lg:px-12 py-20 pb-20 lg:pb-20 dark:border-slate-100"
      >
        <img
          class="rounded-full mx-auto border-2 border-primary dark:border-opacity-0"
          width="140"
          height="140"
          alt="image"
          src="~/assets/profilepicture.jpeg"
        />
        <h1 class="mt-6 text-2xl text-center dark:text-white">
          Alberto Romero
        </h1>
        <div class="mt-4 text-center">
          <a href="https://github.com/aromeronavia" target="_blank">
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
        <section class="mx-auto flex w-max lg:w-full">
          <ul class="mt-12 text-xl lg:text-lg text-left lg:text-left lg:w-full">
            <li>🗺️ Passionate about Software Design</li>
            <li>💻 Langs: Javascript, Python, Ruby & Rust</li>
            <li>
              🎸 Musician on
              <a
                class="underline"
                href="https://soundcloud.com/watashiwabeto"
                target="_blank"
                >SoundCloud</a
              >
            </li>
            <li>
              <a
                class="text-blue-700 font-bold underline"
                href="https://forms.gle/dqaq5SqJ76yWtAjW9"
                target="_blank"
                >🚀 Are you a Startup?</a
              >
            </li>
          </ul>
        </section>
      </section>
      <section class="px-10 lg:pr-32 lg:pl-20">
        <section
          id="summary"
          class="text-justify pt-7 pb-20 lg:pb-0 text-lg lg:text-base"
        >
          <h2 class="mb-2 text-2xl lg:mb-0 lg:text-xl">
            About Me 👋
          </h2>
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
              class="text-blue-600 font-bold underline"
              href="https://esquinacto.com"
              target="_blank"
              >Esquina CTO</a
            >
            to gather together and share common painpoints in the startup
            ecosystem, from the tech side.
          </p>
        </section>
        <section class="flex flex-col lg:grid lg:grid-cols-2">
          <article class="pb-20 lg:py-5">
            <h2 class="text-2xl text-black lg:text-xl dark:text-white">
              Most Recent Projects
            </h2>
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
          <article class="pb-10 lg:py-5 lg:ml-10">
            <h2
              class="text-2xl text-left text-black mb-1 lg:text-xl dark:text-white"
            >
              Most Revelant Experience
            </h2>
            <job
              company="Shiphero"
              companyURL="https://shiphero.com"
              title="Senior Software Engineer"
              duration="June 2021 - Current"
              summary="I did focus my first 6 months on refactoring the codebase to
              reduce legacy code and improve stability of different parts of the
              back end code base. Currently I'm working with React Native to
              build new features for our customers."
            />
            <job
              company="GoExpedi"
              companyURL="https://goexpedi.com"
              title="Engineering Manager"
              duration="April 2020 - April 2021"
              summary="Managed a team of 10 engineers and an Engineering Manager.
              Responsible for product delivery, team culture and
              continuous improvement of the overall team. Embraced a Continuous
              Delivery culture within the team, making sure we get early
              feedback and we commit healthy code into our test environments.
              Did coding 20% of my time."
            />
            <job
              company="Rever"
              companyURL="https://reverscore.com"
              title="Senior Product Engineer"
              duration="December 2018 - March 2020"
              summary="Focused on Technical Planning (decomposing
              features through our different teams) and worked on our interview
              processes (defining interview questions and metrics). My
              responsibilities were to make our Front and Back end teams deliver
              quality code by doing Code Reviews, Technical Specification
              documents, Pair Programming and doing workshops for Software
              Design and Testing. Worked with Node.js, Python, MongoDB and
              PostgreSQL.
            "
            />
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
import Job from "../components/Job.vue";

export default {
  components: { Job },
  data() {
    return {
      darkModeEnabled: false
    };
  },
  computed: {
    color() {
      this.$colorMode.preference =
        this.darkModeEnabled === "light" ? "dark" : "light";

      if (this.darkModeEnabled) {
        return "dark";
      }

      return "light";
    }
  }
};
</script>
