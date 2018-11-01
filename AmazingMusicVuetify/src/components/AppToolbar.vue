<template>
  <div>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
          <v-list class="pa-1">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="../assets/logo.png">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>User</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-list class="pt-0" dense>
            <v-divider></v-divider>
              <router-link style="text-decoration:none;" to="/">
              <v-list-tile
                v-on:click=""
              >
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                  </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>Home</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </router-link>
          </v-list>

          <v-list class="pt-0" dense>
            <router-link style="text-decoration:none;" to="/upload">
            <v-list-tile
              v-on:click=""
            >
              <v-list-tile-action>
                <v-icon>cloud_upload</v-icon>
                </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Upload</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
          </router-link>
          </v-list>

          <v-list class="pt-0" dense>
            <router-link style="text-decoration:none;" to="/edit">
            <v-list-tile
              v-on:click=""
            >
              <v-list-tile-action>
                <v-icon>edit</v-icon>
                </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Edit</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
          </router-link>
          </v-list>

          <v-list class="pt-0" dense>
            <router-link style="text-decoration:none;" to="/settings">
            <v-list-tile
              v-on:click=""
            >
              <v-list-tile-action>
                <v-icon>settings</v-icon>
                </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
          </router-link>
          </v-list>

        </v-navigation-drawer>
  <v-toolbar color="blue" dark>
    <v-toolbar-side-icon   v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>AmazingMusic</v-toolbar-title>
    <v-spacer></v-spacer>
      <router-link style="text-decoration:none;" to="/upload">
      <v-btn flat>Upload</v-btn>
    </router-link>
    <router-link style="text-decoration:none;" to="/edit">
      <v-btn flat>Edit</v-btn>
    </router-link>
    <v-btn flat>Logout</v-btn>
  </v-toolbar>
</div>
</template>


<script>
  export default {
    data () {
      return {
        drawer: null,
        mini: false,
        right: null
      }
    }
  }
</script>
