<template>
  <footer>
    <div class="container">
      <router-link to="/" class="logo-font">Medium Clone</router-link>
      <span class="attribution">
        A Real World Vue project from <a href="https://kriss.io">Kriss</a>.
      </span>
    </div>
  </footer>
</template>

<style>
footer {
  background: #373a3c;
  margin-top: 3rem;
  padding: 1rem 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
footer .logo-font {
  vertical-align: middle;
}
footer .attribution {
  vertical-align: middle;
  margin-left: 10px;
  font-size: 0.9rem;
  color: #FFF;
  font-weight: 300;
}
</style>