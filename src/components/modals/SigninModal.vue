<template>
  <AppModal name="signin">
    <template v-slot="{ opt }">
      Sign in {{ opt.name }}
    </template>
  </AppModal>
</template>

<script>
import AppModal from '@/components/AppModal'

export default {
  name: 'SigninModal',
  components: {AppModal}
}
</script>

<style>

</style>