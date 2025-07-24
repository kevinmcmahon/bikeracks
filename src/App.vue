<template>
  <v-app>
    <v-app-bar
      color="primary"
      theme="dark"
    >
    <v-btn
      href="/"
      variant="text">
      <div class="d-flex align-center">
        <v-img
          alt="Chicago Flag Star"
          class="shrink mr-2"
          src="./assets/chicago-star.svg"
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
        variant="text"
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
  import Footer from "@/views/Footer";
  export default {
    name: 'App',
    components: {
      Footer
    },
    data: () => ({

    }),
  };
</script>

<style lang="scss">
  @import '@/sass/variables.scss';
  .bikeracks-title {
    display: block;
    font-family: $body-title-family;
    font-style: normal;    
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
  }
</style>
