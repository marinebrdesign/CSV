<template>
  <div>

    <div class="image_background">
      <c-header></c-header>
      <div class="presentation">
        <div class="logo" v-for="logo in logos" :key="logo.id">
          <img :src="logo.acf.img_logo.url" alt="le logo de l'association">
        </div>
        <h1>CŒUVATTE-SUARCINE-VENDELINE</h1>
        <p>Les press books de l'association</p>
        <div class="fleche">
          <a href="#ancre"><svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg></a>
        </div>
      </div>
    </div>

<main>

  <div id="ancre"></div>
  <h1 id="pb">PRESS BOOK</h1>
  <p>Afin de consulter notre press book, veuillez télécharger celui-ci à partir du bouton "Télécharger".</p>
  <div id="container_press_book">
    <div class="press_book" v-for="press_book in press_books" :key="press_book.id">
        <div class="img_pb">
          <h4>{{press_book.annee_press_book}}</h4>
          <div>
            <button><a :href="press_book.fichier_press_book.url" download="">Télécharger</a></button>
          </div>
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
export default {
  components: {
    CFooter,
    CHeader,
  },
  data(){
    return {
      press_books: [],
      logos: [],
    }
  },

  mounted() {
    axios.get('https://csv-patrimoine.org/wp-json/wp/v2/press_book').then((response) => {
      this.press_books = response.data;
    });

    axios.get('https://csv-patrimoine.org/wp-json/wp/v2/logo').then((response) => {
      this.logos = response.data;
    });
  },

  methods:{
  }
}
</script>
<style scoped>
button {
  font-family: Lato;
}
@media screen and (max-width: 3000px) {
  p {
    margin: 20px 20px 20px 65px;
  }

  .presentation p {
    font-family: "Bebas Neue";
    font-size: 50px;
  }
}

@media screen and (max-width: 768px) {
  p {
    margin: 20px auto;
    width: 90%  ;
  }

  .presentation p {
    font-size: 30px;
  }
}

@media screen and (max-width: 480px) {
  .presentation p {
    font-size: 25px;
  }
}
</style>