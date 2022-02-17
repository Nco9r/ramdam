<template>
  <div>
    <nav-bar class="navbar" />
   
   <div class="top_bsdasris">
      <div class="box_top">
        <nuxt-link to="/">
          <div class="return_1">
           <h2></h2>
            <h5>Mes Bordereaux</h5>
            <h5></h5>
          </div>
        </nuxt-link>
          <div class="top_fiche_client">
          <div class="title">
              <h2>Recherche par nom d'entreprise</h2>
          </div>
          <input type="text" class="search" placeholder="recherche" v-model="searchclient">

      </div>
        
       
      </div>
    </div>
    <main class="index main">
     <div class="state_bsd">
       <div class="title_state">
         <p>État</p>
         <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#008000" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>
       </div>
       <div class="box_state">
        
          <div class="item_state">
           <nuxt-link to="/">
            <p>Action</p>
           </nuxt-link>
         </div>
         <div class="item_state">
           <nuxt-link to="/bsdasris/follow">
            <p>Suivi</p>
           </nuxt-link>
         </div>
         <div class="item_state">
           <nuxt-link to="/bsdasris/story">
            <p>Archives</p>
           </nuxt-link>
         </div>
       </div>
     </div>
      <div class="main_tr">
        <div class="none_tr">
          <img src="@/assets/img/svg/collecte.svg" alt="" />
          <h2>Il n'y a aucun bordereau à collecter</h2>
          <p>
            Des bordereaux apparaissent dans cet onglet lorsqu'ils sont en
            attente de collecte par votre entreprise.
          </p>
          <nuxt-link to="/choose-events"><button><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="#008000" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"/></svg>Créer un bordereau</button></nuxt-link>
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
  data() {
    return {
      searchclient: ''
    }
  }
}
</script>

<style scoped>


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

.top_bsdasris {
  position: fixed;
  background-color: var(--green);
  top: 0;
  left: 0;
  z-index: 2;
  padding: 20px;
  right: 0;
  height: 120px;
  /* border-bottom: 1px solid var(--gray-step); */
}

.box_top {
  display: flex;
  flex-flow: column;
  z-index: 2;
}

.return_1 {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
}

.return_1 h5 {
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
}

.top_fiche_client {
  margin-top: 20px;
  z-index: 2;
}


.title {
    margin-bottom: 5px;
}

.title h2 {
    font-size: 14px;
    color: var(--white);
}

.box_client {
    margin-top: 220px;
    padding: 0 15px;
}

.state_bsd {
  top: 120px;
  position: fixed;
  padding: 20px 0 20px 20px;
  height: 130px;
  z-index: 1;
  border-bottom: 1px solid var(--gray-step);
  left: 0;
  background-color: var(--bck);
  right: 0;
}

.title_state {
  margin-top: 20px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

.title_state p {
  font-weight: bold;
  color: var(--black);
}

.title_state svg {
  width: 20px;
  margin-right: 20px;
}

.box_state {
  display: flex;
  flex-flow: row nowrap;
  margin-top: 5px;
  overflow-x: scroll;
}

.box_state::-webkit-scrollbar {
display: none;
}

.nuxt-link-exact-active p {
  background-color: var(--yellow)!important;
  color: var(--black)!important;
  font-weight: 700!important;
  border: 1Px solid var(--yellow)!important;

}

.item_state {
  margin-right: 15px;
}

.item_state a p{
  color: var(--gray-body);
  padding: 10px;
  width: 100px;
  border: 1px solid var(--gray-step);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--white);
}


.none_tr {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin-top: 290px;
  text-align: center;
}

.none_tr h2 {
  font-size: 16px;
  margin-top: 20px;
}

.none_tr img {
  width: 50%;
}

.none_tr p {
  line-height: 22px;
  margin-top: 10px;
  color: var(--gray-body);
}

.none_tr svg {
  width: 20Px;
  margin-right: 5px;
}

.none_tr button {
  border: none;
  padding: 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Work sans', sans-serif;
  margin-top: 10px;
  background-color: transparent;
  border-radius: 2px;
  color: var(--green);
  font-weight: 700;
}



</style>
