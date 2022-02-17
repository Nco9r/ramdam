<template>
  <div>
    <div class="search__user">
      <div class="input__search">
        <input
          type="text"
          class="search"
          v-model="searchclient"
          placeholder="Recherche par client..."
        />
      </div>
      <div class="name_user">
        <p>
          Bonjour <strong>{{ loggedInUser.username }},</strong>
        </p>
      </div>
    </div>
    <div class="nav_facturation">
      <div class="logo_nav">
        <img src="~assets/img/png/ramdam.webp" alt="" />
      </div>
      <div class="nav">
        <nuxt-link to="/facturation">
          <div class="item_nav">
            <img src="~assets/img/svg/facturation.svg" alt="" />
            <p>Facturation</p>
          </div>
        </nuxt-link>
       
      
      
       
       
      </div>
      <div class="deconnexion">
        <button>Deconnexion</button>
        <p>©2021 - RAMDAM</p>
      </div>
    </div>
    <div class="title_facturation">
      <div class="title">
        <h2>Facturation</h2>
      </div>
      <div class="btn">
        <button>Exporter en CSV</button>
        <button @click="openDelete = !openDelete">Supprimer</button>
      </div>
    </div>
    <div id="page">
      <table>
        <thead>
          <tr>
            <th>Nom du client</th>
            <th>idClient</th>
            <th>idFacturation</th>
            <th>Quantité(s)</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Chauffeur</th>
            <th>Immatriculation</th>
          </tr>
        </thead>
        <tbody v-for="c in client" :key="c.id">
          <tr v-for="i in c.item" :key="i.id">
            <td>{{ i.name }}</td>
            <td>{{ i.idClient }}</td>
            <td>{{ i.idFacturation }}</td>
            <td>{{ i.quantity }}</td>
            <td>{{ $moment(i.date).format('L') }}</td>
            <td>{{ $moment(i.date).format('LT') }}</td>
            <td>{{ i.nameC }}</td>
            <td>{{ i.immatriculation }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="openDelete"
      @click="openDelete = !openDelete"
      class="item_delete"
    ></div>
    <div class="box_delete" v-if="openDelete">
      <div class="title_delete">
        <img src="~assets/img/svg/warning.svg" alt="" />
        <p>Suppression facturation</p>
      </div>
      <div class="content_delete">
        <p>
          Vous êtes sur le point de supprimer toutes vos données de facturation
          clients de la base de données. Êtes vous sûr de vouloir tous supprimer
          ? Cette action est <span class="black">irréversible !</span>
        </p>
      </div>
      <div class="btn_delete">
        <p @click="openDelete = !openDelete">Retour</p>
        <p v-if="supp" class="supp" @click="deleteFacturation">Supprimer</p>
        <div v-if="loading" class="loading_supp">
          <p>En cours de suppression...</p>
          <div class="lds-hourglass"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ $strapi }) {
    const client = await $strapi.find('facturations')
    console.log(client)
    return { client }
  },
  data() {
    return {
      client: '',
      searchclient: '',
      openDelete: false,
      supp: true,
      loading: false,
    }
  },
  methods: {
    deleteFacturation(e) {
      e.preventDefault()
      this.supp = false
      this.loading = true
      this.$axios
        .delete('http://localhost:8787/facturations')
        .then((res) => {
          this.supp = true
          this.loading = false
          this.openDelete = false
          location.reload();
        })
        .catch()
    },
  },
  computed: {
    ...mapGetters(['loggedInUser']),
    filterclient() {
      return this.client.filter((c) =>
        c.name.trim().includes(this.searchclient)
      )
    },
  },
}
</script>

