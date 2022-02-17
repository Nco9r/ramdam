<template>
  <div>
    <nav-bar class="navbar" />
    <main>
      <div class="top_bsdasris">
        <div class="box_top">
          <nuxt-link to="/">
            <div class="return_1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.695"
                height="11.709"
                viewBox="0 0 11.695 11.709"
              >
                <path
                  id="arrow-left_1_"
                  data-name="arrow-left (1)"
                  d="M16.725,10.875h-7.4l3.217-3.208a.979.979,0,0,0-1.384-1.384L6.283,11.158a1.008,1.008,0,0,0,0,1.384l4.875,4.875a.979.979,0,1,0,1.384-1.384L9.325,12.825h7.4a.975.975,0,1,0,0-1.95Z"
                  transform="translate(-6.005 -5.996)"
                  fill="#fff"
                />
              </svg>
              <p>Transport</p>
              <p></p>
            </div>
          </nuxt-link>
          <div class="top_fiche_client">
            <div class="title">
              <h2>Recherche par nom d'entreprise</h2>
            </div>
            <input
              type="text"
              class="search"
              placeholder="recherche"
              v-model="searchclient"
            />
          </div>
        </div>
      </div>

      <div class="state_bsd">
        <div class="title_state">
          <p>État</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
          >
            <path
              fill="#008000"
              d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
            />
          </svg>
        </div>
        <div class="box_state">
          <div class="item_state">
            <nuxt-link to="/transport/to-collect">
              <p>À collecter</p>
            </nuxt-link>
          </div>
          <div class="item_state">
            <nuxt-link to="/transport/collected">
              <p>Collecté</p>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="main_tr" v-if="bsdasris.bsdasris.edges === 0">
        <div class="none_tr">
          <img src="@/assets/img/svg/collecte.svg" alt="" />
          <h2>Il n'y a aucun bordereau à collecter</h2>
          <p>
            Des bordereaux apparaissent dans cet onglet lorsqu'ils sont en
            attente de collecte par votre entreprise.
          </p>
          <nuxt-link to="/create-bsdasri"
            ><button>Créer un bordereau</button></nuxt-link
          >
        </div>
      </div>
      <div class="cards_bsd">

        <div class="card" v-for="bsd in filterclient" :key="bsd.id">
         
          <div class="item">
            <div class="img_item">
              <img src="~assets/img/svg/user.svg" alt="" />
            </div>
            <div class="content_item">
              <p>Détenteur</p>
              <p class="uppercase">{{ bsd.node.emitter.company.name }}</p>
            </div>
          </div>
          <div class="item">
            <div class="img_item">
              <img src="~assets/img/svg/files.svg" alt="" />
            </div>
            <div class="content_item">
              <p>Bordereau</p>
              <p>{{ bsd.node.id }}</p>
            </div>
          </div>

          <div class="item">
            <div class="img_item">
              <img src="~assets/img/svg/statut.svg" alt="" />
            </div>
            <div class="content_item">
              <p>Statut</p>
              <p v-if="bsd.node.status === 'INITIAL'" class="statut">Initial</p>
              <p v-if="bsd.node.status === 'SIGNED_BY_PRODUCER'" class="statut">
                Signé par le producteur
              </p>
            </div>
          </div>
          <div class="btn_cards">
            <!-- <nuxt-link :to="`/bsdasris/preview/${bsd.node.id}`">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#008000"
                    d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
                  /></svg
                >Action
              </p>
            </nuxt-link> -->
            <!-- <nuxt-link :to="`/bsdasris/sign-emitter-secret/${bsd.node.id}`">
              <p class="sign" v-if="bsd.node.status === 'INITIAL'">
                Signature du producteur
              </p>
            </nuxt-link> -->
            <nuxt-link :to="`/bsdasris/sign-transporter/${bsd.node.id}`">
              <p class="sign">
                Signature
              </p>
            </nuxt-link>
       
   

            
           
          </div>
           <nuxt-link :to="`/bsdasris/preview/${bsd.node.id}`">

     
     <div class="item_option">
       
       <p>Aperçu</p>
     </div>
     </nuxt-link>

  
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import NavBar from '../../components/Default/NavBar.vue'
import TheHeader from '../../components/Default/TheHeader.vue'

