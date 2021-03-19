<style scoped>
</style>

<template>
  <div class="home">
    <v-container class="">
      <v-layout row wrap class="" justify-space-between>
        <v-flex xs12 md6>
          <v-btn outline block class="">1</v-btn>
        </v-flex>
        
        <v-flex xs12 md1>
          <v-btn outline block class="">2</v-btn>
        </v-flex>
        <v-flex xs12 md1>
          <v-btn outline block class="">3</v-btn>
        </v-flex>
        <v-flex xs12 md4>
          <v-btn outline block class="">4</v-btn>
        </v-flex>
        <v-flex xs12 md3 class="">
          <v-btn outline block class="">5</v-btn>
        </v-flex>

        <v-flex xs12 md3 class="">
          <v-btn outline block class="">6</v-btn>
        </v-flex>

      </v-layout>

      <v-layout row wrap justify-end>
          <v-flex xs6 md2>
              <v-btn outlined block>7</v-btn>
          </v-flex>
      </v-layout>
      
    </v-container>
    <v-btn class="float-right mr-10">Hello</v-btn>
  </div>
</template>

<script>
export default {

}
</script>
