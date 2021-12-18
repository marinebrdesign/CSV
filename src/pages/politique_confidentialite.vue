<template>
  <div>
<main>

  <a href="javascript:history.go(-1)"><i class="fas fa-chevron-left"></i><b>retour</b></a>
  <div v-for="politique_confidentalite in politiques_confidentalites" :key="politique_confidentalite.title">
    <h2>POLITIQUE DE CONFIDENTIALITÉ</h2>  
    <p v-html="politique_confidentalite.acf.texte_politique_confidentialite"></p>
  </div>

</main>
<c-footer></c-footer>
  </div>
</template>
<script>
import CFooter from '../components/c-footer.vue'
import axios from "axios";

export default {
  components: {
    CFooter,
  },
  data(){
    return {
      politiques_confidentalites: [],
    }
  },
  mounted(){
    axios.get('http://csv/wordpress/wp-json/wp/v2/p_confidentialite').then((response) => {
      this.politiques_confidentalites = response.data;
    });
  },
  methods:{
  }
}
</script>
<style scoped>
h2 {
  text-align: center;
}
main {
  width: 90%;
  margin: 35px auto;
}
</style>