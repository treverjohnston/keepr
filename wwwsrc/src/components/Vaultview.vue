<template>
    <div class="vaultview">
        <v-card hover @click="setZoom(item)">
            <img :src="item.url" class="media">
            <v-card-title>
                <div>
                    <p class="grey--text">{{item.title}}</p>
                    <p class="grey--text">{{item.description}}</p>
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
                <v-dialog v-model="dialog" lazy absolute>
                    <v-btn primary @click="setZoom(item)" dark slot="activator" icon>
                        <v-icon>launch</v-icon>
                    </v-btn>
                    <zoom></zoom>
                </v-dialog>
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
        name: 'vaultview',
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
            setZoom(item) {
                // var obj = {
                //     keepId: this.current._id,
                //     userId: this.user._id
                // }
                this.$store.commit('setZoom', item)
                // this.$store.dispatch('viewPlus', obj)
            },
            setKeep(item) {
                this.$store.commit('setZoom', item)
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