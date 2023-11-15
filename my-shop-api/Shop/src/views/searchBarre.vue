<template>
<div class="input-field">
    <input id="name" type="text" required />
      <label for="name">
         <id>Search...</id>
      </label>
  </div>
</template>

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
  </style>