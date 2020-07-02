<template>
  <router-link
    class="btn"
    @click.native="clicked"
    :to="to"
    :title="formattedTitle"
    :disabled="disabled"
    :class="[
      themes[theme], sizes[size], {'disabled': disabled}
    ]"
  >
    <slot>
      {{ text }}
    </slot>
  </router-link>
</template>

<script>
  export default {
    name: 'AppButton',
    data: () => ({
      themes: {
        primary: 'btn-primary',
        danger: 'btn-danger'
      },
      sizes: {
        normal: '',
        large: 'btn-lg'
      }
    }),
    props: {
      title: {
        required: false,
        type: String,
        default: ''
      },
      text: {
        required: false,
        type: String,
        default: ''
      },
      theme: {
        required: false,
        type: String,
        default: 'primary'
      },
      size: {
        required: false,
        type: String,
        default: 'normal'
      },
      to: {
        required: false,
        type: Object,
        default: () => ({name: 'Home'})
      },
      disabled: {
        required: false,
        type: Boolean,
        default: false
      }
    },
    computed: {
      formattedTitle() {
        return `${this.title} except cases when you need to deal with it`
      }
    },
    methods: {
      clicked(e) {
        if (this.disabled) return
        this.$emit('click', e)
      }
    }
  }
</script>
