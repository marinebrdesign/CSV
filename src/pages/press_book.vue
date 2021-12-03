<template>
  <div>
		<c-header></c-header>

<main>
  <h1 id="pb">PRESS BOOK</h1>
  <p>Afin de consulter un press book, veuillez télécharger celui-ci à partir du bouton "Télécharger".</p>
  <div id="container_press_book">
    <div class="press_book">
        <div class="img_pb">
          <h4>2018</h4>
          <div>
            <button>Télécharger</button>
          </div>
        </div>
    </div>

    <div class="press_book">
      <div class="img_pb">
        <h4>2019</h4>
        <div>
          <button>Télécharger</button>
        </div>
      </div>
    </div>

    <div class="press_book">
      <div class="img_pb">
        <h4>2019</h4>
      </div>
    </div>

    <div class="press_book">
      <div class="img_pb">
        <h4>2019</h4>
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
}

@media screen and (max-width: 768px) {
  p {
    margin: 20px auto;
    width: 90%  ;
  }
}
</style>