
<template>
<div class="mx-auto flex w-full max-w-sm flex-col gap-6">
	<div class="flex flex-col items-center">
		<h1 class="text-3xl font-semibold">Sign In</h1>
		<p class="text-sm">Sign in to access your account</p>
	</div>
	<div class="form-group">
		<div class="form-field">
			<label class="form-label">Email address</label>

			<input placeholder="Type here" type="email" class="input max-w-full" />
			<label class="form-label">
				<span class="form-label-alt">Please enter a valid email.</span>
			</label>
		</div>
		<div class="form-field">
			<label class="form-label">Password</label>
			<div class="form-control">
				<input placeholder="Type here" type="password" class="input max-w-full" />
			</div>
		</div>
		<div class="form-field">
			<div class="form-control justify-between">
				<div class="flex gap-2">
					<input type="checkbox" class="checkbox" />
					<a href="#">Remember me</a>
				</div>
				<label class="form-label">
					<a class="link link-underline-hover link-primary text-sm">Forgot your password?</a>
				</label>
			</div>
		</div>
		<div class="form-field pt-5">
			<div class="form-control justify-between">
				<button type="button" class="btn btn-primary w-full">Sign in</button>
			</div>
		</div>

		<div class="form-field">
			<div class="form-control justify-center">
				<a class="link link-underline-hover link-primary text-sm">Don't have an account yet? Sign up.</a>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped>
@font-face {
  font-family: "roboto";
  src: url("font/Roboto.eot"), url("font/Roboto.woff2") format("woff2"),
    url("font/Roboto.woff") url("font/Roboto.svg") format("svg"),
    url("font/Roboto.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.gap-6 {
  gap: 1.5rem; /* Ajustez l'espacement entre ents selon vos besoins */
}

.w-full {
  width: 100%;
}

.max-w-sm {
  max-width: 24rem; /* Ajustez la largeur maximale selon vos besoins */
}

/* Styles pour la section "Sign In" */
.text-3xl {
  font-size: 1.875rem; /* Ajustez la taille de la police selon vos besoins */
}

.font-semibold {
  font-weight: 600;
}

.text-sm {
  font-size: 0.875rem; /* Ajustez la taille de la police selon vos besoins */
}

/* Styles pour les champs du formulaire */


.form-field {
  margin-bottom: 1.5rem; /* Ajustez la marge entre les champs selon vos besoins */
}

.form-label {
  display: block;
  margin-bottom: 0.375rem; /* Ajustez la marge sous les labels selon vos besoins */
  font-size: 0.875rem; /* Ajustez la taille de la police selon vos besoins */
}

.form-label-alt {
  color: #ff0000; /* Couleur pour les messages d'erreur, ajustez selon vos préférences */
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

/* Styles pour les cases cocher et les liens */
.checkbox {
  margin-right: 0.5rem;
}

.link {
  color: #3490dc; /* Couleur du lien, ajustez selon vos rences */
}

.link-primary {
  color: #3490dc; /* Couleur du lien primaire, ajustez selon vos pnces */
}

.link-underline-hover:hover {
  text-decoration: underline;
}

/* Styles pour le bouton "Sign in" */
.btn {
  cursor: pointer;
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.btn-primary {
  background-color: #2c608b; /* Couleur du bouton, ajustez selon vos préférences */
  color: #fff; /* Couleur du texte du bouton, ajustez selon vos préférences */
}

/* Styles pour le lien "Sign up" */
.link-primary.text-sm {
  font-size: 0.875rem; /* Ajustez la taille de la police selon vos besoins */
}
</style>