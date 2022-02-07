<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isVisible }"
    >
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"> Inicio </router-link>

        <router-link class="navbar-item" to="/categorias">
          Categorias
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isVisible = ref(false);

    const toggleMenu = () => {
      isVisible.value = !isVisible.value;
    };

    return {
      isVisible,
      toggleMenu,
    };
  },
};
</script>
