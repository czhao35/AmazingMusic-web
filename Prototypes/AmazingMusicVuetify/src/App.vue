<template>
  <v-app id="inspire">
    <v-navigation-drawer
          v-model="drawer"
          :mini-variant="mini"
          fixed
          app
        >
          <v-list class="pa-1">
            <v-list-tile v-if="mini" v-on:click.stop="mini = !mini">
              <v-list-tile-action>
                <v-icon>chevron_right</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar tag="div">
              <v-list-tile-avatar>
                <img src="./assets/logo.png">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>User</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon v-on:click.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
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
    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      height="auto"
      color="blue"
      fixed
    >
        <v-flex
          primary
          lighten-2
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;2018 — <strong>AmazingMusic</strong>
        </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        mini: true,
        right: null
      }
    }
  }
</script>
