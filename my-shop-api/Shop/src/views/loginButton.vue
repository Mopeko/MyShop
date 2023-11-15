<template>
<li class="menu-item"><RouterLink to="/login">LOGIN</RouterLink></li>
</template>


<style scoped>
.menu-item {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .login-link {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    color: #fff;
    background-color: #3498db;
    border-radius: 5px;
    font-family: 'YourFont', sans-serif; /* Remplacez 'YourFont' par le nom de la police souhaitée */
    font-size: 16px; /* Modifiez la taille de la police selon vos besoins */
    transition: background-color 0.3s ease, color 0.3s ease; /* Ajoutez la transition pour une animation fluide */
  }
  
  .login-link:hover {
    background-color: #2980b9;
    color: #fff; /* Changer la couleur au survol si nécessaire */
  }
</style>