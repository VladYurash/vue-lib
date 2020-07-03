<template>
  <div class="app-modal" v-if="visible">
    <div class="app-modal__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  data: () => ({
    visible: false
  }),
  props: {
    name: {
      required: true,
      type: String
    }
  },
  mounted() {
    this.$modal.$event.$on('show', (modal) => {
      if (this.name === modal) {
        this.visible = true
      }
    })
  }
}
</script>

<style lang="sass">
.app-modal
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  width: 100%
  height: 100%
  left: 0
  top: 0
  z-index: 999
  background-color: #141420

.app-modal__inner
  flex-grow: 1
  max-width: 500px
  padding: 20px
  border-radius: 10px
  background-color: #fff
</style>