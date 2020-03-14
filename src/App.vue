<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn
      href="/"
      text>
      <div class="d-flex align-center">
        <v-img
          alt="Chicago Flag Star"
          class="shrink mr-2"
          contain
          src="./assets/chicago-star.svg"
          transition="scale-transition"
          width="40"
        />
        <span class="display-1">Chicago Bike Rack Finder</span>      
      </div>
    </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/kevinmcmahon/bikeracks"
        target="_blank"
        rel="noopener"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer padless color="primary" dark>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Kevin McMahon</strong>
      </v-col>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({

  }),
};
</script>
