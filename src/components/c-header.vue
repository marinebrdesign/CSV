<template>
        <div>
<header>
    <!-- menu -->
  <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
    <div class="nav-toggle-bar"></div>
  </div>
  <h3>CSV / <span>CŒUVATTE-SUARCINE-VENDELINE</span></h3>
  <nav class="menu">
    <h3>CSV / <span>CŒUVATTE-SUARCINE-VENDELINE</span></h3>
    <ul>
      <li><router-link to="/accueil" onclick="document.documentElement.classList.toggle('menu-open')">ACCUEIL</router-link></li>
        <li><router-link to="/association" onclick="document.documentElement.classList.toggle('menu-open')">ASSOCIATION</router-link></li>
        <li><router-link to="/editions" onclick="document.documentElement.classList.toggle('menu-open')">ÉDITIONS</router-link></li>
        <li><router-link to="/communes" onclick="document.documentElement.classList.toggle('menu-open')">NOS COMMUNES</router-link></li>
        <li><router-link to="/press_book" onclick="document.documentElement.classList.toggle('menu-open')">PRESS BOOK</router-link></li>
        <li><router-link to="/liens" onclick="document.documentElement.classList.toggle('menu-open')">LIENS</router-link></li>
    </ul>
  </nav>
</header>

</div>
</template>
<script>
export default {
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
