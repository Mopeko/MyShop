<template>
  <body>
    <header>
        <nav>
            <ul class="container">
                <ul class="test">
                    <img class="logo" src="../image/logo.png" alt="logo">
                    <menuBarre/>
                    <id class="police2">
                        <RouterLink to ='/home'><li class =haut>HOME </li></RouterLink>
                    </id>
                    <id class="police2">
                      <li class =haut>SETTINGS </li>
                    </id>
                    <id class="police2">
                        <RouterLink to ='/profil'><li class =haut>PROFIL </li></RouterLink>
                    </id>
                </ul>
                <div id="mySidenav" class="sidenav">
                    <a id="closeBtn" href="#" class="close">×</a>
                    <ul>
                      <li><a href="#">A propos</a></li>
                      <li><a href="#">Nos services</a></li>
                      <li><a href="#">Témoignages</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                <ul class="test2">
                    <img class="cadie" src="../image/cadis.png" alt="logo">
                    <id class="police2">
                      <li class="menu-item"><RouterLink to="/login">LOGIN</RouterLink></li>
                    </id>
                </ul>
            </ul>
            <ul class="marge">
                <ul class="cont">
                    <img class="loupe" src="../image/loupe.jpeg" alt="loupe">
                    <form action="">
                        <div class="input-field">
                            <input id="name" type="text" required />
                            <label for="name">
                                <id class="police2">Search...</id>
                            </label>
                        </div>
                        <form>
                            <select id="type_of_sort">
                                <id class="police2">
                                    <div class=best>
                                        <option value="au">Best Match</option>
                                    </div>
                                </id>
                                <option value="ca">Lower Price</option>
                                <option value="usa">Higher Price</option>
                            </select>
                        </form>
                    </form>
                </ul>
            </ul>
        </nav>
    </header>
    <main>
        <div class="div2">
                <img class="image" src="../image/salon.png" alt="salon">
                <ul class="wouaf">
                    <id class="police1">
                        <li>Coombes</li>
                    </id>
                    <id class="police2">
                      <li>$2,600</li>
                    </id>
                </ul>
                  <ul class="wouaf">
                    <id class="police2">
                      <li class="grisfin">LOUNGE</li>
                    </id>
                  </ul>
                    
                <id class="panetoile"><div class="etoileu"><span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span></div>
                    <img class="panier" src="../image/panier.png" alt="ajout au panier"></id>
            </div>
    </main>
    </body>
</template>

