<template>
  <div>
		<c-header></c-header>

<main>

    <div class="press_book">
        <div id="2018">
            <a href="">2018</a>
        </div>

        <div id="2019">
            <a href="">2019</a>
        </div>

        <div id="2020">
            <a href="">2020</a>
        </div>
        <a href="">2021</a>
        <div id="2021">

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
