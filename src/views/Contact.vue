<template>
  <div class="main-container">
    <div class="face-img-container">
      <viewer>
        <img src="contact2.jpg" alt="" />
      </viewer>
    </div>
    <div class="info-container">
      <div class="info">
        <div class="name-container">
          {{ $t("contact.my_name") }}
        </div>
        <div class="coordinat-container">
          <div
            class="telephone-container"
            v-html="$t('contact.telephone')"
          ></div>
          <div class="email-container">
            <b> Email: </b> bro.of.the.winter@gmail.com
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main-container {
  margin: 16px;
  font-family: "Jost", sans-serif;
  font-size: 2.5rem;
  text-align: left;
  padding: 1rem 0;
  display: flex;
}

.face-img-container img {
  height: 18rem;
  float: left;
  margin: 7px 7px 7px 0;
}

.info {
  display: inline-block;
}

.info-container {
  flex-grow: 1;
  text-align: center;
  justify-content: center;
}

.name-container {
  text-align: center;
}

.coordinat-container {
  font-size: 2rem;
  flex-direction: column;
}

.telephone-container {
  padding-bottom: 0.5rem;
}
</style>
