<template>
  <li class="nav-item">
    <component
        :is="tag"
        class="nav-link"
        v-bind="$attrs"
    >
      <slot>
        <i v-if="icon" :class="icon"></i>
        <p>{{ name }}</p>
      </slot>
    </component>
  </li>
</template>

<script setup>

const props = defineProps({
  icon: {
    type: String,
  },
  tag: {
    type: String,
    default: "router-link",
  },
})
</script>

<style scoped>

</style>