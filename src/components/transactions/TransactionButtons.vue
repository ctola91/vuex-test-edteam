<template>
  <div class="buttons are-large">
    <router-link to="/transactions?isGasto=false" class="button is-primary"
      >Ingreso</router-link
    >
    <router-link to="/transactions?isGasto=true" class="button is-danger"
      >Gasto</router-link
    >
  </div>
</template>
