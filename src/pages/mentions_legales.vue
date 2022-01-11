<template>
  <div>
<main>

  <a href="javascript:history.go(-1)"><i class="fas fa-chevron-left"></i><b>retour</b></a>
  <div v-for="mentions_legales in mentions_legales" :key="mentions_legales.title">
    <h2>MENTIONS LÉGALES</h2> 
    <p v-html="mentions_legales.acf.texte_mentions_legales"></p>
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
      mentions_legales: [],
    }
  },
  mounted(){
    axios.get('https://csv-admin.marinebeurier.fr/wp-json/wp/v2/mentions_legales').then((response) => {
      this.mentions_legales = response.data;
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