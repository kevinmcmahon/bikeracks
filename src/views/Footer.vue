<template>
    <v-footer padless color="primary" dark>
        <v-col class="text-center footer-text" cols="12">
            <strong>Kevin McMahon</strong> <span class='chicago-star'>✶</span>  {{ new Date().getFullYear() }} 
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
    font-family: "Big Shoulders Text";
    color: vars.$color-star-red;
    font-variant-ligatures: discretionary-ligatures;
    font-feature-settings: "dlig" 1;
  }
  .chicago-star {
    display: inline;
    color: vars.$color-star-red;
    font-size: 1.2em;
  }
</style>
