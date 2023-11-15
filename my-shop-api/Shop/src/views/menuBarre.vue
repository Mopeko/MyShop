<template>
<nav class="menu bg-gray-2 p-2 rounded-md">
	<section class="menu-section">
		<ul class="menu-items">
			<li class="menu-item">General</li>
			<li class="menu-item">Shop</li>
			<li class="menu-item"><RouterLink to="/login">Login</RouterLink></li>
			<li class="menu-item">Settings</li>
		</ul>
	</section>
</nav>
</template>

<script>
export default {
    name: 'menuBarre',
    components : {
    }
}
</script>

<style scoped>
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
