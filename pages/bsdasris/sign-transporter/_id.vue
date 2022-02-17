<template>
  <div>
    <main>
      <div class="top_bsdasri">
        <div class="box_top">
          <nuxt-link to="/transport/to-collect">
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
                  fill="#202020"
                />
              </svg>
              <p>Signature transporteur</p>
              <p></p>
            </div>
          </nuxt-link>
        </div>
        <div class="lecture">
          <p>
            En signant, je confirme l'emport du déchet. La signature est
            horodatée
          </p>
        </div>
      </div>
      <div class="infos_fixed">
        <div class="item">
          <p>Bordereau numéro</p>
          <p>{{ prev.data.bsdasri.id }}</p>
        </div>

        <div class="item">
          <p>Origine déchets</p>
          <p>{{ prev.data.bsdasri.waste.code }}</p>
        </div>
      </div>
      <div class="box_travels">
        <div class="box_trajets">
          <div class="circle">
            <p></p>
          </div>
          <span></span>
          <div class="circle">
            <p></p>
          </div>
          <span class="span_2"></span>
          <div class="circle_2">
            <p></p>
          </div>
        </div>
        <div class="box_pred">
          <div class="pred">
            <div class="infos_pred">
              <p><strong>Producteur</strong></p>
              <p>{{ prev.data.bsdasri.emitter.company.name }}</p>
              <p>{{ prev.data.bsdasri.emitter.company.siret }}</p>
              <p>{{ prev.data.bsdasri.emitter.company.address }}</p>
            </div>
          </div>
          <div class="pred">
            <div class="infos_pred">
              <p><strong>Transporteur</strong></p>
              <p>{{ prev.data.bsdasri.transporter.company.name }}</p>
              <p>{{ prev.data.bsdasri.transporter.company.siret }}</p>
              <p>{{ prev.data.bsdasri.transporter.company.address }}</p>
            </div>
          </div>
          <div class="pred">
            <div class="infos_pred">
              <p><strong>Destinataire</strong></p>
              <p>{{ prev.data.bsdasri.destination.company.name }}</p>
              <p>{{ prev.data.bsdasri.destination.company.siret }}</p>
              <p>{{ prev.data.bsdasri.destination.company.address }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="detail">
        <h2>détail du conditionnement</h2>
      </div>
      <div class="box_detail">
        <div class="array_content">
        <div
          class="box_for"
          v-for="bsd in prev.data.bsdasri.emitter.emission.packagings"
          :key="bsd.id"
        >
          <p>{{ bsd.quantity }}</p>
          <p>{{ bsd.volume }}l</p>
          <p v-if="bsd.type === 'GRAND_EMBALLAGE'">Grand emballage</p>
          <p v-if="bsd.type === 'FUT'">Fût</p>
          <p v-if="bsd.type === 'BOITE_CARTON'">Boite en carton</p>
          <p v-if="bsd.type === 'BOITE_PERFORANTS'">
            Mini-collecteurs pour déchets perforants
          </p>
          <p v-if="bsd.type === 'AUTRE'">Autre</p>
          <p v-if="bsd.type === 'GRV'">Grand récipient pour vrac</p>
        </div>
            </div>
      </div>

      {{ formSign.packagings }}

      <div
        v-if="openSign"
        @click="openSign = !openSign"
        class="item_delete"
      ></div>
      <div class="box_delete" v-if="openSign">
        <div class="title_delete">
          <img src="~assets/img/svg/warning.svg" alt="" />
          <p>Signature producteur requise</p>
        </div>
        <div class="content_delete">
          <p>
            Erreur, l'émetteur n'a pas autorisé l'emport par le transporteur
            sans l'avoir préalablement signé. Le code signature est <strong>obligatoire</strong>.
          </p>
        </div>
        <div class="btn_delete">
          <p @click="openSign = !openSign">Retour</p>
          <nuxt-link
            :to="`/bsdasris/sign-emitter-secret/${prev.data.bsdasri.id}`"
          >
            <p class="supp">Code secret</p>
          </nuxt-link>
        </div>
      </div>

      <form>
        <div class="label_group">
          <div class="label">
            <p>Nom du signataire</p>
            <input
              type="text"
              placeholder="NOM Prénom "
              :value="loggedInUser.username"
              :v-model="(formSign.author = loggedInUser.username)"
              required
            />
          </div>
        </div>
      </form>
      <div class="box_next">
        <div class="next">
          <p @click=";(form1 = false), (form2 = false), (form3 = true), Sign()">
            Signer le BSD
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
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $axios, params }) {
    const id = params.id
    const prev = await $axios.get(
      `${process.env.GET_TRACK}/api/prewiewbsdasri/${id}`
    )
    return { prev, id }
  },
  data() {
    return {
      form1: true,
      form2: false,
      form3: false,
      addweight2: false,
      openSign: false,
      error: '',
      form: {
        acceptation: '',
        takenOverAt: '',
        packagings: [],
      },
      formSign: {
        author: '',
        type: 'TRANSPORT',
      },
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    Sign() {
      // this.$axios
      //   .post(`api/update/${this.id}`, { ...this.form })
      //   .then((res) => {})
      //   .catch((err) => {
      //     console.log(err)
      //   }),
      this.$axios
        .post(`${process.env.GET_TRACK}/api/signbsdasritransporter/${this.id}`, {
          ...this.formSign,
        })
        .then((res) => {
          this.$router.push('/transport/collected')
        })
        .catch((error) => {
          this.openSign = true
          this.error = error
        })
    },
  },
  computed: {
    ...mapGetters(['loggedInUser']),
  },
}
</script>

