<template>
  <div>
		<c-header></c-header>

<main>
    <!--<h2>LIENS EXTERNES</h2>-->
  <div class="presentation">
    <p>Bienvenue sur le site de l’association Cœuvatte-Suarcine-Vendeline (CSV) :
      Histoire et patrimoine du sud-territoire de Belfort</p>
    <svg>flèche</svg>
  </div>
  
  <div class="decouvrez">
    <img src="" alt="logo">
    <h1>DÉCOUVREZ TOUTES LES LIENS</h1>
    <a href="#lien_1">- Archives départementales du territoire de Belfort</a>
    <a href="#lien_2">- Archives municipales de Belfort</a>
    <a href="#lien_3">- Bibliothèque Nationale de France</a>
    <a href="#lien_4">- Mémoire des hommes</a>
    <a href="#lien_5">- Association Histoire et Patrimoine Sous-Vosgien</a>
    <a href="#lien_6">- Les Amis du Moulin de Courtelevant</a>
    <a href="#lien_7">- Société d’Histoire et d’Archéologie de l’Arrondissement de Lure</a>
    <a href="#lien_8">- Société Jurassienne d’Emulation (CH)</a>
    <a href="#lien_9">- Union des patoisants en langue romane</a>
    <a href="#lien_10">- Association Folklore comtois</a>
    <a href="#lien_11">- Centre d’Entraide Généalogique de Franche-Comté</a>
    <a href="#lien_12">- Musées de la ville de Belfort</a>
    <a href="#lien_13">- Commune de Florimont</a>
  </div>
  
    <div class="liens">

        <div id="lien_1">
            <p>Archives départementales du territoire de Belfort</p>
            <button><a href="https://archives.territoiredebelfort.fr/">Lien</a></button>
        </div>

        <div id="lien_2">
            <p>Archives municipales de Belfort</p>
            <button><a href="https://archives.belfort.fr">Lien</a></button>
        </div>

        <div id="lien_3">
            <p>Bibliothèque Nationale de France</p>
            <button><a href="https://www.bnf.fr/fr">Lien</a></button>
        </div>

        <div id="lien_4">
            <p>Mémoire des hommes</p>
            <button><a href="https://www.memoiredeshommes.sga.defense.gouv.fr/">Lien</a></button>
        </div>

        <div id="lien_5">
            <p>Association Histoire et Patrimoine Sous-Vosgien</p>
            <button><a href="https://sites.google.com/site/ahpsvtdp/home">Lien</a></button>
        </div>

        <div id="lien_6">
            <p>Les Amis du Moulin de Courtelevant</p>
            <button><a href="http://www.amc.moulincourtelevant.fr/">Lien</a></button>
        </div>

        <div id="lien_7">
            <p>Société d’Histoire et d’Archéologie de l’Arrondissement de Lure</p>
            <button><a href="https://www.shaarl.com/">Lien</a></button>
        </div>

        <div id="lien_8">
            <p>Société Jurassienne d’Emulation (CH)</p>
            <button><a href="https://www.sje.ch/">Lien</a></button>
        </div>

        <div id="lien_9">
            <p>Union des patoisants en langue romane</p>
            <button><a href="http://www.patoisbelfort.fr/">Lien</a></button>
        </div>

        <div id="lien_10">
            <p>Association Folklore comtois</p>
            <button><a href="https://www.folklore-comtois.fr/">Lien</a></button>
        </div>

        <div id="lien_11">
            <p>Centre d’Entraide Généalogique de Franche-Comté</p>
            <button><a href="https://www.cegfc.net/www/index.php3">Lien</a></button>
        </div>

        <div id="lien_12">
            <p>Musées de la ville de Belfort</p>
            <button><a href="https://musees.belfort.fr/accueil-991.html">Lien</a></button>
        </div>

        <div id="lien_13">
            <p>Commune de Florimont</p>
            <button><a href="https://florimont.fr/">Lien</a></button>
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
