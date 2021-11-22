<template>
  <div>
    <nav-bar class="navbar" />
    <the-header class="header" />
    <main>
      <div class="top_tr">
        <div class="infos_tr">
          <h1>Transport à collecter</h1>
          <p>
            Il y a <strong>{{ bsdasris.totalCount }}</strong> <span v-if="bsdasris.totalCount === 0">bordereau</span><span v-if="bsdasris.totalCount > 1">bordereaux</span> <span v-if="bsdasris.totalCount === 0">collecté</span><span v-if="bsdasris.totalCount > 1">collectés</span>
          </p>
        </div>
        <a href="/transport/collected">
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
      <div class="cards_bsd">
        <div class="card" v-for="bsd in bsdasris.edges" :key="bsd.id">
          <div class="item">
            <p>Bordereau</p>
            <p>{{ bsd.node.id }}</p>
          </div>
          <div class="item">
            <p>Détenteur</p>
            <p>{{ bsd.node.emitter.company.name }}</p>
          </div>
           <div class="item">
            <p>Destination</p>
            <p>{{ bsd.node.destination.company.name }}</p>
          </div>
           <div class="item">
            <p>Déchets</p>
            <p>{{ bsd.node.waste.code }}</p>
          </div>
           <div class="item">
            <p>statut</p>
            <p v-if="bsd.node.status === 'SENT'
            ">Envoyé</p>
             <p v-if="bsd.node.status === 'INITIAL'
            ">Initial</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../../components/Default/NavBar.vue'
import TheHeader from '../../components/Default/TheHeader.vue'
import getBsdasri from '../../apollo/queries/getBsdasris'



export default {
  components: {
    NavBar,
    TheHeader,
  },
  apollo: {
    bsdasris: {
      query: getBsdasri,
      prefetch: true,
    },
  },
}
</script>

<style scoped>
.header {
  z-index: 2;
}

.navbar {
  z-index: 1;
}

main {
  margin-top: 100px;
  padding: 0 15px;
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
  border: 1px solid var(--gray-step);
  padding: 8px;
  background-color: var(--white);
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

.cards_bsd {
  margin-top: 20px;
}

.card {
  border: 1px dashed var(--gray-step);
  padding: 20px;
  margin-bottom: 15px;
  background-color: var(--white);
}

.item {
  display: flex;
  margin-bottom: 3px;
}

.item p:nth-child(1) {
  margin-right: 10px;
  font-weight: 700;
  font-size: 12px;
  color: var(--black);
  width: 90px;
}

.item p:nth-child(2) {
  font-weight: 400;
}
</style>
