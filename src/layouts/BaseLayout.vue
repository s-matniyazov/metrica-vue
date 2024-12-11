<template>
  <main class="main" id="top">
    <menu-bar/>

    <top-navbar></top-navbar>

    <router-view/>
  </main>
</template>

<script setup>
import MenuBar from "@/components/base/MenuBar.vue";
import TopNavbar from "@/components/base/TopNavbar.vue";
import DashboardContent from "@/components/pages/dashboard/DashboardContent.vue";

</script>

<style scoped>

</style>