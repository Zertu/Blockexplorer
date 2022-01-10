<template>
  <img class="logo" src="../assets/logo.svg">
  <h2 style="text-align: center">
    Block Explorer
  </h2>
  <SearchBar />
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue'
</script>

<style>
.logo {
  margin: auto;
  width: 200px;
  height: 200px;
  display: block;
}
</style>