<style scoped>
main {
  overflow: hidden;
}
.top_bsdasri {
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  padding: 20px;
  right: 0;
  height: 170px;
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

.lecture {
  padding: 20px;
  margin-top: 20px;
  border: 1px solid var(--green);
  background-color: var(--green-light);
}

.lecture p {
  color: var(--green);
  font-weight: 700;
}

.infos_fixed {
  margin-top: 190px;
  padding: 0 15px;
}

.item {
  margin-bottom: 10px;
}

.item p:nth-child(2) {
  padding: 18px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid var(--gray-step);
}

.box_travels {
  display: flex;
  align-items: center;
  background-color: var(--white);
  justify-content: flex-start;
  padding: 10px;
  border-radius: 4px;

  border: 1px solid var(--gray-step);
  margin: 20px 15px;
  padding-bottom: 25px;
}

.box_trajets {
  display: flex;
  flex-flow: column;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
}

.box_trajets span {
  height: 80px;
  width: 2px;
  border: 1px dashed var(--green);
}

.span_2 {
  border: 1px dashed var(--gray-step) !important;
}

.box_pred {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
}

.pred {
  margin-top: 20px;
  padding: 0 15px;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.circle {
  margin: 10px -10px 10px 0;
}
.circle_2 {
  margin: 10px -10px 10px 0;
}

.box_pred span {
  height: 50%;
  width: 50px;
  background-color: var(--gray-step);
}

.circle p {
  height: 13px;
  width: 13px;
  background-color: var(--green);
  border-radius: 50%;
  margin-right: 10px;
}

.circle_2 p {
  height: 13px;
  width: 13px;
  background-color: var(--gray-step);
  border-radius: 50%;
  margin-right: 10px;
}

form {
  margin-top: 30px;
}

.box_next {
  background-color: var(--white);
  padding: 40px 0 40px 0;
  border-top: 1px solid var(--gray-step);
  margin: 30px -20px -20px -20px;
}

.next {
  display: flex;
  justify-content: center;

  align-items: center;
}

.next p {
  width: 82%;
  background-color: var(--green);
  padding: 18px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: 700;
}

.next svg {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.label {
  margin-top: 30px;
  padding: 0 15px;
}

.detail {
  padding: 10px 15px;
}

.detail h2 {
  font-size: 16px;
}

.box_detail {
  padding: 18px;
  border-radius: 4px;

  margin: 0 15px;
  background-color: var(--white);
  border: 1px solid var(--gray-step);
}

.box_for {
  display: flex;
  justify-content: space-between;
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

a {
  text-decoration: none;
}

.btn_delete a .supp {
  padding: 15px;
  background-color: var(--red);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  margin-top: 10px;
  color: var(--white);
}


.array_content {
  display: flex;
flex-flow: column;
 justify-content: flex-start;
 align-items: flex-start;
}

.array_content p {
  font-weight: 700;
}

.array_content p:nth-child(1) {
  width: 30px;
}

.array_content p:nth-child(2) {
  width: 30px;
  margin-right: 10px;
}
</style>
