<template>
  <div>
    <div class="image_background">
      <c-header></c-header>
      <div class="presentation">
        <div class="logo">
          <img src="../img/Logo.png" alt="logo_csv">
        </div>
        <h1>CŒUVATTE-SUARCINE-VENDELINE</h1>
        <p>Bienvenue sur le site de l’association Cœuvatte-Suarcine-Vendeline (CSV) :
          <br>Histoire et patrimoine du sud-territoire de Belfort</p>
        <div class="fleche">
          <a href="#actualites"><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg></a>
        </div>
      </div>
    </div>
  <main>
      <div id="actualites">
      </div>
    </main>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CFooter from '../components/c-footer.vue'
import CHeader from '../components/c-header.vue'
export default {
  components: {
    CFooter,
    CHeader,
  },
  data(){
    return {
    }
  },
  mounted(){
    /*axios.get('http://localhost/normaludus - Copie/php/Utilitaires/Produit.php').then((response) => {
        this.listeCategories = response.data;
    });*/
  },
  methods:{
  }
}
</script>

<style>
</style>