<template>
    <div class="vaultcard">
        <v-card hover @click="setVault(item)">
            <div v-if="item.url !== undefined">
                <img :src="item.url" class="media">
            </div>
            <div v-else>
                <img src="http://via.placeholder.com/350x250" class="media">
            </div>
            <v-card-title>
                <div>
                    <p class="grey--text">{{item.title}}</p>
                </div>
            </v-card-title>
            <v-slide-y-transition>
                <v-card-text v-if="show">
                    <div v-for="tag in item.tags">
                        <p>{{tag}}</p>
                    </div>
                </v-card-text>
            </v-slide-y-transition>
            <v-card-actions class="white">
                <v-spacer></v-spacer>
                <router-link :to="'vault'">
                    <v-btn primary @click="setVault(item)" dark>
                        <v-icon>launch</v-icon>
                    </v-btn>
                </router-link>
                <v-btn icon>
                    <v-icon>library_add</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>share</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import Zoom from './Zoom'
    import Keepcheck from './KeepCheck'
    export default {
        name: 'vaultcard',
        props: ["item"],
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                show: false,
                dialog: '',
                dialog2: ''
            }
        },
        methods: {
            redraw() {
                this.show = !this.show
                this.$redrawVueMasonry();
            },
            setVault(item) {
                this.$store.commit('setCurrentVault', item)
                this.$store.dispatch('getCurrentKeeps', item._id)
            },
            setKeep(item) {
                this.$store.commit('setKeep', item)
            }
        },
        mounted() {
            this.$store.dispatch('getUserVaults')
        },
        components: {
            Zoom,
            Keepcheck
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .media {
        /* padding-top: 15rem; */
        width: 100%;
        min-height: 15rem;
        /* min-width: 13rem; */
        max-height: 30rem;
    }

    .vaultcard {
        padding-bottom: 1vh;
        margin: 0 auto;
    }
</style>