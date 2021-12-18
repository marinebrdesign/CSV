<template>
  <div class="bloc-modale" v-if="show">
    <div class="overlay">
      <div class="modale card">
        <div class="btn-modale btn btn-danger" @click="emitEvent"><i class="fas fa-times fa-2x"></i></div>
        <div class="cercle_h3">
          <div class="cercle"></div>
          <div class="h3_texte"><h3 id="h_modale_acheter">{{bulletin_editions.numero_annee_bulletin}}</h3></div>
        </div>
        <p id="informations" v-html="bulletin_editions.informations_bulletin"></p>
        <p id="issn" v-html="bulletin_editions.issn_bulletin"></p>
        <p id="isbn" v-html="bulletin_editions.isbn_bulletin"></p>
        <div class="a_cote">
          <div class="img_acheter">
            <img :src="bulletin_editions.image_bulletin.url" alt="bulletin_editions.image_bulletin">
          </div>
          <p v-html="bulletin_editions.sommaire_bulletin"></p>
        </div>
        <p id="prix" v-html="bulletin_editions.prix_bulletin"></p>
        <div class="bouton_panier">
          <div class="btn btn-success"><router-link to="/acheter"><button @click="setRevele(bulletin_editions.id)">Acheter</button></router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "modale_bulletins",
  props: ["show", "bulletin_editions"],
  methods: {
    emitEvent() {
      this.$emit('leaveModal')
    }
  }
};
</script>


<style scoped>

svg {
  color: #0E486D;
  padding: 10px;
}

.a_cote {
  display: flex;
  align-items: center;
}

.a_cote p {
  font-size: 16px;
  padding: 15px;
}

#prix, #informations, #isbn, #issn {
  text-align: center;
  font-weight: 900;
  font-family: lato;
  font-size: 14px;
}

.h3_texte {
  font-size: 18px;
}

.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background-color: rgba(47, 46, 46, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: white;
  color: #333;
  padding: 25px;
  position: relative;
  border-radius: 22px;
  width: 70%;
  margin: 0 auto;
  height: 80%;
  overflow-y: auto;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

.img_acheter {
  height: 265px;
  padding: 15px;
}

.img_acheter img {
  height: 100%;
}

@media screen and (max-width: 3000px) {

  .modale {
    top: 70px;
  }
}
@media screen and (max-width: 992px) {
  .modale {
    top: 90px;
    height: 75%;
  }

  .a_cote {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .img_acheter {
    height: 270px;
  }

  .a_cote p {
    font-size: 14px;
  }

  .cercle_h3 {
    padding-top: 15px;
    padding-left: 5px;
    padding-right: 10px;
  }
}
@media screen and (max-width: 768px) {
  .img_acheter {
    height: 235px;
  }

  #h_modale_acheter {
    font-size: 18px;
  }

  .cercle {
    display: none ;
  }


  #prix, #informations, #isbn, #issn {
    font-size: 12px;
  }

}
</style>