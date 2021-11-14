<template>
  <div>
    <c-header></c-header>
    <main>
      <div class="logo">
        <img src="" alt="logo_CSV">
        <h1>CŒUVATTE-SUARCINE-VENDELINE</h1>
      </div>

      <div class="presentation">
        <p>Bienvenue sur le site de l’association Cœuvatte-Suarcine-Vendeline (CSV) :
          Histoire et patrimoine du sud-territoire de Belfort</p>
        <svg>flèche</svg>
      </div>

      <div class="actualites">
        <h2>Actualités</h2>
        <div class="bulletin">

        </div>

        <div class="conference">

        </div>
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