<template>
  <div>
    <v-btn color="blue-grey"
      class="white--text">
    <label for="upload">
      Upload
      <v-icon right dark>cloud_upload</v-icon>
    </label>
  </v-btn>
    <input id="upload" type="file"/>
  </div>
</template>

<style>
  input[type="file"] {
    display: none;
  }
</style>
