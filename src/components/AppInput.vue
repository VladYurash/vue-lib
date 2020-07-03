<template>
  <div>
    <input
      v-bind="$attrs"
      :type="inputType"
      :name="name"
      :id="name"
      class="form-control"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <a href="#" v-if="type === 'password'" @click.prevent="passVisible = !passVisible">
      {{ passVisible ? 'Hide' : 'Show' }} password
    </a>
  </div>
</template>

<script>
  export default {
    name: 'AppInput',
    data() {
      return {
        passVisible: false,
      }
    },
    props: {
      name:{
        required: true,
        type: String
      },
      type:{
        required: false,
        type: String,
        default: 'text'
      },
      value: {
        required: false,
        type: String,
        default: ''
      }
    },
    computed: {
      inputType() {
        return this.passVisible ? 'text' : this.type
      }
    },
    mounted() {
    }
  }
</script>
