<template>
  <div>
<main>
  <a href="javascript:history.go(-1)"><i class="fas fa-chevron-left"></i><b>retour</b></a>
  <h2>MENTIONS LÉGALES</h2>
    <p>Cette page décrit les mentions légales qui s'appliquent à tout internaute visitant ce site. En le consultant vous vous engagez sans réserve à les respecter. Les mentions légales pouvant être modifiées à tout moment et sans préavis, nous vous engageons à les consulter régulièrement. </p>

        <h4>Responsable éditorial et responsable légal</h4>
        <p>Association CSV <br>
        Représenté(e) par : Michel Colney <br>
        Adresse : 7 Rue de la Rivière, 90370 Réchésy <br>
        E-mail : akleiber@csv-patrimoine.org <br>
        Siret / N°TVA : 33852213900017 <br></p>

        <h4>Éditeur du site</h4>
        <p>DUT MMI de Montbéliard <br>
        Représenté(e) par les étudiants : Lena Bataillard / Marine Beurier / Nina Bellino <br>
        Adresse du centre de formation : 4 Place Tharradin, 25200 Montbéliard <br>
        E-mail : didier.florentz@univ-fcomte.fr <br>
        Tuteur légal des étudiants : Didier Florentz <br></p>

        <h4>Hébergeur</h4>
        <p>Infomaniak <br>
        Représenté(e) par : Marc Oehler <br>
        Adresse : Rue Eugène-Marziano 25, 1227 Genève, Suisse <br>
        E-mail : recrutement@infomaniak.com <br>
        Siret / N°TVA : 49951342200018 <br></p>

        <h4>Conditions d’utilisation :</h4>
        <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès et de rectification aux données vous concernant par simple demande mail, écrite ou téléphonique.
          <br>Le DUT MMI de Montbéliard et les éditrices du site, Lena Bataillard, Marine Beurier et Nina Bellino ne peuvent être tenus responsable du contenu du site.
          <br>Ce site est exploité par l’association CSV. La présentation et chacun des éléments, y compris les marques, logos et noms de domaine, apparaissant sur le site http://www.csv-patrimoine.fr sont protégés par les lois en vigueur sur la propriété intellectuelle, et appartiennent à l’association CSV, ou font l'objet d'une autorisation d'utilisation.
          <br>Aucun élément composant le site ne peut être copié, reproduit, modifié, réédité, chargé, dénaturé, transmis ou distribué de quelque manière que ce soit, sous quelque support que ce soit, de façon partielle ou intégrale, sans l'autorisation écrite et préalable de l’association CSV à l'exception d'une stricte utilisation pour les besoins de la presse et sous réserve du respect des droits de propriété intellectuelle et de tout autre droit de propriété dont il est fait mention. Seule la copie à usage privé est autorisée pour votre usage personnel, privé et non-commercial, sur votre ordinateur personnel.
          <br>Toute utilisation autorisée des éléments composant ou figurant dans le site doit se faire sans dénaturation, modification ou altération de quelque manière que ce soit. L’association CSV se réserve le droit de poursuivre tout acte de contrefaçon de ses droits de propriété intellectuelle. Le présent Contrat est soumis au droit Français. Le présent Contrat s'applique dans le monde entier, et seule sa version en langue française fait foi en vue de son interprétation.</p>

        <h4>Graphisme, photos et illustrations :</h4>
        <p>Le graphisme (incluant le webdesign et le logo) a été réalisé par Lena Bataillard. <br>
          <br>Les photographies ont été réalisé par XXX et XXX. Les illustrations et visuels ont téléchargés sur les banques d’images libres de droits Freepik, Pixabay, Unsplash, Flaticon etc. </p>

        <h4>Déclaration à la CNIL :</h4>
        <p>Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l’égard des traitements de données à caractère personnel) relative à l’informatique, aux fichiers et aux libertés, ce site n’a pas fait l’objet d’une déclaration auprès de la Commission nationale de l’informatique et des libertés (www.cnil.fr). Pour plus d’informations sur le traitement de nos données sensibles, veuillez consulter notre Politique de Confidentialité.</p>
</main>
<c-footer></c-footer>

  </div>
</template>
<script>
import CFooter from '../components/c-footer.vue'
export default {
  components: {
    CFooter,
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
<style scoped>
  h2 {
    text-align: center;
  }
  main {
    margin: 35px 20px 35px 20px;
  }
</style>