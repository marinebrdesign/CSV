<template>
  <div class="bloc-modale" v-if="show">
    <div class="overlay">
      <div class="modale card">
        <div class="btn-modale btn btn-danger" @click="emitEvent"><i class="fas fa-times fa-2x"></i></div>
        <h3 id="h_modale">{{commune.nom_commune}}</h3>
        <p id="modale" v-html="commune.texte_commune"></p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Modale",
  props: ["show", "commune"],
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

#modale {
  text-align: left;
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
  background-color: #0E486D;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

/*.modale {
  background: white;
  color: #333;
  padding: 25px;
  position: fixed;
  margin: 15px;
  top: 10px;
  border-radius: 22px;
}*/
.modale {
  background: white;
  color: #333;
  padding: 25px;
  position: relative;
  border-radius: 22px;
  width: 90%;
  margin: 0 auto;
  height: 80%;
  overflow-y: auto;
  top: 35px;
}


.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}

@media screen and (max-width: 3000px) {

 /* .modale {
    background: white;
    color: #333;
    padding: 25px;
    position: fixed;
    margin: 15px;
    top: 10px;
    height: 70%;
    border-radius: 22px;
  }
*/
}
@media screen and (max-width: 768px) {
 /* .modale {
    background: white;
    color: #333;
    padding: 25px;
    position: fixed;
    margin: 15px;
    top: 10px;
    height: 89%;
    border-radius: 22px;
  }*/

  .modale {
    width: 70%;
  }
}

</style>