<template>
  <v-app light>
    <v-toolbar fixed>
      <router-link :to="'/'">
        <v-btn icon light>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <div v-show="loggedIn">
        <router-link :to="`/profile/${info._id}`">
          <v-btn icon light>
            <v-icon>perm_identity</v-icon>
          </v-btn>
        </router-link>
      </div>
      <v-btn icon light @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon light @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer">
      <login></login>
    </v-navigation-drawer>
    <v-footer :fixed="fixed">
      <span>&copy; 2017 Trever Johnston</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Login from './components/Login'
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Keepr'
      }
    },
    methods: {
      log() {
        console.log('youre clicking el button')
      }
    },
    computed: {
      info() {
        return this.$store.state.userInfo
      },
      loggedIn(){
        return this.$store.state.loggedIn
      }
    },
    components: {
      Login
    },
    mounted() {
      this.$store.dispatch('getAuth')
    }
  }

</script>
<style>
  a {
    text-decoration: none;
  }
</style>