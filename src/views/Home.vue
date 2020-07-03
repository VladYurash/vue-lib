<template>
  <div class="container">
<!--    <div class="section">-->
<!--      <AppButton @click.prevent="clicked" text="Sign" title="No need to bind attr">-->
<!--        Create-->
<!--      </AppButton>-->
<!--      <AppButton @click.prevent="clicked" text="Sign" />-->
<!--      <AppButton @click.prevent="clicked" disabled text="Sign" />-->
<!--      <AppButton :to="{ name: 'Signin' }" theme="danger" size="large" text="Sign" />-->
<!--    </div>-->
<!--    <div class="section">-->
<!--      <AppInput name="test" placeholder="example" />-->
<!--    </div>-->
<!--    <div class="section">-->
<!--      <AppLabel labelFor="email">-->
<!--        Enter Your email-->
<!--      </AppLabel>-->
<!--      <AppInput name="email" placeholder="example" />-->
<!--    </div>-->
<!--    <div class="section">-->
<!--      <AppTextarea name="bio" v-model="form.bio" />-->
<!--    </div>-->

    <SigninModal />
    <button class="btn btn-primary" @click.prevent="$modal.show('signin')">Open modal</button>
  </div>
</template>

<script>
// import AppButton from '@/components/AppButton'
// import AppInput from '@/components/AppInput'
// import AppLabel from '@/components/AppLabel'
// import AppTextarea from '@/components/AppTextarea'
// import AppModal from '@/components/AppModal'
import SigninModal from '@/components/modals/SigninModal'

export default {
  name: 'Home',
  data: () => ({
    form: {
      email: 'test@test.com',
      bio: ''
    }
  }),

  components: {
    // AppLabel,
    // AppButton,
    // AppInput,
    // AppTextarea,
    //AppModal,
    SigninModal
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
