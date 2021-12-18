<template>
  <div>
		<c-header></c-header>

<main>
    <div class="row">
      <div class="association" v-for="asso_presentation in asso_presentations" :key="asso_presentation.id">
        <h2>L'ASSOCIATION CŒUVATTE-SUARCINE-VENDELINE (ASSOCIATION CSV)</h2>
        <p v-html="asso_presentation.acf.presentation_association"></p>
      </div>

      <div class="contact" v-for="contact in contacts" :key="contact.id">
        <h2>CONTACT</h2>
        <div class="mail">
          <div class="svg_mail">
            <i class="far fa-envelope fa-3x"></i>
          </div>
          <h4>E-MAIL</h4>
          <p>Secrétaire : <a :href="'mailto:' + contact.acf.mail_secretaire">{{contact.acf.mail_secretaire}}</a></p>
          <p>Trésorier : <a :href="'mailto:' + contact.acf.mail_tresorier">{{contact.acf.mail_tresorier}}</a></p>
          <p>Édition C-S-V : <a :href="'mailto:' + contact.acf.mail_edition_csv">{{contact.acf.mail_edition_csv}}</a></p>
        </div>

        <div class="row">
          <div class="adresse">
            <div class="svg_adresse">
              <i class="fas fa-map-marker-alt fa-3x"></i>
            </div>
            <h4>SIÈGE DE L'ASSOCIATION</h4>
            <p v-html="contact.acf.adresse"></p>
          </div>

          <div class="tel">
            <div class="svg_tel">
              <i class="fas fa-phone-alt fa-3x"></i>
            </div>
            <h4>CONTACT</h4>
            <p>{{contact.acf.telephone}}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="rejoindre" v-for="texte_rejoindre in textes_rejoindre" :key="texte_rejoindre.id">
      <div class="img_rejoindre">
        <img id="rejoindre" src="../img/association/rejoindre.png" alt="rejoignez-nous">
      </div>
      <div class="texte_rejoindre">
        <h2>{{ texte_rejoindre.acf.titre_rejoindre }}</h2>
        <p v-html="texte_rejoindre.acf.texte_rejoindre"></p>
        <div class="button">

          <button><router-link to="/rejoindre">Rejoindre l'association</router-link></button>
        </div>
      </div>
    </div>

  <div class="form_contact">
    <div class="h2_form">
      <h2>ÉCRIVEZ-NOUS</h2>
    </div>
    <form id="contact" action="mailto:marinebeurier22@gmail.com" method="post" enctype="text/plain">
      <div class="nom">
        <input type="text" name="Nom" placeholder="Nom" required>
      </div>
      <div class="prenom">
        <input type="text" name="Prenom" placeholder="Prénom" required><br>
      </div>
      <div class="mail">
        <input type="text" name="E-mail" placeholder="E-mail" required>
      </div>
      <div class="msg">
        <textarea id="msg" placeholder="Message" name="Message" required cols="30" rows="5"></textarea>
      </div>
      <div class="envoyer">
        <button type="submit">
          <div id="carre">
            <i class="fas fa-paper-plane fa-2x"></i>
          </div>
        </button>
      </div>
    </form>
  </div>

  <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.06562960039!2d7.11305811568506!3d47.50811307917829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791f48b654f3c65%3A0x4318a1d74cc85455!2s10%20Rue%20des%20Fontaines%2C%2090370%20R%C3%A9ch%C3%A9sy!5e0!3m2!1sfr!2sfr!4v1639736733804!5m2!1sfr!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div class="article" v-for="article_association in articles_association" :key="article_association.id">
      <div class="article_1">
        <h2>Article 1 : DÉNOMINATION DE L'ASSOCIATION</h2>
        <p v-html="article_association.acf.article_1"></p>
      </div>
       <div class="article_2">
         <h2>Article 2 : BUTS DE L'ASSOCIATION</h2>
         <p v-html="article_association.acf.article_2"></p>
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
            contacts: [],
            asso_presentations : [],
            articles_association : [],
            textes_rejoindre : [],
          }
        },
        mounted() {
          axios.get('http://csv/wordpress/wp-json/wp/v2/asso_presentation').then((response) => {
            this.asso_presentations = response.data;
          });
          axios.get('http://csv/wordpress/wp-json/wp/v2/contact').then((response) => {
            this.contacts = response.data;
          });
          axios.get('http://csv/wordpress/wp-json/wp/v2/article_association').then((response) => {
            this.articles_association = response.data;
          });

          axios.get('http://csv/wordpress/wp-json/wp/v2/texte_rejoindre').then((response) => {
            this.textes_rejoindre = response.data;
          });
        },
      }
</script>
<style scoped>
.article_2 h2{
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

.article_1 h2{
  padding: 20px 0 0 20px;
  margin-top: 0;
}

.association {
  margin: 10px;
}

.contact h2{
  margin-left: 15px;
}

</style>