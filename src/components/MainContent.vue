<script setup>
import {Octokit} from "octokit";
import {ref} from "vue";

const octokit = new Octokit();
const repos = ref([]);

if (repos.value.length === 0) {
  octokit.rest.repos.listForUser({ username: 'l0drex' }).then(response => {
    repos.value = response.data.filter(r => !r.archived);
  });
}

function personal(repos) {
  return repos.filter(r => !r.fork);
}

function helpedOut(repos) {
  return repos.filter(r => r.fork);
}
</script>

<template>
  <main>
    <div id="welcome">
      <h1>Welcome to my Homepage!</h1>
      <p>I'm a computer science student from Dresden, Germany.<br>
        I love to explore technology, so I have started a lot of cool projects in my free time.</p>
      <p>Check them out below!</p>
      <a href="#Projects">
        <i data-feather="chevrons-down"/>
      </a>
    </div>

    <article>
      <h1 id="Projects"><i data-feather="code"></i> Projects</h1>
      <p>
        As you can see from my <a href="https://github.com/l0drex?tab=repositories">GitHub repositories</a>,
        I love to try out a lot of languages and frameworks:
      </p>
      <section class="card-row" id="personal-projects">
        <CardItem v-for="repo in personal(repos)" :key="repo.id" :title="repo.name"
                  :description="repo.description"
                  :link="repo.html_url"
                  :tags="[repo.language]"/>
      </section>

      <p>
        I also help with other open source projects:
      </p>
      <section class="card-row">
        <CardItem v-for="repo in helpedOut(repos)" :key="repo.id" :title="repo.name"
                  :description="repo.description"
                  :link="repo.html_url"
                  :tags="[repo.language]"/>
      </section>
    </article>

    <article>
      <h1 id="Photography"><i data-feather="camera"/> Photography</h1>
      <p>
        In my free time, I love hiking and enjoy the landscape nature created.
        Using this opportunity, I have made some photographs you can use freely from the internet!
      </p>
      <section class="card-row">
        <CardItem title="Unsplash"
                  description="Checkout my profile on Unsplash and download anything you like for free! Please mention my name, would be greatly appreciated."
                  link="https://unsplash.com/@lh4tography"/>
        <CardItem title="500px"
                  description="Here you can find more details about camera, lenses and settings I use."
                  link="https://500px.com/p/LH_4tography" />
        <CardItem title="Pixelfed"
                  description="You can follow me in the fediverse through Mastodon, Pixelfed or other clients! Most pictures are licensed under CC BY"
                  link="https://portfolio.pixelfed.social/lh4tography" />
      </section>
    </article>

    <article>
      <h1 id="Contact"><i data-feather="users"></i> Contact</h1>
      <ul class="contacts">
        <li><i data-feather="mail" />
          <a href="mailto:hoffmann_lorenz@proton.me">hoffmann_lorenz@protonmail.com</a></li>
      </ul>
    </article>
  </main>
</template>

<script>
import CardItem from "@/components/CardItem";

export default {
  name: "MainContent",
  components: {CardItem}
}
</script>

<style scoped>
main {
  flex-grow: 1;
}

article {
  margin: 2rem 0;
}

article > * {
  margin-left: max(1rem, 10%);
  margin-right: max(1rem, 10%);
}

#welcome {
  text-align: center;
  padding: 3rem;
}

.card-row {
  display: flex;
  overflow-x: scroll;
  gap: 1rem;
  margin-bottom: 4rem;
}

.contacts {
  list-style: none;
}

/* elements with data-feather attributes get replaced with SVGs classed as feather */
/*noinspection CssUnusedSymbol*/
.contacts .feather {
  margin-right: .5em;
}
</style>