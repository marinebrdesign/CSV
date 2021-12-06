<template>
  <div>
    <c-header></c-header>

    <main>
      <a href="javascript:history.go(-1)"><i class="fas fa-chevron-left"></i><b>retour</b></a>
      <h1>lES BULLETINS DE l'ASSOCIATION</h1>
      <div id="container_bulletins">
        <div id="bulletins_editions" v-for="bulletin_editions in bulletins_editions" :key="bulletin_editions.id">
          <h3 id="h_bulletins">{{bulletin_editions.numero_annee_bulletin}}</h3>
          <div class="img_bulletin">
            <img :src="bulletin_editions.image_bulletin.url" alt="bulletin_editions.image_bulletin">
          </div>
          <div class="bouton_voir">
            <div class="btn btn-success"><button @click="setRevele(bulletin_editions.id)">Voir le bulletin</button></div>
            <modale_bulletins :show="revele == bulletin_editions.id" :bulletin_editions="bulletin_editions" @leaveModal="resetRevele"></modale_bulletins>
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
import modale_bulletins from '../components/modale_bulletins.vue';

export default {
  name: 'bulletins_editions',
  components: {
    CFooter,
    CHeader,
    modale_bulletins: modale_bulletins,
  },
  data() {
    return {
      revele: -1,
      bulletins_editions: [],
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
    axios.get('http://csv/wordpress/wp-json/wp/v2/bulletin_editions').then((response) => {
      this.bulletins_editions = response.data;
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