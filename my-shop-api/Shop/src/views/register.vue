<template>
<div class="mx-auto flex w-full max-w-sm flex-col gap-6">
	<div class="flex flex-col items-center">
		<h1 class="text-3xl font-semibold">Register</h1>
		<p class="text-sm">Register to create a new account</p>
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
			</div>
		</div>
		<div class="form-field pt-5">
			<div class="form-control justify-between">
				<button type="button" class="btn btn-primary w-full">Register</button>
			</div>
		</div>

		<div class="form-field">
		</div>
	</div>
</div>
</template>
<script>
import axios from "axios";
export default {
  name: "post-request-set-headers",
  data() {
    return {
      articleId: null
    };
  },
  created() {
    const article = { title: "Vue POST Request Example" };
    const headers = { 
      "Authorization": "Bearer my-token",
      "My-Custom-Header": "foobar"
    };
    axios.post("https://reqres.in/api/articles", article, { headers })
      .then(response => this.articleId = response.data.id);
  }
};
</script>
<style scoped>
@font-face{
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
  gap: 1.5rem;
}

.w-full {
  width: 100%;
}

.max-w-sm {
  max-width: 24rem; 
}

.text-3xl {
  font-size: 1.875rem; 
}

.font-semibold {
  font-weight: 600;
}

.text-sm {
  font-size: 0.875rem; 
}

.form-field {
  margin-bottom: 1.5rem; 
}

.form-label {
  display: block;
  margin-bottom: 0.375rem; 
  font-size: 0.875rem; 
}

.form-label-alt {
  color: #ff0000; 
}

.input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.checkbox {
  margin-right: 0.5rem;
}

.link {
  color: #3490dc; 
}

.link-primary {
  color: #3490dc; 
}

.link-underline-hover:hover {
  text-decoration: underline;
}

.btn {
  cursor: pointer;
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.btn-primary {
  background-color: #2c608b; 
  color: #fff; 
}

.link-primary.text-sm {
  font-size: 0.875rem; 
}
</style>