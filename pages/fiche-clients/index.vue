<template>
  <div class="overflow">
    <nav-bar class="navbar" />
    <div class="top_bsdasris">
      <div class="box_top">
        <nuxt-link to="/">
          <div class="return">
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
            <p>Fiche clients</p>
            <p></p>
          </div>
        </nuxt-link>
        <div class="top_fiche_client">
          <div class="title">
            <h2>Recherche par nom d'entreprise</h2>
            <svg
              @click="openDelete = !openDelete"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#D60021"
                d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
              />
            </svg>
          </div>
          <div
            v-if="openDelete"
            @click="openDelete = !openDelete"
            class="item_delete"
          ></div>
          <div class="box_delete" v-if="openDelete">
            <div class="title_delete">
              <img src="~assets/img/svg/warning.svg" alt="" />
              <p>Suppression clients</p>
            </div>
            <div class="content_delete">
              <p>
                Vous êtes sur le point de supprimer tous les clients de la base
                de données. Êtes vous sûr de vouloir tous supprimer ?
                Cette action est <span class="black">irréversible !</span>
              </p>
            </div>
            <div class="btn_delete">
              <p @click="openDelete = !openDelete">Retour</p>
              <p v-if="supp" class="supp" @click="deleteAll">Supprimer</p>
              <div v-if="loading" class="loading_supp">
                <p>En cours de suppression...</p><div class="lds-hourglass"></div>
            </div>
            </div>
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
    <main>
      <div class="box_client">
        <div class="client" v-for="c in filterclient" :key="c.name">
          <div class="svg">
            <img src="~assets/img/svg/user.svg" alt="" />
          </div>
          <div class="infos_fiche">
            <p>Nom entreprise</p>
            <p>{{ c.nom }}</p>
            <nuxt-link :to="`/fiche-clients/${c.id}`">
              <p>Voir le client</p></nuxt-link
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../../components/Default/NavBar.vue'
import TheHeader from '../../components/Default/TheHeader.vue'
export default {
  async asyncData({ $strapi }) {
    const client = await $strapi.find('clients?_limit=-1')
    console.log(client)
    return { client }
  },
  data() {
    return {
      searchclient: '',
      openDelete: false,
      supp: true,
      loading: false,
    }
  },
  components: { TheHeader, NavBar },
  computed: {
    filterclient() {
      return this.client.filter((c) => c.nom.includes(this.searchclient))
    },
  },
  methods: {
    deleteAll(e) {
      e.preventDefault()
      this.supp = false
      this.loading = true
      this.$axios
        .delete('https://st.rouxnicolas.fr/clients')
        .then((res) => {
          this.supp = true
          this.loading = false
          this.$router.push('/')
        })
        .catch()
    },
  },
}
</script>

<style scoped>
.black {
  color: var(--black);
  font-weight: 700;
}

a {
  text-decoration: none;
}
.navbar {
  z-index: 1;
}

.overflow {
  overflow-x: hidden;
}
.top_bsdasris {
  position: fixed;
  background-color: var(--green);
  top: 0;
  left: 0;
  padding: 20px;
  right: 0;
  height: 120px!important;
  /* border-bottom: 1px solid var(--gray-step); */
}

.box_top {
  display: flex;
  flex-flow: column;
}

.return {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
}

.return p {
  font-weight: 700;
  font-size: 16px;
  color: var(--white);
}

.top_fiche_client {
  margin-top: 20px;
}

.title {
  margin-bottom: 5px;
  display: flex;
  height: 30px;
  justify-content: space-between;
}

.title svg {
  width: 15px;
}

.title path {
  fill: var(--white);
}
.title h2 {
  font-size: 14px;
  color: var(--white);
}

.box_client {
  margin-top: 100px;
  padding: 20px 15px;
}

.client:nth-child(1) {
  margin-bottom: 20px;
  padding: 50px 25px 15px 25px;
  border-bottom: 1px solid var(--gray-step);
  background-color: var(--white);
  margin: 0 -15px 0 -15px;
}

.client {
  margin-bottom: 20px;
  padding: 15px 25px 15px 25px;
  border-bottom: 1px solid var(--gray-step);
  background-color: var(--white);
  margin: 0 -15px 0 -15px;
  display: flex;
  align-items: center;
}

.svg img {
  width: 35px;
  margin-right: 20px;
}

.client p:nth-child(1) {
  font-weight: 700;
}

.client p:nth-child(2) {
  text-transform: uppercase;
  color: var(--black);
}

.client a p svg {
  width: 20px;
}

.client a p {
  font-size: 12px;
  display: flex;
  flex-flow: row;
  margin-top: 10px !important;
  align-items: center;
  text-transform: lowercase;
  font-weight: 700;
  margin-top: 3px;
  color: var(--green);
}

.item_delete {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.247);
  inset: 0;
  z-index: 20;
}

.box_delete {
  position: fixed;
  background-color: var(--white);
  top: 250px;
  left: 20px;
  right: 20px;
  padding: 30px 20px;
  border-radius: 4px;
  z-index: 22;
}

.title_delete {
  display: flex;
  justify-content: flex-start;
}

.title_delete img {
  width: 20px;
  margin-right: 10px;
}

.title_delete p {
  font-size: 14px;
  color: var(--red);
  font-weight: 700;
}

.content_delete {
  margin-top: 10px;
  color: var(--gray-body);
}

.btn_delete {
  text-align: center;
  margin-top: 20px;
}

.btn_delete p:nth-child(1) {
  padding: 15px;
  background-color: var(--gray-pdf);
  border-radius: 4px;
  font-weight: 700;

  color: var(--black);
}

.btn_delete .supp {
  padding: 15px;
  background-color: var(--red);
  border-radius: 4px;
  font-weight: 700;
margin-top: 10px;
  color: var(--white);
}


.loading_supp {
  background-color: var(--red-load) !important;
  color: var(--red)!important;
  display: flex;
border-radius: 4px;
margin-top: 10px;
text-align: center;
  align-items: center;
  justify-content: center;
}

.loading_supp p{
  background-color: var(--red-load) !important;
  color: var(--red)!important;
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  margin-top: -15px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 7px 2px 8px -4Px;
  box-sizing: border-box;
  border: 14px solid var(--red);
  border-color: var(--red) transparent var(--red) transparent;
  animation: lds-hourglass 1.9s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}


</style>
