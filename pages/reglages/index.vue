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
              <p>Réglages</p>
              <p></p>
            </div>
          </nuxt-link>
        </div>
      </div>
     
      <div class="box_users">
        <div class="box_content">
          <nuxt-link :to="`/users/${loggedInUser.id}`">
            <div class="item">
              <p>Mes informations</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#202020"
                  d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                />
              </svg>
            </div>
          </nuxt-link>
          <a href="tel:+683976590">
          <div class="item">
            <p>Contact</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#202020"
                d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
              />
            </svg>
          </div>
          </a>
          <nuxt-link to='/mentions-legales'>
          <div class="item">
            <p>Mentions légales</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#202020"
                d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
              />
            </svg>
          </div>
          </nuxt-link>
        </div>
        <div class="box_footer">
          <div class="img">
            <img src="~assets/img/svg/Logo_RF.svg" alt="" />
          </div>
          <p>
            Application trackdéchets - Ministère de la Transition Écologique -
            RAMDAM tous droits réservés - Version 1.0.0 - © 2021
          </p>
        </div>
      </div>
      <div class="infos_appli">
        <div class="btn_deco">
          <nuxt-link to="/login">
            <button @click="logout">Déconnexion</button>
          </nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../../components/Default/NavBar.vue'
import { mapGetters } from 'vuex'

export default {
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
    ...mapGetters(['loggedInUser']),
  },
  methods: {
    openOption(id) {
      this.option = !this.option
    },
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style scoped>
.black {
  color: var(--black);
  font-weight: 700;
}

.header {
  z-index: 2;
}

hr {
  border: none;
  background-color: var(--gray-step);
  width: 100%;
  height: 1px;
  margin: 10px 0;
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
  height: 70px;
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

.infos_appli {
  display: flex;
  flex-flow: column;
  align-items: center;

  justify-content: center;
  position: absolute;
  bottom: 150px;
  right: 20px;
  left: 20px;
}

.infos_appli p {
  text-align: center;
}

.img {
  display: flex;
  flex-flow: row;
  margin-top: 30px;
}

.img img:nth-child(2) {
  width: 100px;
  height: 100px;
  margin-left: 20px;
}

.btn_deco button {
  border: none;
  background-color: var(--red);
  outline: none;
  color: var(--white);
  border-radius: 4px;
  width: 345px;
  padding: 18px;
  margin-top: 20px;

  font-size: 14px;
  font-weight: 700;
}

.infos_users p {
  color: var(--gray-body);
  font-size: 16px;
  text-align: center;
}

.box_users {
  border-radius: 6px;
  border: 1px solid var(--gray-pdf);
  height: 480px;
  padding: 20px;
  color: var(--gray-body);
  margin-top: 100px;
  position: relative;
  background-color: var(--white);
}

.box_footer {
  position: absolute;
  bottom: 20px;
}

.box_footer p {
  margin-top: 20px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  color: var(--black);
  border-bottom: 1px solid var(--gray-pdf);
}

.item svg {
  width: 25px;
}
</style>
