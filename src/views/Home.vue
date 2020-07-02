<template>
  <div class="container">
    <div class="section">
      <AppButton @click.prevent="clicked" text="Sign" title="No need to bind attr">
        Create
      </AppButton>
      <AppButton @click.prevent="clicked" text="Sign" />
      <AppButton @click.prevent="clicked" disabled text="Sign" />
      <AppButton :to="{ name: 'Signin' }" theme="danger" size="large" text="Sign" />
    </div>
    <div class="section">
      <AppInput name="test" type="password" />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppInput from '@/components/AppInput'

export default {
  name: 'Home',

  components: {
    AppButton,
    AppInput
  },

  methods: {
    clicked () {
      console.log('Yep')
    }
  }
}
</script>

<style lang="sass">
.container
  padding: 40px

.section
  margin-bottom: 30px
  padding-bottom: 10px
  border-bottom: 5px solid #000

</style>
