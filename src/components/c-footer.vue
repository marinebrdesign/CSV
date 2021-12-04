<template>
    <div>
        <footer>
            <h4>ASSOCIATION <br>Cæuvatte-Suarcine-Vendeline</h4>
          <div class="footer_row">
          <ul class="nav">
              <li>
                <router-link to="/">Accueil</router-link>
              </li>
              <li>
                <router-link to="/association">Association</router-link>
              </li>
              <li>
                <router-link to="/editions">Éditions</router-link>
              </li>
              <li>
                <router-link to="/communes">Nos Communes</router-link>
              </li>
              <li>
                <router-link to="/press_book">Press Book</router-link>
              </li>
              <li>
                <router-link to="/liens">Liens</router-link>
              </li>
            </ul>
            <ul class="nav_2">
              <li>
                <router-link to="/mentions_legales">Mentions légales</router-link>
              </li>
              <li>
                <router-link to="/politique_confidentialite">Politique de confidentialité</router-link>
              </li>
              <li><p>Suivez-nous<a href="https://fr-fr.facebook.com/"><i class="fab fa-facebook-f"></i></a></p></li>
              <li><img src="../img/Logo.png" width="50" height="50" alt="logo_csv"></li>
            </ul>
          </div>
        </footer>
    </div>
</template>
<script>
export default {
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
<style scoped>
@media  {
  
}
  h4 {
    margin-top: 0;
    font-family: Lato;
    font-size: 18px;
  }
</style>
