<template>
  <transition name="modal">
    <div v-if="visible">
      <div class="app-modal" @click.prevent="$modal.hide(name)"></div>
      <div class="app-modal__inner">
        <button @click.prevent="$modal.hide(name)">Close modal</button>
        <slot :opt="opt" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModal',
  data: () => ({
    visible: false,
    opt: {}
  }),
  props: {
    name: {
      required: true,
      type: String
    }
  },
  beforeMount() {
    this.$modal.$event.$on('show', (modal, opt) => {
      if (this.name !== modal) return

      this.opt = opt
      if (!this.$listeners['before-open']) {
        this.setVisible()
        return
      }
      this.$emit('before-open', () => {
        this.setVisible()
      })
    })

    this.$modal.$event.$on('hide', modal => {
      if (this.name === modal) {
        this.setHidden()
      }
    })
  },
  methods: {
    setVisible() {
      this.visible = true
    },
    setHidden() {
      this.visible = false
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (this.visible && e.code === 'Escape') this.visible = false
    })
  }
}
</script>

<style lang="sass">
.app-modal
  position: fixed
  width: 100%
  height: 100%
  left: 0
  top: 0
  z-index: 999
  background-color: #141420

.app-modal__inner
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 999
  width: 100%
  max-width: 500px
  padding: 20px
  border-radius: 10px
  background-color: #fff

.modal-enter-active,
.modal-leave-active
  transition: all 0.3s

.modal-enter,
.modal-leave-active
  opacity: 0

</style>