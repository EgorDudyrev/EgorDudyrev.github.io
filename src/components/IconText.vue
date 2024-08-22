<script setup>
import { computed } from 'vue'

const props = defineProps({
  url: String,
  iconName: String,
  text: String
})

const faicon = computed(() => {
  let output;
  console.log(props.iconName)
  switch (props.iconName) {
    case "github":
    case "instagram":
    case "linkedin":
    case "vuejs":
      output = ['fab', props.iconName]
      break

    case "graduation-cap":
    case "location-dot":
    case "calendar-alt":
    case "language":
    case "file-pdf":
      output = ['fas', props.iconName]
      break

    default:
      output = null
  }
  console.log(output)
  return output
})

</script>

<template>
  <a v-if="props.url" :href="props.url">
    <font-awesome-icon v-show="faicon" :icon="faicon" class="fa-icon"/> {{ props.text }}
  </a>
  <span v-else>
    <font-awesome-icon v-show="faicon" :icon="faicon" class="fa-icon"/> {{ props.text }}
  </span>
</template>

<style scoped>

</style>