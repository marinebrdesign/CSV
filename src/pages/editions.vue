<template>
  <div>
		<c-header></c-header>

<main>
  <h1>Achetez</h1>
  <p>Ici, vous avez la possibilité d'acheter les livres,  les bulletins et les cahiers édités par l'association.</p>

  <div class="categorie">
    <div class="bouton">
      <button><router-link to ="/livres"><i class="fas fa-book"></i>Voir les livres</router-link></button>
    </div>

    <div class="bouton">
      <button><router-link to ="/bulletins"><i class="fas fa-folder"></i>Voir les bulletins</router-link></button>
    </div>

    <div class="bouton">
      <button><router-link to ="/cahiers"><i class="fas fa-book-open"></i>Voir les cahiers</router-link></button>
    </div>
  </div>

<p>Les Éditions C.S.V. sont nées en 2007 en réponse à un constat de carence de l'offre éditoriale classique.
  <br>
  <br>
   En effet, un certain nombre d'auteurs existent en marge des circuits classiques de publication et ceux-ci ont souvent beaucoup de difficultés à faire éditer leurs travaux. Cela s'explique notamment par le rapport souvent présenté comme incontournable qui existe entre le nombre de tirages et les coûts d'impression, les imprimeries refusant les petites séries en raison de coûts apparemment prohibitifs.
   Les ouvrages de travaux d'histoire locale, les monographies patrimoniales ou celles à caractère culturel et régional, ne trouvent pas souvent, malgré leur qualité, le public suffisamment nombreux qui pourrait intéresser un éditeur.
  <br>Sont-ils condamnés à rester dans les cartons des auteurs ?
  <br>
  <br>Existe-t-il des moyens qui puissent satisfaire l'attente des chercheurs et celle d'un public qui, bien sûr, ne constituera jamais un nombre de lecteurs égal à ceux d'un best-seller, mais peut tout au moins constituer un groupe de clients fidèles, intéressés comme tels aux travaux des auteurs locaux ?

  <br>Les Editions C.S.V proposent ce service. Chaque auteur dont l'ouvrage concerne le champ géographique de l'Association Cœuvatte Suarcine Vendeline, peut proposer son travail en vue d'une édition prise entièrement en charge par l'Association. Il n'y a pas a priori de conditions formelles, tous les supports éditables sont en principe éligibles, mais un comité de lecture désigné par le Conseil d'Administration décide souverainement de l'opportunité de la publication et de son calendrier. Chaque accord fait l'objet d'un contrat.
  <br>
  <br>Sans que cette liste soit exhaustive, les ouvrages choisis en priorité pour la publication doivent concerner la zone géographique précisée ci-dessus et trouveront leur thème dans : </p>
  <ul>
    <li>
      - L'Histoire
    </li>
    <li>
      - La découverte du patrimoine
    </li>
    <li>
      - Les traditions et thèmes culturels
    </li>
    <li>
      - La géographie, la toponymie
    </li>
    <li>
      - La botanique, la géologie
    </li>
  </ul>
  <br>
  <p>Pour de plus amples informations, contactez l’Association.</p>

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
  methods:{
  }
}
</script>
<style scoped>
p, ul {
  width: 90%;
  margin: 0 auto;
}

ul {
  font-family: lato;
}

main {
  margin: 40px 0;
}

h1 {
  width: 90%;
  margin: 0 auto 20px auto;
}

svg {
  padding: 0 10px;
}

</style>