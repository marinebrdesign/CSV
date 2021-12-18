<template>
  <div>
    <c-header></c-header>
    <main>
      <h1>REJOINDRE L'ASSOCIATION</h1>
      <div v-for="rejoindre in rejoindre" :key="rejoindre.id">
        <p v-html="rejoindre.acf.renseignement_rejoindre"></p>
      </div>
      <div class="form_adhesion">
        <form id="adhesion" ref="form" @submit.prevent="sendEmail">
          <div class="nom_prenom">
            <label for="nom_prenom"></label>
            <input type="text" id="nom_prenom" name="nom_prenom" placeholder="Mme/Mr" v-model="nom_prenom" required>
          </div>
          <div class="adresse_form">
            <label for="adresse"></label>
            <input type="text" id="adresse" name="adresse" placeholder="Adresse postale" v-model="adresse" required>
          </div>
          <div class="mail">
            <label for="mail"></label>
            <input type="email" id="mail" name="mail" placeholder="Adresse mail" v-model="mail" required>
          </div>
          <div class="n_fixe">
            <label for="numero_fixe"></label>
            <input type="tel" id="numero_fixe" name="numero_fixe" placeholder="Numéro de téléphone fixe" v-model="numero_fixe">
          </div>
          <div class="n_portable">
            <label for="numero_portable"></label>
            <input type="tel" id="numero_portable" name="numero_portable" placeholder="Numéro de téléphone portable" v-model="numero_portable" required>
          </div>
          <div class="fait_a">
            <label for="fait_a"></label>
            <input type="text" id="fait_a" name="fait_a" placeholder="Fait à" v-model="fait_a" required>
          </div>
          <div class="date">
            <label for="date"></label>
            <input type="text" id="date" name="date" placeholder="Le" v-model="date" required>
          </div>
          <div class="valider">
            <button type="submit">Valider</button>
          </div>

        </form>
      </div>

      <div id="myModal" class="modal" v-if="modal === true">
        <div class="modal-message modal-content">
          <h1> Message envoyé !</h1>
          <p>Votre demande a été bien reçue, il ne vous reste plus qu'à envoyer le règlement.</p>
          <button class="button1" @click="modal = false">Ok</button>
        </div>
      </div>

    </main>
    <c-footer></c-footer>
  </div>
</template>


<script>
import CFooter from '../components/c-footer.vue'
import CHeader from '../components/c-header.vue'
import emailjs from 'emailjs-com';
import axios from "axios";

export default {
  components: {
    CFooter,
    CHeader,
  },
  data(){
    return {
      rejoindre: [],
      modal:false,
    }
  },

  mounted() {
    axios.get('http://csv/wordpress/wp-json/wp/v2/rejoindre').then((response) => {
      this.rejoindre = response.data;
    });
  },

  methods:{
    sendEmail() {
      var text = document.getElementById('form-h1');
      emailjs.sendForm('service_9ty2vj4', 'template_r9bk2or', this.$refs.form, 'user_kZqRub6aTgGjWbU0Zpz4d')
          .then((result) => {
            console.log('SUCCESS!', result.text);
            this.modal = true;
            text.textContent = "Message envoyé !";
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
};
</script>

<style scoped>
form {
  background-color: white;
  width: 80%;
  margin: 40px auto;
  box-shadow: -1px 1px 8px 9px rgb(0 0 0 / 11%);
  border-radius: 22px;
  padding: 30px 0;
}

input {
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
}

.nom_prenom, .adresse_form, .mail, .n_portable, .n_fixe, .fait_a, .date {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

h1 {
  color: #D96B2B;
  width: 90%;
  margin: 30px auto;
}

p {
  width: 90%;
  margin: 0 auto;
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
</style>