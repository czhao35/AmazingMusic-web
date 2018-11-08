<template>
  <div style="margin: 100px;">
    <v-layout>

        <v-card>
          <v-img
            class="white--text"
            height="400px"
            width="400px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Song</span><br>
              <span>Song Info</span>
            </div>
          </v-card-title>
        </v-card>


          <v-flex style="margin: 50px; padding-right: 300px;">
          <v-slider
            v-model="slider"
            label="Pitch"
          ></v-slider>
          <v-slider
            v-model="slider"
            label="Speed"
          ></v-slider>
        </v-flex>

    </v-layout>
  </div>
</template>
