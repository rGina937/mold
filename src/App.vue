<template>
  <div class="main">
    <header>
      <div class="text-container">
        <div class="name-container">
          {{ $t("app.header.name") }}
        </div>
        <div class="slogan-container">
          {{ $t("app.header.slogan") }}
        </div>
        <div class="icon-container">
          <img src="united-kingdom.svg" @click="changeLang('en')" />
          <img src="russia.svg" @click="changeLang('ru')" />
          <img src="germany.svg" @click="changeLang('ger')" />
          <img src="spain.svg" @click="changeLang('es')" />
        </div>
      </div>

      <div class="logo-container">
        <img src="CtBS8XBXEAA6EOu.png" alt="" />
      </div>
    </header>

    <nav>
      <router-link to="/about"> {{ $t("app.nav.about") }} </router-link>
      <router-link to="/champion"> {{ $t("app.nav.champion") }} </router-link>
      <router-link to="/choice"> {{ $t("app.nav.choice") }} </router-link>
      <router-link to="/product"> {{ $t("app.nav.product") }} </router-link>
      <router-link to="/photo"> {{ $t("app.nav.photo") }} </router-link>
      <router-link to="/contact"> {{ $t("app.nav.contact") }} </router-link>
    </nav>

    <div class="main-router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import i18n from "./i18n";

export default {
  name: "App",
  methods: {
    changeLang(lang) {
      i18n.locale = lang;
    },
  },
};
</script>

<style>
body {
  padding: 0 0.5rem;
  max-width: 1200px;
  margin: auto;
  font-family: "Jost", sans-serif;
}

dl.vsa-list {
  --vsa-max-width: none;
  --vsa-highlight-color: #8cbb3d;
}

a {
  text-decoration: none;
}

@import url("https://fonts.googleapis.com/css2?family=Kurale&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

.text-container {
  flex-direction: row;
  background-color: #fdf5e6;
  padding: 1rem;
  border-radius: 10%;
}

nav {
  background-color: #c5d9a3;
  padding: 1rem;
  display: flex;
  font-size: 1.5rem;
  justify-content: space-around;
}

nav a {
  margin-right: 1rem;
  font-family: "Kurale", serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

nav a:last-child {
  margin-right: 0;
}

nav a.router-link-active {
  color: #800000;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Kurale", serif;
  padding: 1rem 0;
}

.logo-container img {
  height: 20rem;
}

.name-container {
  font-size: 3.5rem;
}

.slogan-container {
  font-size: 2.5rem;
}

.icon-container img {
  height: 3rem;
  margin: 0.3rem;
  cursor: pointer;
}

.viewer-container.viewer-backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
