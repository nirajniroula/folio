<template>
  <v-container fluid fill-height class="fill-height d-flex justify-center">
    <v-row no-gutters class="d-flex">
      <v-col cols="12" md="6" class="d-flex justify-center px-md-8">
        <div
          class="d-flex flex-column justify-center align-center align-md-start"
        >
          <div class="text-h7 text-white">this is</div>
          <div class="text-h4 text-white">niraj niroula</div>
          <div class="text-h6 text-white">
            {front-end & mobile app developer}
          </div>
          <NetworkParticles />
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex align-center justify-center px-md-8"
      >
        <img alt="Vue logo" src="../assets/photo.jpg" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import NetworkParticles from '../components/NetworkParticles.vue'
</script>

<style scoped lang="scss">
  .text-h4 {
    animation-duration: 1s;
    animation-name: slidein;
    margin-top: 3rem;
  }

  //animation for text
  .text-h6 {
    animation-duration: 10s;
    animation-name: slidein;
    margin-top: 1rem;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
</style>
