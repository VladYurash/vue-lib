<template>
  <label :for="labelFor">
    <slot/>
  </label>
</template>

<script>
  export default {
    name: 'AppLabel',
    props: {
      labelFor: {
        required: true,
        type: String
      }
    }
  }
</script>

<style lang="sass">
label
  user-select: none
</style>