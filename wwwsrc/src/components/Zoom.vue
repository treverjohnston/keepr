<template>
    <div class="zoom">
        <!-- <v-layout class="elevation-24"> -->
        <v-card>
            <v-flex xs12>
                <img :src="item.url" class="img img-responsive">
            </v-flex>
            <v-flex xs12>
                <v-card-title primary-title class="text-xs-center">
                    <h3 class="headline mb-0">{{item.author}}</h3>
                </v-card-title>
                <v-card-title primary-title class="text-xs-center">
                    <div v-for="tag in item.tags">
                        <v-flex xs12>
                            <p class="tag">{{tag}}</p>
                        </v-flex>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog2" lazy absolute>
                        <v-btn primary class="btn" @click.stop="dialog2 = !dialog2" dark slot="activator">
                            <v-icon>play_for_work</v-icon>
                            <p>{{item.keeps}}</p>
                        </v-btn>
                        <v-card>
                            <v-flex xs12>
                                <v-card-title primary-title class="text-xs-center">
                                    <h3 class="headline mb-0">Add to a vault?</h3>
                                </v-card-title>
                                <v-card-title primary-title class="text-xs-center">
                                    <div v-for="vault in vaults">
                                        <v-layout>
                                            <v-flex xs12>
                                                <v-btn @click="addKeep(vault)" class="vault">{{vault.title}}</v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </div>
                                </v-card-title>
                            </v-flex>
                            <v-dialog lazy v-model="bar">
                                <v-btn @click.stop="dialog2 = !dialog2, bar= !bar"slot="activator" class="purple" dark>
                                    <v-icon>library_add</v-icon>
                                    <p>Add a new vault</p>
                                </v-btn>
                                <v-list>
                                    <v-form>
                                        <v-text-field label="Name" v-model="name" required></v-text-field>
                                        <v-text-field label="Description" v-model="description"></v-text-field>
                                    </v-form>
                                    <v-btn @click="addVault">
                                        Add Vault
                                    </v-btn>
                                </v-list>
                            </v-dialog>
                        </v-card>
                    </v-dialog>
                    <v-icon large>visibility</v-icon>
                    <p>{{item.views}}</p>
                </v-card-actions>
            </v-flex>
        </v-card>
        <!-- </v-layout> -->
    </div>
</template>

<script>
    export default {
        name: 'zoom',
        data() {
            return {
                name: '',
                description: '',
                bar: false,
                dialog: false,
                dialog2: false
            }
        },
        components: {
        },
        computed: {
            item() {
                return this.$store.state.current;
            },
            user() {
                return this.$store.state.userInfo;
            },
            vaults() {
                return this.$store.state.vaults;
            }
        },
        methods: {
            addVault() {
                var obj = {
                    title: this.name,
                    description: this.description
                }
                this.$store.dispatch('addVault', obj)
                this.bar = !this.bar
            },
            addKeep(vault) {
                var obj = {
                    vault: vault,
                    keep: this.item
                }
                this.$store.dispatch('addKeep', obj)
            }

        },
        mounted() {
            this.$store.dispatch('getUserVaults')
        }
    }

</script>
<style scoped>
    .tag {
        margin-right: 1rem;
    }

    .img {
        width: 100%;
        /* height: 100%; */
        /* max-height: 60vh;
    min-height: 50vh; */
    }
</style>