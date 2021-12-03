<template>
  <div>

      <div class="galerie">
        <h3>Galerie:</h3>
        <div class="back_galerie"></div>
          <section class="carousel">
            <ul class="carousel-items">
              <li class="imag_1">
                <a href=""><img src="../img/accueil/bulletin_15.jpg" alt="imag1" height="356" width="267">
                  <p>The Circle</p></a>
              </li>
              <li class="imag_2">
                <a href=""><img src="../img/accueil/2-10-21.png" alt="imag2" height="357" width="267">
                  <p>Ready Player One</p></a>
              </li>
            </ul>
          </section>
      </div>

  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },

  methods:{
  }
}
</script>
<style scoped>
/*Carousel*/
.carousel{
  color: black;
}
/*Image 1*/
.imag_1 img{
  margin-right: 35px;
  margin-left: 45px;
  box-shadow: #000 0 15px 20px -8px;
}
/*Image 2*/
.imag_2 img{
  margin-right: 35px;
  box-shadow: #000 0 15px 20px -8px;
}
/*Image 3*/
.imag_3 img{
  margin-right: 35px;
  box-shadow: #000 0 15px 20px -8px;
}
/*Image 4*/
.imag_4 img{
  margin-right: 35px;
  box-shadow: #000 0 15px 20px -8px;
}
/*Image 5*/
.imag_5 img{
  margin-right: 35px;
  box-shadow: #000 0 15px 20px -8px;
}
/*Image 6*/
.imag_6 img{
  margin-right: 35px;
  box-shadow: #000 0 15px 20px -8px;
}
/*Image 7*/
.imag_7 img{
  margin-right: 35px;
  box-shadow: #000 0 15px 20px -8px;
}

.bouton .tex-clic p {
  color: white;
  text-decoration: underline;
  margin-left: 75px;
}
.bouton .tex-clic2 p {
  color: white;
  margin-left: 115px;
}

.mailto2 p {
  color: white;
  text-decoration: underline;
}
.mmi_montbe2 p {
  color: white;
  text-decoration: underline;
}

.carousel{
  top: 3700px;
  padding:20px 0 ;
  position: absolute;
  width: 100%;
}

.carousel-items{
  list-style: none;
  padding: 20px 0;
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  margin-left: 17px;
}

/*Image 1*/
.imag_1 p {
  text-align: center
}
/*Image 2*/
.imag_2 p {
  margin-left: 70px;
}
/*Image 3*/
.imag_3 p {
  margin-left: 110px;
}
/*Image 4*/

.imag_4 p{
  margin-left: 100px;
}
/*Image 5*/
.imag_5 p {
  margin-left: 35px;
}
/*Image 6*/
.imag_6 p{
  margin-left: 80px;
}
/*Image */
.imag_7 p{
  margin-left: 95px;
}

li.carousel-items{
  flex: 1 0 320px;
  margin-right:20px;
  scroll-snap-align:center;
}

::-webkit-scrollbar{
  height: 2px;
}

::-webkit-scrollbar-track{
  background-color:white;
}

::-webkit-scrollbar-thumb{
  background-color:white;
}

</style>