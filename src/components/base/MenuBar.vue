<template>
  <div class="leftbar-tab-menu">
    <div class="main-icon-menu">
      <router-link to="/home" class="logo logo-metrica d-block text-center" />
<!--      <div class="main-icon-menu-body">-->
<!--        <div class="position-reletive h-100" data-simplebar style="overflow-x: hidden;">-->
<!--          <ul class="nav nav-tabs" role="tablist" id="tab-menu">-->
<!--            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Dashboard"-->
<!--                data-bs-trigger="hover">-->
<!--              <router-link to="/home" id="dashboard-tab" class="nav-link">-->
<!--                <i class="mdi mdi-login"></i>-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Apps"-->
<!--                data-bs-trigger="hover">-->
<!--              <router-link to="/home" id="apps-tab" class="nav-link">-->
<!--                <i class="mdi mdi-login"></i>-->
<!--              </router-link>-->
<!--            </li>-->

<!--            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Uikit"-->
<!--                data-bs-trigger="hover">-->
<!--              <router-link to="/home" id="uikit-tab" class="nav-link">-->
<!--                <i class="mdi mdi-login"></i>-->
<!--              </router-link>-->
<!--            </li>-->

<!--            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Pages"-->
<!--                data-bs-trigger="hover">-->
<!--              <router-link to="/home" id="pages-tab" class="nav-link">-->
<!--                <i class="mdi mdi-login"></i>-->
<!--              </router-link>-->
<!--            </li>-->

<!--            <li class="nav-item" data-bs-toggle="tooltip" data-bs-placement="right" title="Authentication"-->
<!--                data-bs-trigger="hover">-->
<!--              <router-link to="/home" id="authentication-tab" class="nav-link">-->
<!--                <i class="mdi mdi-login"></i>-->
<!--              </router-link>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
    </div>

    <div class="main-menu-inner">
      <div class="topbar-left">
        <router-link to="/home" class="logo">
          <img src="@/assets/logo.svg" alt="logo-large" class="logo-lg logo-dark"> should be removed
        </router-link>
      </div>
      <div class="menu-body navbar-vertical tab-content">
        <div class="main-icon-menu-panel tab-panel">
          <div class="title-box">
            <h6 class="menu-title">Dashboard</h6>
          </div>

          <ul class="nav flex-column1">
            <li class="nav-item">
              <router-link class="nav-link" to="/customers">Customers</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const title = "sdfsdf";

const menuLinks = ref([]);

</script>

<style scoped>

</style>