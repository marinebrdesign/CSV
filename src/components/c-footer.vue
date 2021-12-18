<template>
    <div style="background-color: black">
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
              <li>
                <div v-for="logo in logos" :key="logo.id">
                  <img :src="logo.acf.img_logo.url" alt="le logo de l'association" width="50px" height="50px">
                </div>
              </li>
            </ul>
          </div>
        </footer>
    </div>
</template>
<script>
import axios from "axios";

export default {
  data(){
    return {
      logos:[],
    }
  },
  mounted(){   axios.get('http://csv/wordpress/wp-json/wp/v2/logo').then((response) => {
    this.logos = response.data;
  });

  },
  methods:{
  }
}
</script>
<style scoped>

h4 {
    margin-top: 0;
    font-family: Lato;
    font-size: 18px;
}
</style>
