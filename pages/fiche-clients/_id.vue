<template>
  <div>
    <div class="top_bsdasri">
      <div class="box_top">
        <div
          class="return"
          @click="hasHistory() ? $router.go(-1) : $router.push('/')"
        >
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
              fill="#202020"
            />
          </svg>
          <p>Fiche client</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="box_fiche">
       <div class="item">
        <p>Nom du client</p>
        <p class="uppercase">{{ client.nom }}</p>
    </div>
    <div class="item">
        <p>identifiant</p>
        <p>{{ client.idClient }}</p>
    </div>
    <div class="item">
        <p>Numéro de Siret</p>
        <p>{{ client.siret }}</p>
    </div>
    <div class="item">
        <p>Adresse de collecte</p>
        <p>{{ client.adresse }}</p>
    </div>
    <div class="item">
        <p>Contact</p>
        <p>{{ client.contact }}</p>
    </div>
    <div class="item">
        <p>Email</p>
        <p>{{ client.email }}</p>
    </div>
     <div class="item">
        <p>Téléphone</p>
        <p>{{ client.phone }}</p>
    </div>
     <div class="item">
        <p>Commentaire de livraison</p>
        <p>{{ client.commentaire }}</p>
    </div>
     <div class="item">
        <p>Commentaire Emballage</p>
        <p>{{ client.commentaireEmballage }}</p>
    </div>
    </div>
     <div class="box_next_client">
          <div class="next_client">
            <p
              @click="hasHistory() ? $router.go(-1) : $router.push('/')"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                />
              </svg>
              Retour

            </p>
          </div>
        </div>

  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, params }) {
    const id = params.id
    const client = await $strapi.find(`clients/${id}`)
    console.log(client)
    return { client, id }
  },
  methods: {
    hasHistory() {
      return window.history.length > 2
    },
  },
}
</script>

<style scoped>
.top_bsdasri {
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  padding: 20px;
  right: 0;
  height: 70px;
  border-bottom: 1px solid var(--gray-step);
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
  color: var(--black);
}

.box_fiche {
    margin-top: 100px;
    padding: 0 20px!important;
}

.item {
  margin-bottom: 10px;
}

.item p:nth-child(1) {
  font-size: 14px;
  margin-bottom: 3px;
  color: var(--black);
}
.uppercase {
    text-transform: uppercase;

}
.item p:nth-child(2) {
  padding: 18px;
    font-weight: 700;

  border: 1px solid var(--gray-step);
  background-color: var(--white);
  border-radius: 4px;
}

.box_next_client {
  background-color: var(--white);
  padding: 40px 0 40px 0;
  margin-top: 30px;
  border-top: 1px solid var(--gray-step);

}

.next_client {
  display: flex;
  justify-content: center;

  align-items: center;
}

.next_client p {
  width: 100%;
  background-color: var(--green);
  padding: 18px;
  margin: 0 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: 700;
}

.next_client p svg {
  width: 20px;
  transform: rotate(180deg);


}


</style>
