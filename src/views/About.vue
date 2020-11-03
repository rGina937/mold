<template>
  <div class="about-container">
    <section>
      <viewer>
        <img class="about__right-img" src="about1.jpg" alt="" />
      </viewer>
      <div v-html="$t('about.intro')"></div>
    </section>
    <section>
      <viewer>
        <img class="about__left-img" src="about2.jpg" alt="" />
      </viewer>
      {{ $t("about.structure") }}
    </section>
    <section>
      <viewer>
        <img class="about__right-img" src="about3.jpg" alt="" />
      </viewer>
      {{ $t("about.reproduction") }}
    </section>
    <section>
      <viewer>
        <img class="about__left-img" src="about4.jpg" alt="" />
      </viewer>
      {{ $t("about.diversity") }}
    </section>
  </div>
</template>

<style>
.about-container {
  font-family: "Jost", sans-serif;
  font-size: 1.3rem;
  text-align: left;
  padding: 1rem 0;
}

.about__right-img {
  height: 15rem;
  float: right;
  margin: 7px;
}

.about__left-img {
  height: 15rem;
  float: left;
  margin: 7px;
}
</style>
