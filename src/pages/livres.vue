<template>
  <div>
    <c-header></c-header>

    <main>
      <a href="javascript:history.go(-1)"><i class="fas fa-chevron-left"></i><b>retour</b></a>
      <h1>lES LIVRES DE LA MAISON D'ÉDITION</h1>
      <div id="container_livres">
        <div id="livres" v-for="livre in livres" :key="livre.id">
          <h3 id="h_livres">{{livre.auteur_titre_livre}}</h3>
          <div class="img_livres">
            <img :src="livre.image_livre.url" alt="livre.image_livre">
          </div>
          <div class="bouton_voir">
            <div class="btn btn-success"><button @click="setRevele(livre.id)">Voir le livre</button></div>
            <modale_livres :show="revele == livre.id" :livre="livre" @leaveModal="resetRevele"></modale_livres>
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
import modale_livres from '../components/modale_livres.vue';

export default {
  name: 'livres',
  components: {
    CFooter,
    CHeader,
    modale_livres: modale_livres,
  },
  data() {
    return {
      revele: -1,
      livres: [],
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
    axios.get('http://csv/wordpress/wp-json/wp/v2/livre').then((response) => {
      this.livres = response.data;
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