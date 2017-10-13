<template>
    <div class="profile">
        <div v-if="loggedIn">
            <v-layout>
                <v-flex xs12>
                    <v-btn @click.stop="which = true">Your Vaults</v-btn>
                    <v-btn @click.stop="which = false">Your Uploaded Keeps</v-btn>
                </v-flex>
            </v-layout>
            <div v-masonry transition-duration="0.3s" item-selector=".item" class="hellocards">
                <div v-if="which == true">
                    <v-layout row justify-space-around>
                        <v-flex xs12 sm6 md4 v-masonry-tile fit-width="true" class="item" v-for="item in vaults">
                            <vaultcard :item="item"></vaultcard>
                        </v-flex>
                    </v-layout>
                </div>
                <div v-if="which == false">
                    <v-layout row justify-space-around>
                        <v-flex xs12 sm6 md4 v-masonry-tile fit-width="true" class="item" v-for="item in keeps">
                            <keepview :item="item"></keepview>
                        </v-flex>
                    </v-layout>
                </div>
            </div>
        </div>
        <div v-else>
            <h1>Need to log in first</h1>
        </div>
    </div>
</template>

<script>
    import Vaultcard from './VaultCard'
    import Keepview from './Keepview'
    export default {
        name: 'profile',
        data() {
            return {
                which: true
            }
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
            },
            keeps() {
                return this.$store.state.userKeeps
            }
        },
        methods: {
        },
        mounted() {
            this.$store.dispatch('getUserVaults')
            this.$store.dispatch('getArtistProfile', this.$route.params.profileId)
            this.$store.dispatch('getUserKeeps', this.$route.params.profileId)
        },
        components: {
            Keepview,
            Vaultcard
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
        padding: 0 .5vw 0 .5vw;
        margin: 0 auto;
        /* min-width: 31.6vw; */
    }

    .hellocards {
        max-width: 95vw;
        margin: 0 auto;
    }
</style>