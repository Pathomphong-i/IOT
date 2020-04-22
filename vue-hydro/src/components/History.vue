<template>
  <div class="container">
    {{ posts }}
    </div>
</template>

<script>
import ValuePHService from '../ValuePHService'
export default {
  name: 'History',
  data () {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async mounted() {
    this.posts = await ValuePHService.getValuePH()
  },

}
</script>