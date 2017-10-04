<template>
  <div class="hello">
    <div v-masonry transition-duration="0.3s" item-selector=".item" class="hellocards ">
      <v-layout row justify-space-around>
        <v-flex xs12 sm4 md3 lg2 v-masonry-tile fit-width="true" class="item" v-for="item in keeps">
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
        weird: true
      }
    },
    components: {
      Hellocard
    },
    computed: {
      keeps(){
        return this.$store.state.keeps
      }
    },
    methods: {
      refresh() {
        this.$redrawVueMasonry();
        // console.log("refreshing")
        setTimeout(this.refresh, 500);
      },
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
  .item {
    padding: 0 .5vw 0 .5vw;
    margin: 0 auto;
  }

  .hellocards {
    max-width: 95vw;
    margin: 0 auto;
  }
</style>