<template>
  <v-app>
    <v-app-bar
      app
      color="indigo darken-3"
      dark
    >
      <div class="d-flex align-center">
        <v-icon>fas fa-tv</v-icon>
        <h2 class="ml-2">Hydroponic Monitor</h2>
      </div>      

    </v-app-bar>
    
    <v-content>
      <DashBoard/>
    </v-content>
  </v-app>
</template>

<script>
import DashBoard from './components/DashBoard';

export default {
  name: 'App',

  components: {
    DashBoard
  },
  created () {
    document.title = "Hydroponic Monitor";
  },
  mounted () {
    this.$mqtt.subscribe('#')
  }
};
</script>
