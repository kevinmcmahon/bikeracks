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
        <span class="bikeracks-title">Chicago Bike Rack Finder</span>      
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
        class="text-center bikeracks-text"
        cols="12"
      >
        <strong>Kevin McMahon</strong> <div class='chistar'>CHISTAR</div>  {{ new Date().getFullYear() }} 
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

<style lang="scss">
  @import '@/sass/variables.scss';
  .bikeracks-text {
    font-family: $body-title-family;
    font-weight: 500;
    text-transform: uppercase;
  }
  .bikeracks-title {
    display: block;
    font-family: $body-title-family;
    font-style: normal;    
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
  }
  .chistar {
    display: inline;
    font-family: "Big Shoulders Text";
    color: $color-star-red;
    font-variant-ligatures: discretionary-ligatures;
  }
</style>