export default {
  async asyncData({ $axios }) {
    const bsdasris = await $axios.$get(`${process.env.GET_TRACK}/api/getbsdasri`)
    return { bsdasris }
  },
  data() {
    return {
      searchclient: '',
      option: false
    }
  },
  components: {
    NavBar,
    TheHeader,
  
  },
  computed: {
    filterclient() {
      return this.bsdasris.bsdasris.edges.filter((bsd) =>
        bsd.node.emitter.company.name.includes(this.searchclient)
      )
    },
  },
  methods: {
    openOption(id) {
      this.option = !this.option
    }
  }
}
</script>

<style scoped>
.header {
  z-index: 2;
}

a {
  color: var(--green);
  text-decoration: none;
}

.navbar {
  z-index: 1;
}

main {
  margin-top: 80px;
  padding: 0 15px;
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

.return_1 p {
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
  background-color: var(--yellow) !important;
  color: var(--black) !important;
  transition: all 0.5s;
  font-weight: 700 !important;
  border: 1px solid var(--yellow) !important;
}

.item_state {
  margin-right: 15px;
}

.item_state a p {
  color: var(--gray-body);
  padding: 10px;
  width: 100px;
  border: 1px solid var(--gray-step);
  display: flex;
  justify-content: center;
  transition: all 0.5s;
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

.none_tr img {
  width: 50%;
}

.none_tr h2 {
  font-size: 16px;
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

.cards_bsd {
  margin-top: 260px;
  margin-bottom: 120px;
  position: relative;
  padding: 10px;
}

.card {
  border: 1px solid var(--gray-step);
  padding: 20px;
  position: relative;
  border-radius: 4px;
  /* box-shadow: 0px -1px 8px 0px rgba(0, 0, 0, 0.103);
  -webkit-box-shadow: 0px -1px 8px 0px rgba(0, 0, 0, 0.103);
  -moz-box-shadow: 0px -1px 8px 0px rgba(0, 0, 0, 0.103); */
  margin-bottom: 20px;
  background-color: var(--white);
}


.item {
  display: flex;
  margin-bottom: 10px;
  flex-flow: row;
  align-items: center;
}

.img_item {
  margin-top: 5px;
}

.img_item img {
  width: 35px;
  margin-right: 20px;
}

.item p:nth-child(1) {
  margin-right: 10px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0px;
  color: var(--black);
  width: 90px;
}

.uppercase {
  text-transform: uppercase;
  width: 200px;
}

.statut {
  
  color: var(--green);
  font-weight: 700 !important;
}

.item p:nth-child(2) {
  font-weight: 400;
  font-size: 14px;
}

.btn_cards a {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
}

.btn_cards a p {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid var(--green);
  border-radius: 2px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-top: 15px;
  font-weight: 700;
}

.btn_cards  a .sign {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 18px;
  color: var(--white);
  border: 1px solid var(--green);
  border-radius: 2px;
  background-color: var(--green);
  margin-right: 0px;
  font-weight: 700;
} 

.btn_cards a svg {
  display: flex;
  flex-flow: row;
  width: 20px;
  margin-right: 5px;
} 




/* OPTION */

hr {
  border: none;
  background-color: var(--gray-step);
  width: 100%;
  height: 1px;
}

.details_option {
  display: flex;
  justify-content: flex-end;
  
}


.item_option {
  display: flex;
  flex-flow: row;
  align-items: center;
  background-color: var(--gray);
  justify-content: center;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  padding: 18px;
}

.item_option p {
  font-weight: bold;
  color: var(--black);
  font-size: 12px;
}

.item_option svg {
  width: 30px;
  margin-right: 5px;
}



</style>
