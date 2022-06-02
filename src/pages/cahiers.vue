<template>
  <div>
    <c-header></c-header>

    <main>
      <a href="javascript:history.go(-1)"><i class="fas fa-chevron-left"></i><b>retour</b></a>
      <h1>lES CAHIERS DE L'ASSOCIATION</h1>
      <div id="container_cahiers">
        <div id="cahiers" v-for="cahier in cahiers" :key="cahier.id">
          <h3 id="h_cahier">{{cahier.numero_annee_cahier}}</h3>
          <div class="img_cahier">
            <img :src="cahier.image_cahier.url" alt="cahier.image_cahier">
          </div>
          <div class="bouton_voir">
            <div class="btn btn-success"><button @click="setRevele(cahier.id)">Voir le cahier</button></div>
            <modale_cahiers :show="revele == cahier.id" :cahier="cahier" @leaveModal="resetRevele"></modale_cahiers>
          </div>
        </div>
      </div>

    </main>

    <c-footer></c-footer>
  </div>
</template>
<script>
import CFooter from '../components/c-footer.vue'
import CHeader from '../components/c-header.vue'
import axios from "axios";
import modale_cahiers from "../components/modale_cahiers.vue";
export default {
  name: 'cahiers',
  components: {
    CFooter,
    CHeader,
    modale_cahiers: modale_cahiers,
  },
  data() {
    return {
      revele: -1,
      cahiers: [],
    };
  },
  methods: {
    setRevele(id) {
      this.revele = id
    },
    resetRevele() {
      this.revele = -1;
    }
  },
  mounted() {
    axios.get('https://csv-patrimoine.org/wp-json/wp/v2/cahier').then((response) => {
      this.cahiers = response.data;
    });
  },
}
</script>
<style scoped>
main {
  background-color: #FAFAFA;
  padding-top: 35px;
}

a:first-of-type {
  padding-left: 35px;
}


h1 {
  margin-top: 0;
  margin-left: 65px;
  padding-top: 35px;
}
</style>
