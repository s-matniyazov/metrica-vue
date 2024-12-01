<template>

  <div class="page-wrapper">

    <div class="page-content-tab">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-title-box">
            </div>
          </div>
        </div>

        <customers />
      </div>
    </div>
  </div>
</template>

<script setup>

import Customers from "@/components/pages/customers/Customers.vue";
</script>

<style scoped>

.page-title-box {
  padding: 10px 0
}
</style>