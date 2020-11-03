<template>
  <div class="choice-container">
    <section>
      <viewer>
        <img class="choice__right-img" src="choice1.jpg" />
      </viewer>
      {{ $t("choice.value") }}
    </section>
    <section>
      <viewer>
        <img class="choice__left-img" src="choice2.jpg" />
      </viewer>
      {{ $t("choice.contamination") }}
    </section>
    <section>
      <viewer>
        <img class="choice__right-img" src="choice3.jpg" />
      </viewer>
      <div v-html="$t('choice.development')"></div>
    </section>
    <section>
      <viewer>
        <img class="choice__left-img" src="choice4.jpg" />
      </viewer>
      {{ $t("choice.environment") }}
    </section>
  </div>
</template>

<style>
.choice-container {
  font-size: 1.3rem;
  text-align: left;
  padding: 1rem 0;
}

.choice-container img {
  height: 18rem;
}

.choice__right-img {
  float: right;
  margin: 7px;
}

.choice__left-img {
  float: left;
  margin: 7px;
}
</style>
