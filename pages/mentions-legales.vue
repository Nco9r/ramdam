<template>
  <div class="users">
    <div class="top_bsdasris">
      <div class="box_top">
        <div
          class="return_1"
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
          <p>Mentions légales</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="infos_content">
      <div class="block_content">
            <h3>1. Présentation du site.</h3>
            <p>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site www.trackdechets.ramdam-bordeaux.fr l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
<br>
             <p><strong>Propriétaire :</strong> RAMDAM - 7 Rue Mireport, 33310 Lormont. Siret n° 509 185 948 00031 - TVA n° FR 135 091 859 48 - Code NAF 4941B</p>
             <br>
            <p><strong>Responsable publication :</strong> RAMDAM</p>
            <br>
            <p><strong>Hébergeur :</strong> O2 Switch – 222 Boulevard Gustave Flaubert – 63000 Clermont-Ferrand – France.</p>
            <br>
            <p><strong>Développement et Webdesign :</strong> Nicolas ROUX</p>
         
        </div>
    </div>

    <div class="box_next_user">
      <div class="next_user">


        <p  @click="hasHistory() ? $router.go(-1) : $router.push('/')">   
          Retour
          
        </p>
        
  
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params }) {
    const id = params.id

    return {
      id,
    }
  },
  data() {
      return {
          immatriculation: '',
          change: false
      }
  },
  methods: {
    hasHistory() {
      return window.history.length > 2
    },
    changeImma() {
        this.$axios.put(`https://st.rouxnicolas.fr/users/${this.id}`, {immatriculation: this.immatriculation}).then((res) => {
            location.reload();
        }).catch()
    }
  },
  computed: {
    ...mapGetters(['loggedInUser']),
  },
}
</script>

<style scoped>
.users {
  position: relative;
  overflow-x: hidden;
  height: 100vh;
}

.top_bsdasris {
  position: fixed;
  background-color: var(--white);
  top: 0;
  left: 0;
  z-index: 2;
  padding: 20px;
  right: 0;
  height: 70px;
  border-bottom: 1px solid var(--gray-step);
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
  color: var(--black);
}

.infos_content {
  margin: 100px 20px 50px 20px;
}


.block_content h3{
    font-size: 14px;
    margin-bottom: 10px;
    color: var(--black);

}

.block_content p{
 
    color: var(--gray-body);

}

strong {
    color: var(--black);
 

}

.box_next_user {
  background-color: var(--white);
  padding: 40px 0 40px 0;
  border-top: 1px solid var(--gray-step);
  left: 0;
  right: 0;
  position: absolute;
  bottom: 0px;
}

.next_user {
  display: flex;
  justify-content: center;
  align-items: center;
}

.next_user p {
  width: 90%;
  background-color: var(--green);
  padding: 18px;
  margin: 0 20px;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: 700;
}

.bottom {
  margin-top: 90px;
}

.next_user svg {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}
</style>
