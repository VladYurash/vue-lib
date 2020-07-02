<template>
  <input
    :type="type"
    :name="name"
    :id="name"
    class="form-control"
  >
</template>

<script>
  export default {
    name: 'AppInput',
    props: {
      name:{
        required: true,
        type: String
      },
      type:{
        required: false,
        type: String,
        default: 'text'
      }
    }
  }
</script>
