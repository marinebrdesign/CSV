<template>
        <div>
<header>
  <nav class="navbar" role="navigation" :class="showNav?'show-nav':''">
    <div class="navbar__logo"><div class="csv">CSV /</div> <span>CŒUVATTE-SUARCINE-VENDELINE</span></div>
    <ul class="navbar__links">
      <li class="navbar__link"><router-link to="/">ACCUEIL</router-link></li>
      <li class="navbar__link"><router-link to="/association">ASSOCIATION</router-link></li>
      <li class="navbar__link"><router-link to="/editions">ÉDITIONS</router-link></li>
      <li class="navbar__link"><router-link to="/communes">COMMUNES</router-link></li>
      <li class="navbar__link"><router-link to="/press_book">PRESS BOOK</router-link></li>
      <li class="navbar__link"><router-link to="/liens">LIENS</router-link></li>
    </ul>
    <button class="burger" @click="toggleMenu">
      <span class="bar"></span>
    </button>
  </nav>
</header>

</div>
</template>
<script>
export default {
  data(){
    return {
      showNav: false,
    }
  },
  mounted(){
  },
  methods:{
    toggleMenu() {
      this.showNav = !this.showNav
    }
  },
}
</script>
<style scoped>
h3 {
  margin-top: 0;
  padding: 35px 0 0 15px;
  font-weight: 400;
}

.navbar__logo {
  font-family: "Bebas Neue";
  font-size: 18px;
  padding-left: 20px;
  z-index: 4;
}

.csv, span, .csv_2 {
  display: inline-block;
}

/* Variables */

/* Reset */
* {
  box-sizing:border-box;
  outline:none;
  margin:0;
  padding:0;
}
ul {
  list-style:none;
}
/* Navbar */
.navbar {
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:10px;
  background: black;
  color: white;
}
.navbar__links {
  display:flex;
}


.navbar__link > a {
  color:white;
  text-decoration:none;
  font-family: "Bebas Neue";
  font-size: 18px;
}

.navbar__link > a:hover {
  color:#D96B2B;
}
.burger {
  display:none;
}

/*  Small device */
@media screen and (max-width:767.98px) {
  .csv, .csv_2 {
    color: black;
  }

  .navbar {
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:40px 10px 10px 10px;
    background: transparent;
    color: white;
  }

  .navbar__links {
    overflow:hidden;
    display:flex;
    flex-direction:column;
    width:0;
    /*height:calc(110vh - 65px);*/
    top:0;
    right:0;
    bottom: 0;
    left: 0;
    background:white;
    transform: translateX(110%);
    transition: all .5s ease-in-out;
    z-index: 2;
    align-items: center;
    justify-content: center;
    position: fixed;
  }
  .show-nav .navbar__links {

    width:100vw;
    transform: translateX(0);
  }
  .navbar__link {
    transform: translateX(101%);
    transition: all .5s ease-in-out;
  }

  .show-nav .navbar__link  {
    transform: translateX(0);
  }
  .navbar__link > a {
    display:block;
    padding:1rem;
    font-size:50px;
    color:black;
    transition: all .4s ease-in-out;
  }

  .navbar__link > a:hover {
    padding-left:2rem;
    letter-spacing:5px;
  }

  /* Toggle menu */
  .burger {
    display:block;
    position:relative;
    padding:0;
    width:55px;
    height:30px;
    border:none;
    background:transparent;
    cursor:pointer;
    z-index: 4;
  }
  .bar {
    display:block;
    width:15px;
    height:2.5px;
    border-radius:3px;
    background:#D96B2B;
    transition: all .5s ease-in-out;
  }
  .bar::before, .bar::after {
    content:"";
    width:25px;
    height:2.5px;
    position:absolute;
    left:0;
    background:#D96B2B;
    border-radius:3px;
    transition: all .5s ease-in-out;
  }
  .bar::before {
    transform:translateY(-12px);
  }
  .bar::after {
    transform:translateY(12px);
  }
  .show-nav .bar {
    width:0;
    background:transparent;
  }
  .show-nav .bar::before {
    transform:rotate(45deg);
  }
  .show-nav .bar::after {
    transform:rotate(-45deg);
  }

  /* Animations */
  .show-nav .first {
    transition: all 1s ease-out;
  }
  .show-nav .second {
    transition: all 1.1s ease-out;
  }
  .show-nav .third {
    transition: all 1.2s ease-out;
  }
  .show-nav .four {
    transition: all 1.3s ease-out;
  }
  .show-nav .fifth {
    transition: all 1.4s ease-out;
  }
}

/*  Medium device*/
@media screen and (min-width:768px) {
  .navbar__link > a::after {
    display:block;
    content:"";
    width:0;
    height:1px;
    background:#D96B2B;
    transition:width .4s;
  }
  .navbar__link:hover > a::after {
    width:100%;
  }

  .navbar__link {
    padding:0 10px;
  }

  .csv , .csv_2{
    color: white;
  }

  .navbar {
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px;
    font-size:1.1rem;
    background: black;
    color: white;
  }

  .csv_2 {
    display: none;
  }
}
</style>
