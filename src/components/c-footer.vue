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
              <li><a href="https://fr-fr.facebook.com/">Suivez-nous<i class="fab fa-facebook-f"></i></a></li>
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
