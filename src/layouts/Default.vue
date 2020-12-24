<template>
  <div class="container">
    <div class="layout">
      <div class="header-a">
        <div class="tablet">
          <p class="text">Prenota una check-up gratuito completo</p>
          <div class="header-btn">
            <button class="btn">
              <a href="tel:+393351030301">CHIAMA ORA il 335 103 03 01</a>
            </button>
          </div>
        </div>
        <p class="text">email: stefano.frontini@con.repower.com</p>
        <div class="header-i">
          <HeaderIcons />
        </div>
      </div>

      <div class="ste">
        <header class="header-b">
          <g-link to="/"
            ><g-image
              src="~/assets/logo-pillole-di-energia.svg"
              alt="logo pillole di energia"
              width="100"
          /></g-link>
          <nav class="navbar" :class="{ 'nav-active': isActive }">
            <g-link class="nav__link" to="/chi-sono/">Chi sono</g-link>
            <g-link class="nav__link" to="/testimonianze/"
              >Testimonianze</g-link
            >
            <g-link class="nav__link" to="/check-up-energetico/"
              >Check-up energetico</g-link
            >
            <g-link class="nav__link" to="/blog/">Blog</g-link>
            <g-link class="nav__link" to="/mercato/">Mercato</g-link>
            <g-link class="nav__link" to="/mercato-auto-elettriche/"
              >Auto Elettriche</g-link
            >

            <g-link class="nav__link" to="/episodi/">Impara</g-link>
            <g-link class="nav__link" to="/analisi-iva-accise-agevolate/"
              >Check-up iva accise</g-link
            >
            <g-link class="nav__link" to="/energia-in-numeri/">Numeri</g-link>
            <g-link class="nav__link" to="/contatti/">Contatti</g-link>
          </nav>
          <div class="burger" @click="toggleMenu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </header>
      </div>
      <slot />

      <footer class="footer">
        <div class="footer-a">
          <Icons />
        </div>
        <div class="footer-b">
          <div class="contact">
            <p>
              <span class="footer-logo"
                >pillole di energia © {{ new Date().getFullYear() }}</span
              >
              <br /><strong
                >Stefano Frontini consulente energetico per ristoranti e
                hotel</strong
              ><br />
              <a href="https://www.pilloledienergia.com/"
                >www.pilloledienergia.com</a
              ><br />
              <a href="mailto:stefano.frontini@con.repower.com"
                >stefano.frontini@con.repower.com</a
              ><br />
              cell: 335.103.03.01
            </p>
            <p>
              I tuoi dati sono al sicuro. Leggi l'<g-link to="/privacy"
                >informativa privacy</g-link
              >.
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</static-query>
<script>
import Icons from "../components/Icons.vue";
import HeaderIcons from "../components/HeaderIcons.vue";

export default {
  components: {
    Icons,
    HeaderIcons,
  },
  data: () => ({
    isActive: false,
  }),
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=GFS+Didot&display=swap");

@font-face {
  font-family: "radnika-medium";
  src: url("~@/assets/fonts/Radnika-Medium.otf") format("woff"),
    url("~@/assets/fonts/Radnika-Medium.otf") format("opentype"),
    url("~@/assets/fonts/Radnika-Medium.otf") format("truetype");
  font-display: swap;
}

html,
body {
  font-family: "GFS Didot", serif;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  box-sizing: border-box;
  color: #1b1b1b;
  overflow-x: hidden;
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "radnika-medium", sans-serif;
}

::selection {
  background: $primaryColor; /* WebKit/Blink Browsers */
  color: white;
}
::-moz-selection {
  background: $primaryColor; /* Gecko Browsers */
  color: white;
}

a {
  text-decoration: none;
  color: $primaryColor;
}

a:hover {
  color: #ffad3b;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset !important;
  -webkit-box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset !important;
  background-color: rgba(0, 0, 0, 0) !important;
  background-clip: content-box !important;
}

.nav__link.active--exact.active {
  border-left: 0.2em solid $primaryColor;
  color: $primaryColor;
  padding: 0 5px;
}

.radnika {
  font-family: "radnika-medium", sans-serif;
}

.grassetto {
  font-weight: bold;
}

blockquote::before {
  margin-right: 5px;
  font-size: 1.2em;
}

blockquote {
  border-left: 0.3em solid $primaryColor;
  padding: 0 15px;
  font-family: "radnika-medium", sans-serif;
  font-style: italic;

  quotes: "\201C""\201D""\2018""\2019";
}

blockquote::after {
  margin-left: 5px;
  font-size: 1.2em;
}

.container {
  display: flex;
  justify-content: center;
}

.layout {
  width: 100%;
}

.ste {
  max-width: 1200px;
  margin: 0 auto;
}

.text {
  text-align: center;
  color: white;
  font-size: 1em;
  margin: 0.1em;
}

.header-btn {
  display: flex;
  justify-content: center;
}

.btn {
  text-align: center;
  background-color: $primaryColor;
  cursor: pointer;

  border: none;
  font-weight: bold;
}
.btn a {
  text-decoration: none;
  color: white;
}

.header-a {
  background-color: #1b1b1b;
  margin-bottom: -1em;
  padding: 0.3em;
}

.header-i {
  display: none;
  justify-content: center;
}

.header-b {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5em;
  padding-top: 1em;
}

.nav__link {
  text-decoration: none;
  font-family: "radnika-medium", sans-serif;
  text-transform: uppercase;
  font-size: 0.9em;
}

.footer-a {
  display: flex;
  justify-content: center;
  margin-top: 5em;
}

.footer-b {
  margin-top: 1em;
  display: flex;
  justify-content: center;
  background-color: #1b1b1b;
  color: white;
  font-size: 0.9em;
}

.contact {
  text-align: center;
  a {
    color: white;
  }
  a:hover {
    color: $primaryColor;
  }
}

.footer-logo {
  text-transform: uppercase;
  color: $primaryColor;
  font-size: 0.9em;
}

.burger {
  cursor: pointer;
}

.line {
  width: 25px;
  height: 3px;
  background-color: #1b1b1b;
  margin: 5px;
}

.navbar {
  position: absolute;
  right: 0px;
  height: 79vh;
  top: 21vh;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  transform: translateX(100%);
  opacity: 1;
  transition: transform 0.5s ease-in;
  justify-content: space-around;
  z-index: 10;
  font-size: 0.9em;
}
.nav-active {
  transform: translateX(0%);
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1.5s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

@media (min-width: 370px) {
  .navbar {
    font-size: 1em;
  }
}

@media (min-width: 550px) {
  .navbar {
    height: 62vh;
    top: 38vh;
  }
}

@media (min-width: 1000px) {
  .footer-b {
    font-size: 1em;
  }
}

@media (min-width: 1200px) {
  body {
    font-size: 18px;
  }
  .burger {
    display: none;
  }
  .navbar {
    position: static;
    flex-direction: row;
    transform: translateX(0%);
    height: 0em;
    width: 88%;
    justify-content: space-around;
    font-size: 0.8em;
  }
  .nav__link {
    color: #1b1b1b;
  }
  .header-b {
    justify-content: space-between;
    padding: 0 1em 0 1em;
    position: relative;
  }
  .tablet {
    display: none;
  }
  .text {
    text-align: left;
    margin: 0;
  }
  .header-i {
    display: inline-block;
    width: 50%;
  }
  .header-a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em 0 2.5em;
    margin-bottom: 0em;
  }
}
</style>
