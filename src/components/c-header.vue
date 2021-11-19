<template>
        <div>
<header>

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
  <!--<nav class="navbar" role="navigation">
    <div class="navbar__logo">CSV / <span>CŒUVATTE-SUARCINE-VENDELINE</span></div>
    <ul class="navbar__links">
      <li class="navbar__link"><router-link to="/accueil">ACCUEIL</router-link></li>
      <li class="navbar__link"><router-link to="/association">ASSOCIATION</router-link></li>
      <li class="navbar__link"><router-link to="/editions">ÉDITIONS</router-link></li>
      <li class="navbar__link"><router-link to="/communes">COMMUNES</router-link></li>
      <li class="navbar__link"><router-link to="/press_book">PRESS BOOK</router-link></li>
      <li class="navbar__link"><router-link to="/liens">LIENS</router-link></li>
    </ul>
    <button class="burger">
      <span class="bar"></span>
    </button>
  </nav>-->
</header>

</div>
</template>
<script>
/*function toggleMenu () {
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
  })
}
toggleMenu();*/

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
  },
}
</script>
<style scoped>
h3 {
  margin-top: 0;
  padding: 35px 0 0 15px;
  font-weight: 400;
}

/*variables*/



/*reset*/
* {
  box-sizing: border-box;
  outline: none;
  margin:0;
  padding: 0;
}

ul {
  list-style: none;
}
/*basic style*/

/*navbar*/
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  padding: 10px;
  background: black;
  color: #FFFFFF;
}

.navbar__links {
  display: flex;
}

.navbar__link {
  padding:0 10px;
}

.navbar__link > a {
  color: white;
  text-decoration: none;
}

.burger {
  display: none;
}


/*small devices*/
@media screen and (max-width: 7067.98px) {
  .navbar__links {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 65px);
    position: absolute;
    top: 65px;
    right: 0;
    background: #000000;
    transition:all .5s ease-in-out ;
  }

  .show-nav .navbar__links {
    width: 100%;
  }

  .navbar__link > a {
    display: block;
    padding: 1rem;
    transition:all .4s ease-in-out;
  }

  .navbar__link > a:hover {
    display: block;
    padding-left: 2rem;
    letter-spacing: 5px;
  }
  /*toggle menu*/
  .burger {
    display: block;
    position: relative;
    padding: 0;
    width: 45px;
    height: 45px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .bar {
    display: block;
    width: 45px;
    height: 4px;
    background: #D96B2B;
    border-radius: 3px;
    transition:all .5s ease-in-out ;
  }

  .show-nav .bar {
    width: 0;
    background: transparent;
  }

  .bar::before, .bar::after{
    content: "";
    width: 45px;
    height: 4px;
    position: absolute;
    left: 0;
    background: #D96B2B;
    border-radius: 3px;
    transition:all .5s ease-in-out ;
  }

  .bar::before {
    transform: translateY(-12px);
  }

  .show-nav .bar::before {
    transform: rotate(45deg);
  }

  .bar::after {
    transform: translateY(12px);
  }

  .show-nav .bar::after {
    transform: rotate(-45deg);
  }
}



/*animations*/

/*medium devices*/

@media screen and (min-width: 7068px){
  .navbar__link > a::after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: #D96B2B;
    transition:width .4s;
  }

  .navbar__link:hover >a:hover {
    color: #D96B2B;
  }

  .navbar__link:hover >a::after {
    width: 100%;
    color: #D96B2B;
  }
  
}
</style>
