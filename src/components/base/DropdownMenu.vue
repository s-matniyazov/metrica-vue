<script setup>
import {ref} from "vue";

const visible = ref(true);
const model = defineModel({type: Object, default: null});
defineProps({
  list: Array,
  menuTitle: String
});

function toggle() {
  visible.value = !visible.value;
}

function select(option) {
  model.value = option;
}
</script>

<template>
  <div class="nav-link dropdown-indicator" @click="toggle()">
    <div class="d-flex align-items-center">
      <div class="dropdown-indicator-icon-wrapper">
        <span :class="`fa fa-caret-${visible ? 'right' : 'down'}`"></span>
      </div>
      <span class="nav-link-icon"></span>
      <span class="nav-link-text">{{ menuTitle }}</span>
    </div>
  </div>
  <div >
    <ul :style="visible && 'display: none;'" class="nav parent">
      <li v-for="item in list">
        <router-link :to="item.link" @click="select(item.link)" class="nav-link d-flex align-items-center"
             :style="model === item.link && 'color: blue'">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>