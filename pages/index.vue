<template>
  <div
    class="w-full flex justify-center"
    :class="`${color}-mode dark:bg-black dark:text-white`"
  >
    <div class="flex flex-col dark:bg-background dark:text-white">
      <section
        id="about-me"
        class="w-full h-max text-center py-10 dark:border-slate-100"
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
        <section class="mx-auto flex w-max">
          <ul class="mt-12 text-xl text-left">
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
      <section class="px-20 flex-col lg:w-1/2 lg:mx-auto ">
        <section id="summary" class="mb-10 text-justify text-lg lg:text-base">
          <h2 class="mb-2 text-2xl font-black underline">
            About Me 👋
          </h2>
          <p class="text-xl leading-8">
            I've been doing software engineering for 7+ years in corps and
            startups at Mexico and Silicon Valley. I have relevant experience as
            Engineering Lead and Engineering Manager across different startups.
            I like to ship things and iterate fast. I have helped companies in
            Mexico with technical mentoring and talent referral. I really enjoy
            working with the community, so I created a group of Technical
            Leaders called
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
        <section class="flex flex-col">
          <article class="pb-10 lg:py-5">
            <h2 class="text-2xl font-black underline dark:text-white">
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
          <article class="pb-10">
            <h2
              class="text-2xl text-left font-black mb-1 underline dark:text-white"
            >
              Most Relevant Experience
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
      darkModeEnabled: true
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
