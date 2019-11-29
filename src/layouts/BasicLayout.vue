<template>
<div class ="app-layout">
   <nav>
      <h2 class="logo">SM2+ Karteikarten</h2>
      <ul class="nav-links">
        <li><router-link to="/">Übersicht</router-link></li>
        <li><router-link :to="{ name: 'learn'}">Lernen</router-link></li>
        <li><router-link to="/create">Erstellen</router-link></li>
        <li><router-link to="/browse">Karten durchsuchen</router-link></li>
        <li><a href="#">Logout</a></li>
      </ul>
      <div class="burger" v-on:click="openNav()">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
    <div class="nav-overlay"></div>
      <div class="page-container">
            <router-view/>
      </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'BasicLayout',

  data() {
    return {
    leftDrawerOpen: false,
    burger: undefined,
    nav: undefined,
    navLinks: undefined,
    body: undefined,
    navOverlay: undefined,
    displayNavDrawer: false,
    };
  },
  methods: {
    openNav() {
      this.nav.classList.toggle("nav-active");
      this.navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index /
            9}s`;
        }
        console.log(index / 7);
      });
      this.navOverlay.classList.toggle("nav-open");
      this.body.classList.toggle("prevent-scroll");
      this.burger.classList.toggle("toggle");
    },
    initElements() {
      this.burger = document.querySelector(".burger");
      var query = document.querySelector(".burger");
      this.nav = document.querySelector(".nav-links");
      this.navLinks = document.querySelectorAll(".nav-links li");
      this.body = document.querySelector("body");
      this.navOverlay = document.querySelector(".nav-overlay");
    },
  },
  mounted() {
    this.initElements();
  }
};
</script>

<style lang="scss">


nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5vh;

  .logo {
    font-size: 1.4rem;
    align-self: center;
    margin-left: 5vw;
    z-index: 200
  }
}

.nav-links {
  display: flex;
  justify-content: space-around;
  width: 50vw;

  li {
    list-style: none;
    margin: 0px;
  }

  a {
    color: black;
    background-color: none;
    text-decoration: none;
  }
}

/* .burger-menu{
  height: 6vh;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
} */
.burger {
  margin-right: 3vw;
  display: none;

  div {
    align-items: center;
    margin: 3px;
    width: 25px;
    height: 1px;
    background-color: black;
    transition: all 0.3s ease;
  }
}

//mobile nav drawer
@media only screen and (min-width: 300px) and (max-width: 800px) {


  .nav-links {
    background-color: white;
    position: absolute;
    right: 0px;
    height: 100vh;
    top: 0;
    width: 50vw;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    transform: translateX(100%);
    transition: transform 0.4s linear;
    z-index: 201;
    margin: 0;

    li {
      padding: 7vh 0 3vh 0;
      align-self: flex-start;
      height: 5vh;
      opacity: 0;

      a {
        font-size: 1.5rem;
      }
    }
  }

  .burger {
    z-index: 201;
    display: flex;
    flex-direction: column;
  }
}
.nav-active {
  transform: translateX(0%);
  display: flex;
}

.nav-open {
  background: rgba(11, 14, 14, .4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  opacity: 1;
  pointer-events: none;
  transition-duration: .5s;
  overflow-y: hidden;
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 5px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -5px);
}

.prevent-scroll {
  position: fixed;
}

.page-container {
  height: 95vh;
}
</style>
