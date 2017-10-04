<template>
        <div class="keepview">
          <v-card hover @click="setZoom(item)">
            <img :src="item.url" class="media">
            <v-card-title>
              <div>
                <p class="grey--text">{{item.author}}</p>
              </div>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog2" lazy absolute>
                <v-btn primary class="btn" @click="setKeep(item)" dark slot="activator">
                  <v-icon>play_for_work</v-icon>
                  <p>{{item.keeps}}</p>
                </v-btn>
                <v-card>
                  <v-flex xs12>
                    <v-card-title primary-title class="text-xs-center">
                      <h3 class="headline mb-0">What vault do you want to keep this in?</h3>
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
                  <v-bottom-sheet lazy v-model="bar">
                    <v-btn @click="dialog2=!dialog2" slot="activator" class="purple" dark>
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
                  </v-bottom-sheet>
                </v-card>
              </v-dialog>
              <v-icon small>visibility</v-icon>
              <p>{{item.views}}</p>
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
                        <v-btn primary class="btn" @click="dialog = !dialog" dark slot="activator">
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
                          <v-dialog lazy v-model="botbar">
                            <v-btn @click.stop="dialog2 = !dialog2, bar= !bar" slot="activator" class="purple" dark>
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
              </v-dialog>
              <!-- <v-btn icon>
                <v-icon>library_add</v-icon>
              </v-btn>
              <v-btn icon>
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
          name: 'keepview',
          props: ["item"],
          data() {
            return {
              msg: 'Welcome to Your Vue.js App',
              show: false,
              dialog: false,
              dialog2: false,
              name: '',
              description: '',
              bar: false,
              botbar: false
            }
          },
          methods: {
            redraw() {
              this.show = !this.show
              this.$redrawVueMasonry();
            },
            setZoom(item) {
              this.$store.commit('setZoom', item)
              this.$store.dispatch('viewPlus', item)
            },
            setKeep(item) {
              this.$store.commit('setZoom', item)
              // this.dialog2 = !this.dialog2
              // this.dialog = !this.dialog
              // this.bar = !this.bar
            },
            // addKeep(item) {
            //   this.$store.dispatch('addKeep', item)
            // },
            addVault() {
              var obj = {
                title: this.name,
                description: this.description,
                keep: this.current
              }
              this.$store.dispatch('addVault', obj)
              this.dialog2 = false
              this.bar = false
            },
            addKeep(vault) {
              var obj = {
                vault: vault,
                keep: this.current
              }
              this.$store.dispatch('addKeep', obj)
              this.dialog2 = false
      
            },
            
          },
          mounted() {
      
          },
          components: {
            Zoom,
            Keepcheck
          },
          computed: {
      
            current() {
              return this.$store.state.current;
            },
            user() {
              return this.$store.state.userInfo;
            },
            vaults() {
              return this.$store.state.vaults;
            }
          }
        }
      
      </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
        .btn {
          background-color: transparent
        }
      
        .media {
          /* padding-top: 15rem; */
          width: 100%;
          min-height: 15rem;
          /* min-width: 13rem; */
          max-height: 30rem;
        }
      
        .hellocard {
          padding-bottom: 1vh;
          margin: 0 auto;
        }
      
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