<template>
  <AppModal name="signin" @before-open="loadCourses">
    <template >
      {{ courses }}
    </template>
  </AppModal>
</template>

<script>
import axios from 'axios'
import AppModal from '@/components/AppModal'

export default {
  name: 'SigninModal',
  components: {AppModal},
  data: () => ({
    courses: []
  }),
  methods: {
    signIn() {
      this.$modal.hide('signin')
    },
    async loadCourses(done) {
      let res = await axios.get('https://api.codecourse.com/api/courses')
      this.courses = res.data
      done()
    }
  }
}
</script>

<style>

</style>