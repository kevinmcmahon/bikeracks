<template>
    <v-footer padless color="primary" dark>
        <v-col class="text-center footer-text" cols="12">
            <strong>Kevin McMahon</strong> <div class='chistar'>CHISTAR</div>  {{ new Date().getFullYear() }} 
        </v-col>
    </v-footer>
</template>

<style lang="scss" scoped>
  @use '@/sass/variables.scss' as vars;
  .footer-text {
    font-family: vars.$body-title-family;
    font-weight: 500;
    text-transform: uppercase;
  }
  .chistar {
    display: inline;
    font-family: "Big Shoulders Text", sans-serif;
    color: vars.$color-star-red;
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: "dlig" 1;
    font-weight: 500;
  }
</style>
