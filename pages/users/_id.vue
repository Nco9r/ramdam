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
          <p>Mes informations</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="infos_content">
      <div class="item">
        <p>Prénom / Nom</p>
        <p>{{ loggedInUser.username }}</p>
      </div>
      <div class="item">
        <p>Email</p>
        <p>{{ loggedInUser.email }}</p>
      </div>

      <div class="item">
        <p>Immatriculation</p>
        <p>{{ loggedInUser.immatriculation }}</p>
        <p @click="change = !change"> Modifier</p>
      </div>
      <div class="item" v-if="change">
        <p>Modifier immatriculation</p>
        <select name="" id="" required v-model="immatriculation">
            <option value="" selected disabled>Liste</option>
            <option value="DR-120-ZZ">DR-120-ZZ</option>
            <option value="YH-126-JZ">YH-126-JZ</option>
            <option value="FE-560-HI">FE-560-HI</option>
        </select>
      </div>
    </div>

    <div class="box_next_user">
      <div class="next_user">


        <p @click="changeImma">   
          Enregistrer
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="check-circle"
                  d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,1.41,0l5-5a1,1,0,1,0-1.41-1.42ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                  transform="translate(-2 -2)"
                  fill="#fff"
                />
              </svg>
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

.infos_content .item {
  margin-bottom: 20px;
}

.infos_content .item p:nth-child(1) {
  color: var(--gray-body);
}

.infos_content .item p:nth-child(2) {
  padding: 18px;
  border: 1px solid var(--gray-step);
  background-color: var(--white);
  margin-top: 3px;
  border-radius: 4px;
}

.infos_content .item p:nth-child(3) {
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
  color: var(--green);
  font-weight: 700;
  font-size: 12px;
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
