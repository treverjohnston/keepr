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
                    <h5 class="grey--text text-xs-center">{{item.title}}</h5>
                </div>
            </v-card-title>
            <v-card-actions class="white">
                <v-spacer></v-spacer>
                <router-link :to="`${user._id}/vaults`">
                    <v-btn primary @click="setVault(item)" dark>
                        <v-icon>launch</v-icon>
                    </v-btn>
                </router-link>
                <v-btn @click="deleteVault(item._id)" icon>
                    <v-icon class="red--text">delete_forever</v-icon>
                </v-btn>
                <!-- <v-btn icon>
                    <v-icon>share</v-icon>
                </v-btn> -->
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
        computed: {
            user() {
                return this.$store.state.userInfo;
            }
        },
        methods: {
            redraw() {
                this.show = !this.show
                this.$redrawVueMasonry();
            },
            setVault(item) {
                this.$store.commit('setCurrentVault', item)
                this.$store.commit('resetState')
                this.$store.dispatch('getCurrentKeeps', item._id)
            },
            setKeep(item) {
                this.$store.commit('setKeep', item)
            },
            deleteVault(id) {
                var _this = this
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(function () {
                    _this.$store.dispatch('deleteVault', id)
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                })
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