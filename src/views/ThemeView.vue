<template>
  <div>{{ email }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      email: "aaa",
      password: "",
    };
  },

  setup() {
    return {};
  },
});
</script>

<style scoped></style>
