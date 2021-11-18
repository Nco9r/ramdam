<template>
  <div>
    <nav-bar class="navbar" />
    <the-header class="header" />
    <main class="index main">
      <div class="top_tr">
        <div class="infos_tr">
          <h1>Transport à collecter</h1>
          <p>Il y a <strong>0</strong> bordereau à collecter</p>
        </div>
        <a href="/">
          <div class="refresh">
            <p>Rafraichir</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#202020"
                d="M19.91,15.51H15.38a1,1,0,0,0,0,2h2.4A8,8,0,0,1,4,12a1,1,0,0,0-2,0,10,10,0,0,0,16.88,7.23V21a1,1,0,0,0,2,0V16.5A1,1,0,0,0,19.91,15.51ZM12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1h4.5a1,1,0,0,0,0-2H6.22A8,8,0,0,1,20,12a1,1,0,0,0,2,0A10,10,0,0,0,12,2Z"
              />
            </svg>
          </div>
        </a>
      </div>
      <div class="main_tr">
        <div class="none_tr">
          <img src="@/assets/img/svg/collecte.svg" alt="" />
          <h2>Il n'y a aucun bordereau à collecter</h2>
          <p>
            Des bordereaux apparaissent dans cet onglet lorsqu'ils sont en
            attente de collecte par votre entreprise.
          </p>
          <nuxt-link to="/create-bsdasri"><button>Créer un bordereau</button></nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/Default/NavBar.vue'
import TheHeader from '../components/Default/TheHeader.vue'
export default {
  components: { TheHeader, NavBar },
}
</script>

<style>
.header {
  z-index: 2;
}

.navbar {
  z-index: 1;
}

.main {
  margin-top: 110px;
  padding: 0 15px;
}

a {
  text-decoration: none;
}

.top_tr {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
}

.infos_tr h1 {
  font-size: 18px;
  font-weight: 700;
  color: var(--black);
  margin-bottom: 3px;
}

.infos_tr p {
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-body);
  margin-bottom: 5px;
}

.refresh {
  display: flex;
  flex-flow: row;
  border: 1px solid var(--gray-body);
  padding: 8px;
  border-radius: 2px;
  align-items: center;
}

.refresh p {
  color: var(--gray-body);
  font-weight: 400;
}

.refresh svg {
  width: 15px;
  margin-left: 5px;
}

.none_tr {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
}

.none_tr h2 {
  font-size: 18px;
  margin-top: 20px;
}

.none_tr p {
  color: var(--gray-body);
  line-height: 22px;
  margin-top: 10px;
}

.none_tr button {
  border: none;
  padding: 15px;
  font-size: 14px;
  font-family: 'Work sans', sans-serif;
  margin-top: 10px;
  border-radius: 2px;
  background-color: var(--green);
  color: var(--white);
  -webkit-box-shadow: 3px 3px 3px #e0e0e0;
  box-shadow: 3px 3px 3px #e0e0e0;
  font-weight: 700;
}


</style>
