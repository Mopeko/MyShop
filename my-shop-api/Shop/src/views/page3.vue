<template>

    <body>
      <header>
          <nav>
              <ul class="container">
                  <ul class="test">
                      <img class="logo" src="../image/logo.png" alt="logo">
                      <menuBarre/>
                      <id class="police2">
                          <li>HOME </li>
                      </id>
                      <id class="police2">
                          <li>SETTINGS </li>
                      </id>
                      <id class="police2">
                          <li>PROFIL </li>
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
          <ul class="parent">
              <class class="div1">
                  <id class="police2">
                      <li class="gris">FILTER BY</li>
                  </id>
                  <id class="police3">
                      <li>Collection</li>
                  </id>
                  <select class="type_of_sort2">
                      <option value="au"></option>
                      <option value="ca">Wood</option>
                      <option value="usa">Modern</option>
                  </select>
                  <id class="police3">
                      <li>Color</li>
                  </id>
                  <select class="type_of_sort2">
                      <option value="au"></option>
                      <option value="ca">White</option>
                      <option value="usa">Brown</option>
                  </select>
                  <id class="police3">
                      <li>Category</li>
                  </id>
                  <select class="type_of_sort2">
                      <option value="au"></option>
                      <option value="ca">Kitchen</option>
                      <option value="usa">Room</option>
                  </select>
                  <id class="police3">
                      <li>Price change</li>
                  </id>
                <input type="range" id="nutnut" name="volume" min="0" max="11">
                  <id class="police2">
                    <ul class="meow">
                      <li>$0</li>
                      <li>$10,000</li>
                    </ul>
                  </id>
                  </class>
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
              <div class="div3"><img class="image" src="../image/blanc.png" alt="">
                  <ul class="wouaf">
                      <id class="police1">
                          <li>Keev Set</li>
                      </id>
                      <id class="police2">
                        <li>$590</li>
                      </id>
                  </ul>
                  
                  <id class="police2">
                      <li class="grisfin">TABLE & CHAIRS</li>
                  </id>
                  <id class="panetoile"><div class="etoileu"><span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span></div>
                      <img class="panier" src="../image/panier.png" alt="ajout au panier"></id>
              </div>
              <div class="div4"><img class="image" src="../image/chaises dehors.png" alt="">
                  <ul class="wouaf">
                      <id class="police1">
                          <li>Nillè</li>
                      </id>
                      <id class="police2">
                          <li>$950</li>
                      </id>
                  </ul>
                  
                  <id class="police2">
                      <li class="grisfin">ARMCHAIR</li>
                  </id>
                  <id class="panetoile"><div class="etoileu"><span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span></div>
                      <img class="panier" src="../image/panier.png" alt="ajout au panier"></id>
              </div>
              <div class="div5"><img class="image" src="../image/réveil.png" alt="">
                  <ul class="wouaf">
                      <id class="police1">
                          <li>Blanko</li>
                      </id>
                      <id class="police2">
                        <li>$90</li>
                      </id>
                  </ul>
                  
                  <id class="police2">
                      <li class="grisfin">SIDE TABLE</li>
                  </id>
                  <id class="panetoile"><div class="etoileu"><span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span></div>
                      <img class="panier" src="../image/panier.png" alt="ajout au panier"></id>
              </div>
              <div class="div6"><img class="image" src="../image/bibli.png" alt="">
                  <ul class="wouaf">
                      <id class="police1">
                          <li>Momo</li>
                      </id>
                      <id class="police2">
                          <li>$890</li>
                      </id>
                  </ul>
                  
                  <id class="police2">
                      <li class="grisfin">SHELVES</li>
                  </id>
                  <id class="panetoile"><div class="etoileu"><span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span></div>
                      <img class="panier" src="../image/panier.png" alt="ajout au panier"></id>
              </div>
              <div class="div7"><img class="image" src="../image/chaise.png" alt="">
                  <ul class="wouaf">
                      <id class="police1">
                          <li>Penemillè</li>
                      </id>
                      <id class="police2">
                          <li>$120</li>
                      </id>
                  </ul>
                  
                  <id class="police2">
                      <li class="grisfin">CHAIR</li>
                  </id>
                  <id class="panetoile"><div class="etoileu"><span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span></div>
                      <img class="panier" src="../image/panier.png" alt="ajout au panier"></id>
              </div>
              <div class="div8"><img class="image" src="../image/bizarre.png" alt="bizarre">
                  <ul class="wouaf">
                      <id class="police1">
                          <li>Kappu</li>
                      </id>
                      <id class="police2">
                          <li>$420</li>
                      </id>
                  </ul>
                  
                  <id class="police2">
                      <li class="grisfin">SHELVES</li>
                  </id>
                  <id class="panetoile"><div class="etoileu"><span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span></div>
                      <img class="panier" src="../image/panier.png" alt="ajout au panier"></id>
              </div>
          </ul>
      </main>
      <footer>
          <ul class="footer_menu">
  
            <RouterLink to="/"><li class="menu1">1</li></RouterLink>
              <RouterLink to="/page2"><a href = "#"><li class="menu">2</li></a></RouterLink>
              <a href = "#"><li class="menu">3</li></a>
              <a href = "#"><li class="menu">4</li></a>
              <a href = "#"><li class="menu">5</li></a>
              <a href = "#"><li class="menu">6</li></a>
              <a href = "#"><li class="menu">7</li></a>
              <a href = "#"><li class="menu">8</li></a>
              <a href = "#"><li class="menu">9</li></a>
              <a href = "#"><li class="menu">10</li></a>
              <a href = "#"><li class="menu">></li></a>
          </ul> 
      </footer>
  </body>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router'
          export default{
            data(){
                return{
                  message : "Hello wolrd"
                };
            },
          };
  </script>
  
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
    margin-bottom: 5%;
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
    margin-right: 20%;
    padding-left: 3%;
  }
  #nutnut{
    width: 80%;
  }
  
  .wouaf {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30%;
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
  </style>