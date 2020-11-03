<template>
  <div class="galery">
    <viewer :options="options">
      <img
        v-for="image in images"
        :src="image.src"
        :key="image.src"
        :alt="image.title"
      />
    </viewer>
  </div>
</template>
<script>
export default {
  data: () => ({
    images: [
      { src: "as.terreus.jpg", title: "Aspergillus terreus" },
      { src: "asp.flavus.jpg", title: "Aspergillus flavus" },
      { src: "asp.fumigatus.jpg", title: "Aspergillus fumigatus" },
      { src: "asp.niger.jpg", title: "Aspergillus niger" },
      { src: "Asp.parasiticus.jpg", title: "Aspergillus parasiticus" },
      { src: "c.albicans.jpg", title: "Candida albicans" },
      { src: "can.albicans.jpg", title: "Candida albicans" },
      { src: "ceph.gramineum.jpg", title: "Cephalosporium gramineum" },
      { src: "fus.oxysporum.jpg", title: "Fusarium oxysporum" },
      { src: "paec.lilacinus.jpg", title: "Paecilomyces lilacinus" },
      { src: "pen.notatum.jpg", title: "Penicillium notatum" },
      { src: "Pen.roquefórti.jpg", title: "Penicillium roquefórti" },
      { src: "Rh.stolonifer.jpg", title: "Rhizopus stolonifer" },
      { src: "Tr.aureoviride.jpg", title: "Trichoderma aureoviride" },
      { src: "Tr.gelatinosum.jpg", title: "Trichoderma gelatinosum" },
    ],
    options: {
      toolbar: false,
      button: false,
    },
  }),
};
</script>

<style>
.galery {
  padding: 1rem;
  text-align: center;
}

.galery img {
  height: 15rem;
  margin: 0.5rem;
}

.viewer-title.viewer-title {
  font-size: 2rem;
  font-style: italic;
}
</style>
