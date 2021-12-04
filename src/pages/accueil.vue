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
          <a href="#ancre"><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg></a>
        </div>
      </div>
    </div>

  <main>

    <div id="ancre"></div>
    <div class="container_bulletins">
      <div id="bulletins" v-for="bulletin in bulletins" :key="bulletin.title">
        <div class="cercle_h2">
          <div class="cercle"></div>
          <div class="h2_texte"><h2>{{ bulletin.titre_bulletin }}</h2></div>
        </div>
        <div class="contenu-bulletin">
          <div class="texte_bulletin">
            <p>{{ bulletin.sous_titre_bulletin }}</p>
            <h3>{{ bulletin.titre_association_bulletin }}</h3>
            <p v-html="bulletin.texte_bulletin"></p>
          <div class="acheter">
            <button><i class="fas fa-pen"></i>Acheter</button>
          </div>
          </div>
          <div class="img_bulletins">
            <img :src="bulletin.image_bulletin.url" alt="bulletin.image_bulletin">
        </div>
        </div>
      </div>
    </div>

    <h1 id="h1_actualites">LES ACTUALITÉES DE L'association Cœuvatte Suarcine Vendeline</h1>
    <div class="logo_actu">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100" viewBox="0 0 147 145">
        <g id="newspaper" transform="translate(-887 -2038)">
          <ellipse id="Ellipse_63" cx="73.5" cy="71.5" rx="73.5" ry="71.5" transform="translate(887 2040)" fill="#d96b2b"/>
          <image id="newspaper-2" width="126" height="126" transform="translate(897 2038)" xlink:href="data:image/png;base64,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"/>
        </g>
      </svg>
    </div>
    <div class="container_actualites">
      <div id="actualites" v-for="actualite in actualites" :key="actualite.id">
        <div class="texte">
          <div class="cercle_h2">
            <div class="cercle"></div>
            <div class="h2_texte"><h2>{{ actualite.titre_actualite }}</h2></div>
          </div>
          <p>{{ actualite.date_actualite_ }}</p>
          <h3 style="font-family: Lato ">{{ actualite.sous_titre_actualite }}</h3>
          <p v-html="actualite.texte_actualite"></p>
        </div>
        <div class="img_actualite">
          <img :src="actualite.image_actualite.url" alt="actualite.titre_actualite">
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
import axios from 'axios';

export default {
  components: {
    CFooter,
    CHeader,
  },
  data() {
    return {
      actualites: [],
      bulletins: [],
    };
  },

  mounted() {
    axios.get('http://csv/wordpress/wp-json/wp/v2/actualite').then((response) => {
      this.actualites = response.data;
    });

    axios.get('http://csv/wordpress/wp-json/wp/v2/bulletin').then((response) => {
      this.bulletins = response.data;
    });
  },

  methods:{
  }
}
</script>

<style scoped>


.texte p, .texte_bulletin p {
  font-size: 16px;
}

main {
  background-color: #FAFAFA;
}

#bulletins p:first-of-type, #actualites p:first-of-type {
  font-size: 14px;
  margin-bottom: 0;
}

#bulletins h3, #actualites h3 {
  margin-top: 0;
}

.acheter svg {
  padding-right: 20px;
}

h2 {
  font-size: 20px;
}

@media screen and (max-width: 3000px) {
  #h1_actualites {
    text-align: center;
    font-size: 45px;
    width: 50%;
    margin: 20px auto;
  }
}

@media screen and (max-width: 992px) {
  #h1_actualites {
    font-size: 35px;
    width: 70%;
  }
}

@media screen and (max-width: 768px) {
  #h1_actualites {
    display: none;
  }

  .logo_actu {
    display: none;
  }
}

/*slide*/

</style>