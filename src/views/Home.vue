<template>
  <div>
    <AppButton :to="{ name: 'Signin' }" />
    <AppButton :to="{ name: 'Signin' }" theme="danger" size="large" />
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  name: 'Home',
  components: {
    AppButton
  }
}
</script>
