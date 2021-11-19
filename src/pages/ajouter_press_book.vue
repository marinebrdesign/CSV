<template>
  <div>
    <c-header></c-header>
    <form id="ajouter_press_book">
      <div class="titre">
        <label for="titre"></label>
        <input type="text" placeholder="Titre" id="titre"  required>
      </div>
      <div class="sous_titre">
        <label for="sous_titre"></label>
        <input type="text" placeholder="sous-titre" id="sous_titre">
      </div>
      <div class="texte">
        <label for="texte"></label>
        <input type="text" placeholder="Texte" id="texte"  required>
      </div>
      <div class="ajouter_photos">
        <label for="ajouter_photos"></label>
        <input type="file" placeholder="Ajouter une image" id="ajouter_photos">
      </div>



    </form>
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