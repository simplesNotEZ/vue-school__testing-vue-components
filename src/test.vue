<template>
  <div class="smelly">
    <h1 class="smellyFace">Hello {{ value }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "Test"
    }
  },
  data() {
    return {
      marvelMovies: ["Iron Man", "Avengers", "Infitinity War"]
    };
  }
};
</script>