<style scoped>
@font-face {
  font-family: "roboto";
  src: url("../font/Roboto.eot"), url("../font/Roboto.woff2") format("woff2"),
    url("../font/Roboto.woff") url("../font/Roboto.svg") format("svg"),
    url("../font/Roboto.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Avenir";
  src: url("../font/Avenir-Medium.eot"),
    url("../font/Avenir-Medium.woff2") format("woff2"),
    url("../font/Avenir-Medium.woff") url("../font/Avenir-Medium.svg") format("svg"),
    url("../font/Avenir-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

/* html{
    margin: 0;
    padding: 0;
} */

.image {
  height: 200px;
  width: 250px;
  margin-right: 50px;
}

.parent {
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5%, 0,5fr));
  gap: 100px;
  grid-column-gap: 8px;
}

.div1 {grid-area: 1 / 1 / 2 / 2;}

.div2 {grid-area: 1 / 2 / 2 / 3;}

.div3 {grid-area: 1 / 3 / 2 / 4;}

.div4 {grid-area: 1 / 4 / 2 / 5;}

.div5 {grid-area: 2 / 1 / 3 / 2;}

.div6 {grid-area: 2 / 2 / 3 / 3;}

.div7 {grid-area: 2 / 3 / 3 / 4;}
.div8 {grid-area: 2 / 4 / 3 / 5;}

.nav {
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin-bottom: 50px;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.marge {
  margin: 0;
  padding: 0;
}

.cont {
  margin-left: -20;
  display: flex;
  align-items: center;
}

li {
  list-style: none;
}

.logo {
  width: 20%;
}

.test {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.test2 {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
}

.loupe {
  width: 5%;
}

.cadie {
  width: 35%;
}

.panier {
  width: 10%;
  margin-bottom: 1%;
}

.menu,
.menu1 {
  display: inline-block;
  padding: 1%;
  width: 1%;
  text-align: center;
  color: black;
}

.menu1 {
  background-color: black;
  color: white;
}

.menu:hover {
  background-color: black;
  color: white;
}

.footer_menu {
  list-style: none;
  font-weight: bold;
  font-family: "roboto", sans-serif;
  color: black;
  margin-top: 5%;
}

ul {
  position: relative;
}

/* footer{
    margin-bottom: 90%;
} */

form {
  display: flex;
  width: 100%;
}

label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: black;
  cursor: text;
  transition: all 0.3s;
}

.input-field {
  position: relative;
  width: 73.9%;
  height: 44px;
  line-height: 44px;
  margin: 0;
}

input {
  width: 90%;
  border: 0;
  outline: 0;
  padding: 0.74rem 0;
  border-bottom: 2px solid black;
  box-shadow: none;
  color: #111;
  transition: all 0.3s;
}

input:focus + label {
  color: black;
  line-height: 10px;
  top: -20px;
}

input:focus {
  border-bottom: 2px solid black;
}

input {
  box-shadow: 0;
  outline: 0;
}


#type_of_sort {
  width: 19%;
  border: none;
  outline: 0;
  border-bottom: 2px solid black;
}

.type_of_sort2 {
  width: 80%;
  border: none;
  outline: 0;
  border-bottom: 2px solid rgb(222, 206, 206);
}

.checked {
  color: black;
}

span {
  color: rgb(210, 192, 192);
}

.police1 {
  font-family: "Avenir", sans-serif, Arial, Helvetica;
}

.police2 {
  font-family: "roboto", sans-serif, Arial, Helvetica;
}

.grisfin {
  color: grey;
  font-size: 70%;
  padding-left: 3%;
  margin-top: 2%;
}

.meow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 100%;
  padding-left: 3%;
}
#nutnut{
  width: 80%;
}

.wouaf {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 60%;
  padding-left: 3%;
}

.panetoile {
  display: flex;
  align-items: center;
}

.police3 {
  font-family: "roboto";
  font-weight: 5;
}

.gris {
  color: rgb(202, 188, 188);
  margin-bottom: 10%;
  font-size: small;
}

.etoileu {
  margin-right: 45%;
  font-size: 10px;
}


.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -250px;
  background-color: #e8e8e8;
  padding-top: 60px;
  transition: left 0.5s ease;
}

.sidenav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Sidenav menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #111;
}

/* Active class */
.sidenav.active {
  left: 0;
}

/* Close btn */
.sidenav .close {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
}

.burger-icon span {
  display: block;
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
}
.menu-item {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: #000000;
  border-radius: 5px;
  font-family: 'YourFont', sans-serif; /* Remplacez 'YourFont' par le nom de la police souhaitée */
  font-size: 16px; /* Modifiez la taille de la police selon vos besoins */
  transition: background-color 0.3s ease, color 0.3s ease; /* Ajoutez la transition pour une animation fluide */
}

a{
  color: #fff;
}

.menu-item:hover {
  background-color: #000000;
  color: #6c6767; /* Changer la couleur au survol si nécessaire */
}
/* Styles spécifiques au composant */

.haut {
  text-decoration: none; /* Supprimer le soulignement du lien */
}

.haut {
  list-style: none; /* Supprimer les puces de la liste */
  display: inline-block;
  margin-right: 15px; /* Espacement entre les éléments de la liste */
  padding: 10px; /* Ajouter un espace autour du texte */
  background-color: #000000; /* Couleur de fond */
  color: #fff; /* Couleur du texte */
  border-radius: 5px; /* Coins arrondis */
  transition: background-color 0.3s ease; /* Animation de transition */
}

.haut:hover {
  background-color: #6c6767; /* Changement de couleur au survol */
}
</style>