<style>
@media screen and (max-width: 1023px) {
  body {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  body {
    display: flex;
    height: 100vh;
    justify-content: space-around;
  }

  .search__user {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px 20px 0;
    right: 0;
    height: 100px;
    background-color: var(--white);
    border-bottom: 1px solid var(--gray-step);
  }

  .search {
    width: 300px;
    margin-left: 350px;
  }

  .name_user {
    font-size: 18px;
  }

  .nav_facturation {
    position: fixed;
    width: 280px;
    z-index: 2;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: var(--white);
    border-right: 1px solid var(--gray-step);
  }

  .deconnexion {
    position: absolute;
    bottom: 50px;
    margin: auto;
    left: 22px;
  }

  .deconnexion button {
    appearance: none;
    border: none;
    padding: 16px 24px;
    margin-bottom: 10px;
    border-radius: 6px;
    width: 230px;
    border: 1px solid var(--red);
    background-color: var(--red);
    cursor: pointer;
    color: var(--white);
    font-weight: 700;
  }

  .nav {
    margin-top: 52px;
  }

  .item_nav {
    padding: 15px;
    width: 230px;
    border-radius: 6px;
    margin: auto;
    display: flex;
    height: 10px;


    cursor: pointer;
    margin-bottom: 30px;
    flex-flow: row;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  .nuxt-link-exact-active .item_nav {
    border-left: 2px solid var(--green);
    border-radius: 0px;
    height: 10px;
  }

  .nuxt-link-exact-active .item_nav p {
    color: var(--green) !important;
  }

  .nuxt-link-exact-active .item_nav p
  img {
    color: white !important;
  }


  .item_nav p {
    color: var(--gray-body);
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
  }

  .item_nav img {
    margin-right: 10px;
    width: 30px;
  }

  .logo_nav img {
    width: 150px;
    margin-top: 30px;
    margin-left: 27px;
  }

  .title_facturation {
    position: fixed;
    padding: 20px 50px 20px 70px;
    top: 100px;
    left: 280px;
    background-color: var(--white);
    right: 0px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-step);

    margin-bottom: 20px;
    align-items: center;
  }
  table {
    margin: auto;
    z-index: 1;
    width: 100%;
    margin-top: 50px;
    border-radius: 20px;
    margin-left: 120px;
    margin-right: 50px;
    border-collapse: collapse;
    text-align: left;
    overflow-y: scroll!important;
    border: 1px solid var(--gray-step);
  }
  #page {
    top: 210px;
    right: 170px;
    position: absolute;
    left: 200px;
    width: 1400px;
    height: 800px;
    overflow: scroll;
    bottom: 50px;
    margin-bottom: 100px;

  }

  th,
  td {
    padding: 20px;
    overflow-y: scrol!important;

    border-bottom: 1px solid var(--gray-step);
  }

  td:nth-child(1) {
    font-weight: 700;
    color: var(--black);
  }

  

  td {
    font-weight: 400;
  }

  th {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    color: #6a7280;
  }
  .title_facturation .title h2 {
    font-size: 20px;
    font-weight: bold;
  }

  tr {
    background-color: white;
  }

  .edit img {
    width: 20px;
    cursor: pointer;
  }

  .btn button {
    appearance: none;
    border: none;
    padding: 16px 24px;
    border-radius: 6px;
    width: 180px;
  }

  .btn button:nth-child(1) {
    border: 1px solid var(--gray-step);
    color: var(--gray-body);
    font-weight: 700;
    background-color: transparent;
    margin-right: 10px;
    cursor: pointer;
  }

  .btn button:nth-child(2) {
    border: 1px solid var(--red);
    background-color: var(--red);
    cursor: pointer;
    color: var(--white);
    font-weight: 700;
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
    top: 300px;
    left: 35%;
    right: 50%;
    margin: auto;
    width: 500px;
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
    color: var(--red) !important;
    display: flex;
    border-radius: 4px;
    margin-top: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .loading_supp p {
    background-color: var(--red-load) !important;
    color: var(--red) !important;
  }

  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    margin-top: -15px;
  }
  .lds-hourglass:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 7px 2px 8px -4px;
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
}
</style>
