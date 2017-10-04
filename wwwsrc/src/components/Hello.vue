<template>
  <div class="hello">
    <v-layout>
        <v-bottom-sheet lazy v-model="keep">
            <v-btn slot="activator" fab dark small class="purple">
                <v-icon>note_add</v-icon>
              </v-btn>
            <h2 class="elevation-8 grey lighten-3">Add Keep</h2>
            <div v-if="urlAdd !== ''">
              <v-card class="image">
                <img class="img" :src="urlAdd" alt="your image">

              </v-card>
            </div>
            <v-list>
              <v-form>
                <v-text-field label="Name" v-model="nameAdd" required></v-text-field>
                <v-text-field label="Url" v-model="urlAdd" required></v-text-field>
                <v-text-field label="Description" v-model="descriptionAdd"></v-text-field>
              </v-form>
              <v-btn @click="openCloud" id="upload_widget_opener">
                Add Keep
              </v-btn>
            </v-list>
          </v-bottom-sheet>
      
      <v-bottom-sheet lazy v-model="bar">
        <v-btn slot="activator" fab dark small class="green">
          <v-icon>library_add</v-icon>
        </v-btn>
        <h2 class="elevation-8 grey lighten-3">Add Vault</h2>
        <v-list>
          <v-form>
            <v-text-field label="Name" v-model="nameAdd" required></v-text-field>
            <v-text-field label="Description" v-model="descriptionAdd"></v-text-field>
          </v-form>
          <v-btn @click="addVault">
            Add Vault
          </v-btn>
        </v-list>
      </v-bottom-sheet>
    </v-layout>
    <div v-masonry transition-duration="0.3s" item-selector=".item" class="hellocards ">
      <v-layout row justify-space-around>
        <v-flex xs12 sm6 md4 v-masonry-tile fit-width="true" class="item" v-for="item in keeps">
          <hellocard :item="item"></hellocard>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  import Hellocard from './HelloCard'
  export default {
    name: 'hello',
    data() {
      return {
        weird: true,
        nameAdd: '',
        descriptionAdd: '',
        urlAdd: '',
        bar: false,
        keep: false
      }
    },

    components: {
      Hellocard
    },
    computed: {
      keeps() {
        return this.$store.state.keeps
      },
      info() {
        return this.$store.state.userInfo;
      },
    },
    methods: {
      refresh() {
        this.$redrawVueMasonry();
        // console.log("refreshing")
        // setTimeout(this.refresh, 500);
      },
      addVault() {
        var obj = {
          title: this.nameAdd,
          description: this.descriptionAdd,
          keep: this.current
        }
        this.$store.dispatch('addVault', obj)
        this.dialog2 = false
        this.bar = false
      },
      openCloud() {
        if (this.name !== '') {
          // console.log('info',this.info)
          cloudinary.openUploadWidget({ cloud_name: 'treverscloud', upload_preset: 'nd6fcx4z' },
            (error, result) => {
              result[0].title = this.nameAdd
              result[0].description = this.descriptionAdd
              result[0].creatorId = this.info._id
              this.$store.dispatch('sendDesign', result)
            });
        } else {
          swal(
            'Oops...',
            'You need to add a name first!',
            'error'
          )
        }
      }

    },
    mounted() {
      this.refresh();
      this.$store.dispatch('getUserVaults');
      this.$store.dispatch('getKeeps');
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img{
    /* width: 100%; */
    max-height: 15rem;
    margin: 0 auto;
  }
  .image{
    margin: 0 auto;
  }
  .item {
    padding: 0 .5vw 0 .5vw;
    margin: 0 auto;
  }

  .hellocards {
    max-width: 95vw;
    margin: 0 auto;
  }
</style>