<template>
    <div class="profile">
        <div v-if="loggedIn">
            <div v-masonry transition-duration="0.3s" item-selector=".item" class="hellocards">
                <v-layout row justify-space-around>
                    <v-flex xs12 sm4 md3 lg2 v-masonry-tile fit-width="true" class="item" v-for="item in vaults">
                        <vaultcard :item="item"></vaultcard>
                    </v-flex>
                </v-layout>
            </div>
        </div>
        <div v-else>
            <h1>Need to log in first</h1>
        </div>
    </div>
</template>

<script>
    import Vaultcard from './VaultCard'
    export default {
        name: 'profile',
        data() {
            return {
            }
        },
        components: {
        },
        computed: {
            info() {
                return this.$store.state.userInfo
            },
            vaults() {
                return this.$store.state.profileVaults
            },
            loggedIn() {
                return this.$store.state.loggedIn
            }
        },
        methods: {
        },
        mounted() {
            this.$store.dispatch('getUserVaults')
            this.$store.dispatch('getArtistProfile', this.$route.params.profileId)
        },
        components:{
            Vaultcard
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.item {
    padding: 0 .5vw 0 .5vw;
    margin: 0 auto;
  }

  .hellocards {
    max-width: 95vw;
    margin: 0 auto;
  }
</style>