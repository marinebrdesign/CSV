<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale card" v-for="commune in commune" :key="commune.id">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
      <h3>{{commune.acf.nom_commune}}</h3>
      <p>
        {{commune.acf.texte_commune}}
      </p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "Modale",
  props: ["revele", "toggleModale"],
  data() {
    return {
      commune: [],
    };
  },
  async mounted() {
    const result = await axios.get('http://csv/wordpress/wp-json/wp/v2/commune')
    this.commune = result.data;
  },
  methods: {

  }
};
</script>


<style scoped>
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
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 30%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>