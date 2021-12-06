<template>
  <div class="bloc-modale" v-if="show">
    <div class="overlay">
      <div class="modale card">
        <div class="btn-modale btn btn-danger" @click="emitEvent"><i class="fas fa-times fa-2x"></i></div>
        <div class="cercle_h3">
          <div class="cercle"></div>
          <div class="h3_texte"><h3 id="h_modale_acheter">{{cahier.numero_annee_cahier}}</h3></div>
        </div>
        <p id="auteur" v-html="cahier.auteur_et_titre_cahier"></p>
        <p id="informations" v-html="cahier.informations_cahier"></p>
        <p id="isbn" v-html="cahier.isbn_cahier"></p>
        <div class="a_cote">
          <div class="img_acheter">
            <img :src="cahier.image_cahier.url" alt="cahier.image_cahier">
          </div>
          <p v-html="cahier.description_cahier"></p>
        </div>
        <p id="prix" v-html="cahier.prix_cahier"></p>
        <div class="bouton_panier">
          <div class="btn btn-success"><button @click="setRevele(cahier.id)">Ajouter au panier</button></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "modale_cahiers",
  props: ["show", "cahier"],
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

#auteur {
  font-size: 16px;
  width: 95%;
  margin: 0 auto;
}

#prix, #informations, #isbn {
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

  .a_cote p, #auteur {
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


  #prix, #informations, #isbn {
    font-size: 12px;
  }

}
</style>