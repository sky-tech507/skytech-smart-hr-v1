<template>
  <div>signin</div>

  <input v-bind="username" />

  <input v-bind="password" />

  <button>Signin</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
