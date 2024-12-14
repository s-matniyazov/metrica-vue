<template>
  <nav class="navbar navbar-vertical navbar-expand-lg">
    {{routerStore.currentRouter}}
    <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
      <div class="navbar-vertical-content">
        <ul class="navbar-nav flex-column" id="navbarVerticalNav">
          <li class="nav-item">

            <div class="nav-item-wrapper">
              <DropdownMenu v-model="routerStore.currentRouter" menu-title="Home" :list="homeLinks"/>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="navbar-vertical-footer">
      <button
          class="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center"><span
          class="uil uil-left-arrow-to-left fs-8"></span><span class="uil uil-arrow-from-right fs-8"></span><span
          class="navbar-vertical-footer-text ms-2">Collapsed View</span></button>
    </div>
  </nav>
</template>

<script setup>
import {ref} from "vue";
import DropdownMenu from "@/components/base/DropdownMenu.vue";
import {useRouterStore} from "@/stores/router-store.js";

const routerStore = useRouterStore();

const homeLinks = ref([
  {name: 'E commerce', link: 'dashboard/e-commerce'},
  {name: 'Project management', link: 'dashboard/project-management'},
  {name: 'Travel agency', link: 'dashboard/travel-agency'},
  {name: 'Social feed', link: 'dashboard/social-feed'},
]);
const eCommerceLinks = ref([
  {name: 'Admin', link: ''},
]);

</script>

<style scoped>

</style>