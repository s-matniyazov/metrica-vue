<script setup>
import {onMounted, ref} from "vue";

// Variables
const show = ref(true)
const targetElement = ref();

// Functions
function showDrop (){
  show.value = !show.value;
}

function handleClickOutside(event) {
  if (!targetElement.value.contains(event.target)) {
    show.value = false;
  }
}

// hooks
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
})
</script>

<template>
  <div ref="targetElement">
    <a class="dropdown-toggle dropdown-caret-none d-inline-block" role="button" @click="showDrop">
      <slot name="header">

      </slot>
    </a>

    <div class="dropdown-menu avatar-dropdown-menu p-0 overflow-hidden" :class="show && 'show'" style="width: 320px;">
      <slot name="content">
      </slot>
    </div>
  </div>
</template>

<style scoped>

</style>