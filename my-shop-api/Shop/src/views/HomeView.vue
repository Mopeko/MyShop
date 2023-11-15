
<template>
<header>
<nav class="menu bg-gray-2 p-2 rounded-md">
	<section class="menu-section">
		<ul class="menu-items">
			<li class="menu-item">General</li>
			<li class="menu-item">Shop</li>
			<li class="menu-item"><RouterLink to="/login">Login</RouterLink></li>
			<li class="menu-item">Settings</li>
        <div class="input-field">
          <input id="name" type="text" required />
            <label for="name">
               <id>Search...</id>
            </label>
        </div>
		</ul>
	</section>
</nav>
</header>
<main>
  <ul class="wouaf">
                    <id class="police1">
                        <li>Coombes</li>
                    </id>
                        <li>$2,600</li>
                </ul>
                <id class="police2">
                    <li class="grisfin">LOUNGE</li>
                </id>
                <id class="panetoile"><div class="etoileu"><span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span></div>
                    <img class="panier" src="image/panier.png" alt="ajout au panier"></id>
</main>
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

#app {
  display: flex;
  margin: 0px;
}
.menu {
  width: 240px; /* Ajustez la largeur selon vos besoins */
}

/* Style de fond et d'espacement */
.bg-gray-2 {
  background-color: #f3f4f6; /* Remplacez par la couleur de fond souhaitée */
}

.p-2 {
  padding: 0.5rem; 
}

.rounded-md {
  border-radius: 0.375rem;
}

.menu-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Style des items du menu */
.menu-item {
  padding: 0.75rem 1.5rem; /* Ajustez l'espacement interne selon vos besoins */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Animation de transition de couleur de fond */
}

/* Style de survol des items du menu */
.menu-item:hover {
  background-color: #e5e7eb; /* Couleur de fond au survol, remplacez selon vos préférences */
}

</style>
