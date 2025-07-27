<template>
    <v-footer color="primary" dark class="footer-compact" app absolute>
        <div class="text-center footer-text w-100">
            <strong>Kevin McMahon</strong> <div class='chistar'>CHISTAR</div>  {{ new Date().getFullYear() }} 
        </div>
    </v-footer>
</template>

<style lang="scss" scoped>
  @use '@/sass/variables.scss' as vars;
  
  .footer-compact {
    height: 64px !important;
    min-height: 64px !important;
    max-height: 64px !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
  }
  
  .footer-text {
    font-family: vars.$body-title-family;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 64px;
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
