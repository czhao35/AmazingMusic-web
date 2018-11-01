<template>
  <div style="margin: 100px;">
  <v-layout>
    <v-flex>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Song</span><br>
            <span>Song Info</span>
          </div>
        </v-card-title>

        <div style="padding: 20px;">
          <v-flex xs12>
          <v-slider
            v-model="slider"
            label="Label"
          ></v-slider>
        </v-flex>
        <v-flex xs12>
        <v-slider
          v-model="slider"
          label="Label"
        ></v-slider>
      </v-flex>
      <v-flex xs12>
        <v-slider
          v-model="slider"
          label="Label"
        ></v-slider>
      </v-flex>

      </div>
      </v-card>
    </v-flex>
  </v-layout>
    </div>
</template>
