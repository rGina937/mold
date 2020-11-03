<template>
  <div class="about-container">
    <div class="intoduction-container">
      <section>
        <viewer>
          <img class="introduction__right-img" src="chesee.jpg" alt="" />
        </viewer>
        <div v-html="$t('champion.intoduction.cheese')"></div>
      </section>

      <section>
        <viewer>
          <img class="introduction__left-img" src="wine.jpg" alt="" />
        </viewer>
        <div v-html="$t('champion.intoduction.wine')"></div>
      </section>

      <section>
        <viewer>
          <img class="introduction__right-img" src="petri.jpg" alt="" />
        </viewer>
        <div v-html="$t('champion.intoduction.petri')"></div>
      </section>
    </div>

    <vsa-list>
      <vsa-item v-for="champion in champions" :key="champion.title">
        <vsa-heading>
          {{ $t(champion.title) }}
        </vsa-heading>

        <vsa-content>
          <div v-html="$t(champion.content)"></div>
        </vsa-content>
      </vsa-item>
    </vsa-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      champions: [
        {
          title: "champion.list.penicillium_name",
          content: "champion.list.penicillium",
        },
        {
          title: "champion.list.aspergillus_name",
          content: "champion.list.aspergillus",
        },
        {
          title: "champion.list.yeast_name",
          content: "champion.list.yeast",
        },
        {
          title: "champion.list.noble_name",
          content: "champion.list.noble",
        },
        {
          title: "champion.list.grape_name",
          content: "champion.list.grape",
        },
      ],
    };
  },
};
</script>

<style>
.intoduction-container img {
  height: 15rem;
}
.about-container {
  font-family: "Jost", sans-serif;
  font-size: 1.3rem;
}

.introduction__right-img {
  float: right;
  margin: 7px;
}

.introduction__left-img {
  float: left;
  margin: 7px;
}
</style>
