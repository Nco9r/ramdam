<template>
  <header>
    <div class="box_header">
      <div class="header_items" @click="openMenu = !openMenu">
        <div class="hamburger">
          <span></span>
        </div>
        <div class="text_hamburger">
          <p>Menu</p>
        </div>
      </div>
      <div class="header_logo">
        <p><span class="green">RAM</span><span class="yellow">DAM</span></p>
      </div>
    </div>
    
    <div class="box_header_items" v-if="openMenu">
      <transition name="appearMenu" appear>
      <div class="overlay" @click="openMenu = !openMenu"></div>
      </transition>
      <transition name="slide" appear>
      <div class="header_items_open">
        <div class="title_menu_open">
          <p><span class="green">RAM</span><span class="yellow">DAM</span></p>
          <p @click="openMenu = !openMenu">X</p>
        </div>
        <div class="items">
          <hr />
          <div class="item">
            <div class="title_item">
              <p>Mes bordereaux</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.43"
                height="10.649"
                viewBox="0 0 6.43 10.649"
              >
                <path
                  id="angle-down_2_"
                  data-name="angle-down (2)"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,1,0-1.41,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59a1,1,0,0,0,0-1.42Z"
                  transform="matrix(-0.017, -1, 1, -0.017, -8.576, 17.557)"
                  fill="#202020"
                />
              </svg>
            </div>
            <div class="behind_item">
              <p>Brouillon</p>
              <p>Pour action</p>
              <p>Suivi</p>
              <p>Archivé</p>
            </div>
          </div>
          <hr />
          <div class="item">
            <div class="title_item">
              <p>Transport</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.43"
                height="10.649"
                viewBox="0 0 6.43 10.649"
              >
                <path
                  id="angle-down_2_"
                  data-name="angle-down (2)"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,1,0-1.41,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59a1,1,0,0,0,0-1.42Z"
                  transform="matrix(-0.017, -1, 1, -0.017, -8.576, 17.557)"
                  fill="#202020"
                />
              </svg>
            </div>
            <div class="behind_item">
              <p>À collecter</p>
              <p>Collecté</p>
            </div>
          </div>
          <hr />
          <div class="item">
            <div class="title_item">
              <p>Clients</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.43"
                height="10.649"
                viewBox="0 0 6.43 10.649"
              >
                <path
                  id="angle-down_2_"
                  data-name="angle-down (2)"
                  d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,1,0-1.41,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59a1,1,0,0,0,0-1.42Z"
                  transform="matrix(-0.017, -1, 1, -0.017, -8.576, 17.557)"
                  fill="#202020"
                />
              </svg>
            </div>
            <div class="behind_item">
              <p>Fiche clients</p>
            </div>
          </div>
          <hr />
        </div>
        <div class="bans_header">
          <div class="logo">
            <img src="@/assets/img/svg/logo_RF.svg" alt="" />
          </div>
          <div class="btn_exit">
            <nuxt-link to="/login"><button>Déconnexion</button></nuxt-link>
          </div>
          <div class="bans">
            <p><strong>©Ramdam</strong> - 2021</p>
          </div>
        </div>
      </div>
      </transition>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
    }
  }
}
</script>

<style scoped>
/* De base */

.green {
  color: var(--green);
  font-weight: 700;
}

.yellow {
  color: var(--yellow);
  font-weight: 700;
}

/* Initialisation header */

header {
  background-color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  -webkit-box-shadow: 3px 3px 3px #e0e0e0;
  box-shadow: 3px 3px 3px #e0e0e0;
}

/* Contenu header */

.box_header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 30px 20px;
  width: 100%;
}

.header_items {
  display: flex;
  flex-flow: row;
  align-items: center;
}

/* Hamburger */

.hamburger {
  display: flex;
  flex-flow: column;
  margin-right: 10px;
}

.hamburger span {
  width: 20px;
  height: 2px;
  position: relative;
  background-color: var(--black);
}

.hamburger span::before {
  position: absolute;
  top: -7px;
  content: '';
  width: 20px;
  height: 2px;
  background-color: var(--black);
}

.hamburger span::after {
  position: absolute;
  top: 7px;
  content: '';
  width: 20px;
  height: 2px;
  background-color: var(--black);
}

.text_hamburger {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
}

/* Logo Ramdam */

.header_logo p {
  font-size: 24px;
}

/* Menu Open */

.overlay {
  position: fixed;
  z-index: 2;
  background-color: rgba(30, 30, 30, 0.6);
  inset: 0;
}

.header_items_open {
  position: fixed;
  z-index: 3;
  background-color: var(--white);
  top: 0;
  left: 0;
  padding: 20px 15px;
  right: 100px;
  bottom: 0;
}

.title_menu_open {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

.title_menu_open p:nth-child(1) {
  font-size: 26px;
}

.title_menu_open p:nth-child(2) {
  font-weight: 700;
  color: var(--red);
}

.items {
  margin-top: 30px;
}

.item {
  margin-bottom: 20px;
}

.items hr {
  margin: 0 -15px;
  border: none;
  width: 250;
  height: 1px;
  background-color: var(--gray);
}

.title_item {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.title_item p {
  font-size: 16px;
  font-weight: 700;
  color: var(--black);
}

.behind_item {
  margin-top: 10px;
  margin-left: 5px;
}

.behind_item p {
  margin-bottom: 5px;
  color: var(--gray-body);
}

.bans_header {
  position: fixed;
  bottom: 0;
  left: 20px;
  right: 125px;
}

.btn_exit {
  margin-top: 20px;
  margin-bottom: 30px;
}

.btn_exit button {
  border: none;
  background-color: var(--red);
  outline: none;
  color: var(--white);
  border-radius: 4px;
  width: 230px;
  padding: 15px;
  -webkit-box-shadow: 3px 3px 3px #e0e0e0;
  box-shadow: 3px 3px 3px #e0e0e0;
  font-size: 14px;
  font-weight: 700;
}

.bans {
  background-color: var(--yellow);
  padding: 15px;
  width: 275px;
  margin: 20px -25px 0 -20px;
}


/* TRANSITION */

.appearMenu-enter-active {
  animation: opacity 0.3s;
}

.appearMenu-leave-active {
  animation: opacityClose 0.3s;
}



.slide-enter-active {
  animation: slide 0.3s;
}

.slide-leave-active {
  animation: slideClose 0.3s;
}

@keyframes slide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideClose {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes opacityClose {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}




</style>
