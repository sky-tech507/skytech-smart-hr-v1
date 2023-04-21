<template>
  <div>signin</div>

  <input v-bind="username" />
  <input v-bind="email" />
  <input v-bind="password" />

  <button>Signin</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
