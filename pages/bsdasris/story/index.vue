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
              <p>Mes Bordereaux</p>
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
      <div class="main_tr" v-if="bsdasris.bsdasris.totalCount === 0">
        <div class="none_tr">
          <img src="@/assets/img/svg/collecte.svg" alt="" />
          <h2>Il n'y a aucun bordereau en archives</h2>
          <p>
            Des bordereaux apparaissent dans cet onglet lorsqu'ils ont terminé
            leur cycle de vie. Ils sont alors disponible en lecture seule pour
            consultation.
          </p>
        </div>
      </div>
      <div class="cards_bsd">
        <div class="item_option" v-if="option">
          <div class="overlay" @click="option = !option"></div>
          <div class="option_list">
            <div class="box_list">
              <div class="title_list">
                <h2>Option</h2>
                <img
                  @click="option = !option"
                  src="~assets/img/svg/close.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="card" v-for="bsd in filterclient" :key="bsd.id">
          <div class="option" @click="option = !option">
            <img src="~assets/img/svg/option.svg" alt="" />
          </div>
          <div class="item_option" v-if="option">
            <p>{{ bsd.node.id }}</p>
            <div class="overlay" @click="openOption(bsd)"></div>
            <div class="option_list">
              <div class="box_list">
                <div class="title_list">
                  <h2>Option</h2>
                  <img
                    @click="option = !option"
                    src="~assets/img/svg/close.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
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
              <p v-if="bsd.node.status === 'PROCESSED'" class="statut">
                Traité
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../../../components/Default/NavBar.vue'

export default {
  async asyncData({ $axios }) {
    const bsdasris = await $axios.$get(`${process.env.GET_TRACK}/api/getbsdasriprocessed`)
    return { bsdasris }
  },
  data() {
    return {
      searchclient: '',
      option: false,
    }
  },
  components: {
    NavBar,
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
    },
  },
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

.option {
  position: absolute;
  right: 15px;
  top: 20px;
  width: 30px;
  height: 30px;
}

.option img {
  width: 25px;
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
  color: var(--gray-body);
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
  margin-top: 20px;
  width: 100%;
}

.btn_cards a p {
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid var(--green);
  border-radius: 2px;

  margin-right: 10px;
  font-weight: 700;
}

.btn_cards a .sign {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 18px;

  color: var(--green);
  border: 1px solid var(--green);
  border-radius: 2px;
  background-color: var(--green-light);
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

.overlay {
  position: fixed;
  background-color: #2020203b;
  z-index: 3;
  inset: 0;
}

.option_list {
  position: fixed;
  z-index: 4;
  background-color: var(--white);
  left: 25px;
  right: 25px;
  height: 325px;
  border-radius: 4px;
}

.box_list {
  padding: 30px;
}

.title_list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title_list h2 {
  font-size: 16px;
  color: var(--black);
}

.title_list img {
  width: 20px;
}
</style>
