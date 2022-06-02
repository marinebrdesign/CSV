<template>

  <div>
    <c-header></c-header>

    <main>
      <div class="renseignements" v-for="renseignement in renseignements" :key="renseignement.id">
        <h1>BON DE COMMANDE</h1>
        <p v-html="renseignement.acf.texte_debut_commande"></p>
      </div>

      <div class="form_commande">
        <form ref="form" @submit.prevent="sendEmail">
          <div class="nom_prenom">
            <label for="nom_prenom">Mme/Mr</label>
            <input type="text" id="nom_prenom" name="nom_prenom" v-model="nom_prenom" required>
          </div>
          <div class="adresse_form">
            <label for="adresse">Adresse postale</label>
            <input type="text" id="adresse" name="adresse" v-model="adresse" required>
          </div>
          <div class="mail">
            <label for="mail">Adresse mail</label>
            <input type="email" id="mail" name="mail"  v-model="mail" required>
          </div>
          <div class="n_fixe">
            <label for="numero_fixe">Numéro de téléphone fixe</label>
            <input type="tel" id="numero_fixe" name="numero_fixe" v-model="numero_fixe">
          </div>
          <div class="n_portable">
            <label for="numero_portable">Numéro de téléphone portable</label>
            <input type="tel" id="numero_portable" name="numero_portable" v-model="numero_portable" required>
          </div>
          <div class="ouvrages">
            <label for="ouvrages">Commande les ouvrages suivants</label>
            <textarea id="ouvrages" name="ouvrages" v-model="ouvrages" required cols="30" rows="5"></textarea>
          </div>
          <div class="montant">
            <label for="montant">Pour un montant de</label>
            <input type="text" id="montant" name="montant" v-model="montant" required>
          </div>
          <div class="frais_port">
            <label for="frais_port">+ frais de port</label>
            <input type="text" id="frais_port" name="frais_port" v-model="frais_de_port" required>
          </div>
          <div class="montant_total">
            <label for="montant_total">Soit un montant total de</label>
            <input type="text" id="montant_total" name="montant_total" v-model="montant_total" required>
          </div>
          <div class="fait_a">
            <label for="fait_a">Fait à</label>
            <input type="text" id="fait_a" name="fait_a" v-model="fait_a" required>
          </div>
          <div class="date">
            <label for="date">Le</label>
            <input type="date" id="date" name="date" v-model="date" required>
          </div>
          <div class="valider">
            <button type="submit">Valider</button>
       </div>
        </form>
      </div>

      <div id="myModal" class="modal" v-if="modal === true">
        <div class="modal-message modal-content">
          <h1> Message envoyé !</h1>
          <p>Votre commande a été bien reçue, il ne vous reste plus qu'à envoyer le règlement.</p>
          <button class="button1" @click="modal = false">Ok</button>
        </div>
      </div>

      <div class="renseignements"  v-for="renseignement in renseignements" :key="renseignement.id">
        <h2>Pour toute demande de renseignements, s’adresser à la secrétaire de l’association :</h2>
        <div class="centrer">
          <p v-html="renseignement.acf.prenom_nom_secretaire"></p>
          <p v-html="renseignement.acf.adresse_secretaire"></p>
          <p v-html="renseignement.acf.telephone_secretaire"></p>
          <p><a :href="'mailto:' + renseignement.acf.mail_secretaire">{{renseignement.acf.mail_secretaire}}</a></p>
        </div>


        <h2>Toute commande de livres ou bulletins accompagnée de son règlement (chèque à l’ordre de Association CSV) doit être adressée à :</h2>
        <div class="centrer">
          <p v-html="renseignement.acf.prenom_nom_secretaire"></p>
          <p v-html="renseignement.acf.adresse_secretaire"></p>



          <p id="ou">OU</p>

          <p v-html="renseignement.acf.nom_penom_tresorier"></p>
          <p v-html="renseignement.acf.adresse_tresorier"></p>
        </div>

        <p id="renseignement" v-html="renseignement.acf.texte_commande"></p>
      </div>
    </main>
    <c-footer></c-footer>
  </div>
</template>

<script>
import CFooter from '../components/c-footer.vue'
import CHeader from '../components/c-header.vue'
import axios from "axios";
import emailjs from 'emailjs-com';

export default {

  components: {
    CFooter,
    CHeader,
  },
  data() {
    return {
      renseignements: [],
      modal:false,
    };
  },

  mounted() {
    axios.get('https://csv-patrimoine.org/wp-json/wp/v2/renseignement').then((response) => {
      this.renseignements = response.data;
    });
  },

  methods: {
    sendEmail() {
      var text = document.getElementById('form-h1');
      emailjs.sendForm('service_613t8ja', 'template_gg535z4', this.$refs.form, 'aTAH08CeWvYcMui3K')
          .then((result) => {
            console.log('SUCCESS!', result.text);
            this.modal = true;
            text.textContent = "Message envoyé !";
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  },

}

</script>


<style scoped>
h1 {
  color: #D96B2B;
}

form {
  background-color: white;
  width: 80%;
  margin: 40px auto;
  box-shadow: -1px 1px 8px 9px rgb(0 0 0 / 11%);
  border-radius: 22px;
  padding: 30px 0;
}

input, #ouvrages {
  border: none;
  border-radius: 22px;
  background-color: #E8E8E8;
  width: 90%;
  margin: 12px auto;
  padding: 10px 20px;
}

label, input {
  display: flex;
}

label {
  color: black;
  font-family: Lato;
  font-size: 18px;
  padding: 0 15px;
}

.nom_prenom, .adresse_form, .mail, .n_portable, .n_fixe, .fait_a, .date, .ouvrages, .montant, .montant_total, .frais_port {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

span {
  color: red;
}

main {
  width: 100%;
  margin: 35px auto;
}

.centrer p {
  margin: 0;
}

#ou {
  margin:  10px 0;
  font-weight: 700;
}

#myModal {
  display: inline-block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(47, 46, 46, 0.5);


}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  padding: 20px;
  width: 60%;
  height: 255px;
  max-width: 700px;
  background-color: white;
  border-radius: 22px;
}

.modal button, form button {
  border-radius: 22px;
  border: none;
  background-color: #D96B2B;
  color: white;
  padding: 10px;
  width: 140px;
  font-family: Lato;
  font-weight: 700;
  text-transform: uppercase;
}

.valider {
  width: 140px;
  margin: 15px auto;
}

@media screen and (max-width: 3000px) {
  label {
    font-size: 18px;
  }
}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {
  label {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  label {
    font-size: 14px;
  }
}

</style>