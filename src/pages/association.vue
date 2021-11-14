<template>
  <div>
		<c-header></c-header>

<main>

    <div class="association">
        <h2>L'ASSOCIATION CŒUVATTE-SUARCINE-VENDELINE (ASSOCIATION CSV)</h2>
        <p>Est une association créée en 2005 pour la découverte, l’information, la restauration et la sauvegarde du Patrimoine des villages irrigués par trois rivières : la Cœuvatte, la Suarcine et la Vendeline.
            <br>
          <br>Elle a ensuite étendu son action sur un secteur géographique couvrant le sud du Territoire de Belfort. Son siège social est maintenant situé à Delle. L’association compte un peu plus d’une centaine de membres et est en lien avec d’autres associations du Territoire de Belfort, du Doubs, du Haut-Rhin et de Suisse. Elle est présidée par Michel Colney.
            <br>

          <br>Chaque année l’association édite un bulletin avec des articles concernant l’histoire locale écrits pour la plupart par ses membres, elle publie des livres, organise des conférences et des sorties à la découverte du patrimoine de notre région, des régions voisines et de Suisse.
            <br>

          <br>Le montant de l’adhésion annuelle est fixé à 23 €, chaque adhérent à jour de cotisation reçoit le bulletin de l’année en cours.</p>
    </div>

    <div class="contact">
      <h2>CONTACT</h2>
        <div class="mail">
          <div class="svg_mail">
          <i class="far fa-envelope fa-3x"></i>
        </div>
            <h4>E-MAIL</h4>
            <p>Secrétaire : <a href="mailto:akleiber@csv-patrimoine.org">akleiber@csv-patrimoine.org</a></p>
            <p>Trésorier : <a href="mailto:hubert.gauchey@free.fr">hubert.gauchey@free.fr</a></p>
            <p>Édition C-S-V : <a href="mailto:edition@csv-patrimoine.org">edition@csv-patrimoine.org</a></p>
        </div>

        <div class="adresse">
          <div class="svg_adresse">
            <i class="fas fa-map-marker-alt fa-3x"></i>
          </div>
            <h4>ADRESSE</h4>
            <a href="https://www.google.fr/maps/place/10+Rue+Andr%C3%A9+Boulloche,+90100+Delle/@47.4994721,6.9882895,17z/data=!3m1!4b1!4m5!3m4!1s0x47921ef7b6b0beb3:0x318eefc22fc7d228!8m2!3d47.4994721!4d6.9904782">10 rue André Boulloche
              <br>90100, DELLE</a>
        </div>

        <div class="tel">
          <div class="svg_tel">
            <i class="fas fa-phone-alt fa-3x"></i>
          </div>
            <h4>CONTACT</h4>
            <a href="tel:+33384296460">+33 3 84 29 64 60</a>
        </div>
    </div>

    <div class="rejoindre">
        <h1>FAITES PASSER LE MOT</h1>
        <p>Parlez à vos amis et à votre famille de cette association. En devenant vous-même un adhérant, vous préserverez le patrimoine du sud territoire et l'impact sera plus fort.</p>
      <div class="button">
        <button><router-link to="/rejoindre">Rejoindre l'association</router-link></button>
      </div>
    </div>

    <div class="form_contact">
        <div class="h1_form">
          <h1>ÉCRIVEZ-NOUS</h1>
        </div>
            <form id="contact">
                <div class="nom">
                    <label for="nom"></label>
                    <input type="text" placeholder="Nom" id="nom" name="user_name" required>
                </div>
                <div class="prenom">
                    <label for="prenom"></label>
                    <input type="text" placeholder="Prénom" id="prenom" name="user_firstname" required>
                </div>
                <div class="adresse">
                    <label for="adresse"></label>
                    <input type="text" placeholder="Adresse" id="adresse" name="user_adress" required>
                </div>
                <div class="code_postal">
                    <label for="code_postal"></label>
                    <input type="number" placeholder="Code Postal" id="code_postal" name="user_code" required>
                </div>
                <div class="ville">
                    <label for="ville"></label>
                    <input type="text" placeholder="Ville" id="ville" name="user_city" required>
                </div>
                <div class="mail">
                    <label for="mail"></label>
                    <input type="email" placeholder="Adresse mail" id="mail" name="user_mail" required>
                </div>
                <div class="tel">
                    <label for="tel"></label>
                    <input type="number" placeholder="Téléphone" id="tel" name="user_phone" required>
                </div>
              <div class="msg">
                <label for="msg"></label>
                <textarea id="msg" placeholder="Message" name="user_message" required></textarea>
              </div>
              <div class="envoyer">
                <button type="submit">
                  <i class="fas fa-paper-plane fa-2x"></i>
                </button>
              </div>

            </form>
        </div>

    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.509291073717!2d6.988289515606612!3d47.499472079177764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47921ef7b6b0beb3%3A0x318eefc22fc7d228!2s10%20Rue%20Andr%C3%A9%20Boulloche%2C%2090100%20Delle!5e0!3m2!1sfr!2sfr!4v1636643248131!5m2!1sfr!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div class="article">
      <div class="article_1">
        <h1>Article 1 : DÉNOMINATION DE L'ASSOCIATION</h1>
        <p>Il est fondé entre les adhérents aux présents statuts une association à buts non
          lucratifs, régie par la loi du 1er juillet 1901 et le décret du 16 août 1901 ainsi que
          par les lois et décrets subséquents, une association visant à étendre son rayon
          d’action au Sud Territoire de BELFORT, sur un secteur géographique couvrant
          l’ensemble des bassins versants des rivières Cœuvatte, Suarcine et Vendeline et
          ayant pour dénomination : <br>
          Association Cœuvatte, Suarcine et Vendeline
        </p>
      </div>
       <div class="article_2">
         <h1>Article 2 : BUTS DE L'ASSOCIATION</h1>
         <p>La découverte, l’information, la recherche et la sauvegarde du patrimoine des villages irrigués par les rivières Cœuvatte, Suarcine et Vendeline.</p>
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
<style scoped>
.article_2 h1{
  padding: 40px 0 0 20px;
  margin-top: 0;
  border: white 0.5px solid;
}

.article_2 p {
  padding: 0 20px 20px 20px;
}

.article_1 p{
  margin-bottom: 0;
  padding: 0 20px 20px 20px;
  border: white 0.5px solid;
}

.article_1 h1{
  padding: 20px 0 0 20px;
  margin-top: 0;
}
</style>