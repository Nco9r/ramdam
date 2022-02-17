<template>
  <main>
    <div class="top_bsdasri">
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
                fill="#202020"
              />
            </svg>
            <p>Absence client</p>
            <p></p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <form>
      <div class="form_pred" v-if="form1">
        <h2>Personne responsable de l’élimination des déchets</h2>
        <hr />
        <div class="label_group">
          <div class="label">
            <p>Nom de l’entreprise</p>
            <input
              type="text"
              :class="{ open: open }"
              class="search"
              placeholder="ex : Ramdam"
              v-model="searchclient"
            />
            <div class="filter" v-for="c in filterclient" :key="c.id">
              <div
                class="box_filter"
                v-if="searchclient"
                @click="selected(c), (open = !open)"
              >
                <p>{{ c.nom }}</p>
                <p>{{ c.siret }}</p>
                <p>{{ c.adresse }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="select" v-for="i in choose" :key="i.id">
          <div class="select_green">
            <p>
              <strong>{{ i.nom }}</strong>
            </p>
            <p>{{ i.siret }}</p>
            <p>{{ i.adresse }}</p>
          </div>

          <div class="label_group event">
            <div class="label">
              <p>Nom du contact</p>
              <input
                type="text"
                placeholder="Jean Dupont"
                :value="i.contact"
                :v-model="(form.contact = i.contact)"
                required
              />
            </div>
          </div>

          <div class="label_group event">
            <div class="label">
              <p>Commentaire</p>
              <textarea
                type="text"
                placeholder="Aucun commentaire"
                :value="i.commentaire"
                required
              />
            </div>
          </div>
          <div class="label_group event">
            <div class="label">
              <p>Commentaire Emballage</p>
              <textarea
                type="text"
                placeholder="Aucun commentaire"
                :value="i.commentaireEmballage"
                required
              />
            </div>
          </div>
          <div class="label_group display">
            <div class="label">
              <p>Siret</p>
              <input
                type="text"
                :value="loggedInUser.username"
                :v-model="(chauffeur = loggedInUser.username)"
                required
              />
            </div>
          </div>
          <div class="label_group display">
            <div class="label">
              <p>Siret</p>
              <input
                type="text"
                :value="i.immatriculation"
                :v-model="(immatriculation = loggedInUser.immatriculation)"
                required
              />
            </div>
          </div>
          <div class="label_group display">
            <div class="label">
              <p>Nom</p>
              <input
                type="text"
                :value="i.nom"
                :v-model="(name = i.nom)"
                required
              />
            </div>
          </div>

          <div class="label_group event">
            <div class="label">
              <p>Téléphone</p>
              <input
                type="text"
                placeholder="Jean Dupont"
                :value="i.phone"
                :v-model="(form.phone = i.phone)"
                required
              />
            </div>
          </div>

          <div class="label_group event">
            <div class="label">
              <p>Email</p>
              <input
                type="text"
                :value="i.email"
                :v-model="(form.mail = i.email)"
                required
              />
            </div>
          </div>

          <!-- <p>{{formRamdam.idClient}}</p> -->

          <div class="label_group display">
            <div class="label">
              <p>Siret</p>
              <input
                type="text"
                :value="i.siret"
                :v-model="(form.siret = i.siret)"
                required
              />
            </div>
          </div>

          <div class="label_group display">
            <div class="label">
              <p>Email</p>
              <input
                type="text"
                :value="i.email"
                :v-model="(formRamdam.email = i.email)"
                required
              />
            </div>
          </div>

          <div class="label_group display">
            <div class="label">
              <p>Nom</p>
              <input
                type="text"
                :value="i.nom"
                :v-model="(formRamdam.nom = i.nom)"
                required
              />
            </div>
          </div>

          <div class="label_group display">
            <div class="label">
              <p>Adresse</p>
              <input
                type="text"
                :value="i.adresse"
                :v-model="(form.adresse = i.adresse)"
                required
              />
            </div>
          </div>

          <div class="label_group display">
            <div class="label">
              <p>Adresse</p>
              <input
                type="text"
                :value="i.adresse"
                :v-model="(formRamdam.adresse = i.adresse)"
                required
              />
            </div>
          </div>
          <div class="label_group display">
            <div class="label">
              <p>Adresse</p>
              <input
                type="text"
                :value="i.idClient"
                :v-model="(formRamdam.idClient = i.idClient)"
                required
              />
            </div>
          </div>
          <div class="label_group display">
            <div class="label">
              <p>Adresse</p>
              <input
                type="text"
                :value="i.idClient"
                :v-model="(idClient = i.idClient)"
                required
              />
            </div>
          </div>
          <div class="label_group display">
            <div class="label">
              <p>Adresse</p>
              <input
                type="text"
                :value="i.idClient"
                :v-model="(formRamdamC.idClient = i.idClient)"
                required
              />
            </div>
          </div>
          <div class="label_group event">
            <div class="label">
              <p>Adresse</p>
              <input
                type="text"
                :value="i.adresse"
                :v-model="(formRamdam.adresse = i.adresse)"
                required
              />
            </div>
          </div>
        </div>

        <h2 class="space">Motif de l'absence</h2>

        <hr />
        <div class="todo_fr space_2">
          <div class="label_group">
            <div class="label">
              <p>Désignation article</p>
              <input
                type="text"
                :class="{ openF: openF }"
                class="searchfourniture"
                v-model="searchfourniture"
              />
              <div class="filter_2" v-for="c in filterfourniture" :key="c.id">
                <div
                  class="box_filter_2"
                  v-if="searchfourniture"
                  @click="selecte(c), (openF = !openF)"
                >
                  <p>{{ c.designation }}</p>
                </div>
              </div>
              <div class="select" v-for="i in fournitureF" :key="i.id">
                <div class="select_green">
                  <p>
                    <strong>{{ i.designation }}</strong>
                  </p>
                </div>
                <div class="label_group display">
                  <div class="label">
                    <input
                      type="text"
                      :value="i.idArticle"
                      :v-model="(type2 = i.idArticle)"
                      required
                    />
                  </div>
                </div>
                <div class="label_group display">
                  <div class="label">
                    <input
                      type="text"
                      :value="i.designation"
                      :v-model="(type3 = i.designation)"
                      required
                    />
                  </div>
                </div>
                <div class="label_group display">
                  <div class="label">
                    <input
                      type="text"
                      :value="i.idFacturation"
                      :v-model="(type4 = i.idFacturation)"
                      required
                    />
                  </div>
                </div>

                <!-- <p>{{formRamdam.idClient}}</p> -->
              </div>
            </div>
          </div>
          <div class="box_todo">
            <div
              class="add_todo"
              :class="{ add_todo_check: type3 }"
              @click="create()"
            >
              <p>Ajouter</p>
            </div>
          </div>
        </div>

        <div class="recap" v-if="formRamdam.item.length >= 1">
          <div class="space_2"></div>
          <p>Récapitulatif :</p>
          <div class="space_3"></div>
        </div>
        <div class="array" v-for="td in formRamdam.item" :key="td.id">
          <div class="array_content">
            <p>{{ td.quantity }}</p>
            <p></p>

            <p>{{ td.designation }}</p>
          </div>
          <div class="array_delete" @click="deleteT(td)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#D60021"
                d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
              />
            </svg>
          </div>
        </div>
        <div class="box_next">
          <div class="next">
            <p
              @click="postStrapi(), sendEmail()"
              :class="{ valide_array: choose.length > 0 }"
            >
              Valider l'absence
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
    </form>
    <div v-if="sucess" class="item_delete"></div>
    <div class="box_delete" v-if="sucess">
      <div class="title_delete">
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
            fill="#008000"
          />
        </svg>
        <p>Absence client validée</p>
      </div>
      <div class="content_delete">
        <p>
          Vous avez bien validé l'absence client. Un email lui a été envoyé pour
          lui notifier son absence.
        </p>
      </div>
      <div class="btn_delete">
        <nuxt-link to="/">
          <p class="supp">Transport</p>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  async asyncData({ $strapi }) {
    const client = await $strapi.find('clients?_limit=-1')
    const fourniture = await $strapi.find('fournitures')
    const collecte = await $strapi.find('collectes')
    return { fourniture, client, collecte }
  },

  data() {
    return {
      form1: true,
      siret: '',
      open: false,
      sucess: false,
      openF: false,
      email: '',
      openC: false,
      chauffeur: '',
      idClient: '',
      immatriculation: '',
      quantite: '',
      idArticle: '',
      IdArticleC: '',
      IdFacturationC: '',
      searchfourniture: '',
      searchcollecte: '',
      idFacturation: '',
      formRamdam: {
        email: '',
        item: [],
      },
      formRamdamC: {
        collecte: [],
      },

      formRamdam_2: {
        idClient: '',
      },
      form: {
        contact: '',
        idClient: '',
        mail: '',
        adrCode: '3291',
        wasteCode: '',
        acceptation: '',
        road: '',
        value: '',
        refusalReason: '',
        refusedWeight: '',
        name: '',
        nom: '',
        plates: '',
        adresse: '',
        phone: '',
        takenOverAt: '',
        isEstimate: false,
        packagings: [],
      },
      choose: [],
      fournitureF: [],
      collecteC: [],
      code: '',
      form2: false,
      searchclient: '',
      form3: false,
      toggle: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: false,
      toggle6: false,
      quantity: '',
      volume: '',
      value: '',

      collecteC: [],
      unite: '',
      unite2: '',
      name: '',
      type2: '',
      check: true,
      check2: false,
      check3: true,
      check4: false,
      check5: false,
      addweight: false,
      addweight2: false,
      addweight3: false,
    }
  },
  methods: {
    create() {
      this.formRamdam.item.push({
        quantity: '1',
        name: this.name,
        idClient: this.idClient,
        idArticle: this.type2,
        immatriculation: this.immatriculation,
        nameC: this.chauffeur,
        designation: this.type3,
        idFacturation: this.type4,
        codeArticle: 'ABS',
        date: Date.now(),
      })
      ;(this.unite = ''),
        (this.type2 = ''),
        (this.type3 = ''),
        (this.type4 = ''),
        (this.openF = false),
        (this.fournitureF = [])
    },
    createC() {
      this.form.packagings.push({
        quantity: Math.ceil(this.quantity),
        type: this.value,
        volume: Math.ceil(this.volume),
      })
    },
    sendEmail() {
      this.$axios
        .post(`${process.env.GET_TRACK}/api/email/absencedasri`, {
          ...this.formRamdam,
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err)
        })
    },
    createR() {
      this.formRamdamC.collecte.push({
        quantity: this.quantity,
        type: this.value,
        idArticle: this.IdArticleC,
        idFacturation: this.IdFacturationC,
        volume: this.volume,
      })
      ;(this.quantity = ''),
        (this.type = ''),
        (this.volume = ''),
        (this.IdArticleC = ''),
        (this.IdFacturationC = ''),
        (this.openC = false),
        (this.collecteC = [])
    },
    mutiple() {
      this.createC()
      this.createR()
    },
    deleteC(id) {
      this.form.packagings.splice(id, 1)
    },
    deleteT(id) {
      this.formRamdam.item.splice(id, 1)
    },
    push() {
      this.form.push({
        name: this.c.attributes.nom,
      })
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },

    postStrapi() {
      this.$axios
        .post('http://localhost:8787/facturations', {
          ...this.formRamdam,
        })
        .then((res) => {
          this.sucess = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    postStrapiC() {
      this.$axios
        .post('https://st.rouxnicolas.fr/facturation-collectes', {
          ...this.formRamdamC,
        })
        .then((res) => {
          // this.$router.push('/transport/to-collect')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    selected(id) {
      this.choose.push(id)
      this.searchclient = ''
    },
    selecte(id) {
      this.fournitureF.push(id)
      this.searchfourniture = ''
    },
    selecteC(id) {
      this.collecteC.push(id)
      this.searchcollecte = ''
    },

    //  deleteItem(i) {
    //      this.todos.slice(i)
    //  }
  },
  computed: {
    filterclient() {
      return this.client.filter((c) => c.nom.trim().includes(this.searchclient))
    },
    filterfourniture() {
      return this.fourniture.filter((c) =>
        c.designation.trim().includes(this.searchfourniture)
      )
    },
    filtercollecte() {
      return this.collecte.filter((c) =>
        c.nom.trim().includes(this.searchcollecte)
      )
    },
    ...mapGetters(['loggedInUser']),
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
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
main {
  overflow-x: hidden;
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
  color: var(--black);
}

.form_pred {
  margin-top: 70px;
  padding: 20px;
  margin-bottom: 150px;
}

.form_pred h2 {
  font-size: 16px;
}

.form_pred hr {
  border: none;
  background-color: var(--black);
  width: 20px;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.search {
  background-image: url('~assets/img/svg/search.svg');
  background-repeat: no-repeat;
  background-position: 95% 50%;
}

.searchfourniture {
  background-image: url('~assets/img/svg/searchfourniture.svg');
  background-repeat: no-repeat;
  background-color: var(--yellow);
  background-position: 95% 50%;
  border: 1px solid var(--yellow);
}

.box_todo {
  display: flex;
  background-color: var(--bck);
  flex-flow: row;
  margin-top: -10px;
  padding: 0px 0px 10px 0px;
  align-items: center;
  justify-content: space-between;
}

.label_todo_2 {
  width: 30%;
}

.label_todo_2 p {
  font-size: 12px;
}

.label_todo_select_2 p {
  font-size: 12px;
}

.label_todo_select_2 {
  width: 75%;
}

.label_todo_2 input {
  background-color: var(--white);
  width: 100%;
}

.label_todo_2 input {
  background-color: var(--white);
  width: 100%;
}

.label_todo {
  width: 25%;
}

.label_todo p {
  font-size: 12px;
}

.label_todo_select p {
  font-size: 12px;
}

.label_todo_select {
  width: 45%;
}

.label_todo input {
  background-color: var(--white);
  width: 100%;
}

.label_todo input {
  background-color: var(--white);
  width: 100%;
}

select {
  width: 100%;
  font-weight: 700;
  outline: none;
  color: var(--black);
  background-image: url('~assets/img/svg/liste.svg');
  background-repeat: no-repeat;
  background-position: 90% 50%;
}

.add_todo {
  margin-top: 10px;
  border: 1px solid var(--gray-step);
  padding: 18px;
  border-radius: 4px;
  display: flex;
  margin-top: 20px;
  background-color: var(--gray-step);
  width: 65%;
  color: var(--white);
  font-weight: 700;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: all 0.3s;
}

.add_todo_check {
  background-color: var(--green);
  pointer-events: all;
  border: 1px solid var(--green);
}

.toggle {
  width: 55px;
  height: 30px;
  border-radius: 40px;
  transition: all 0.3s;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: var(--gray-step);
}

.rond {
  width: 20px;
  display: flex;
  justify-content: flex-start;
  height: 20px;
  margin-left: 7px;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: var(--white);
}

.toggle_bck {
  background-color: var(--green);
}

.active_toggle {
  justify-content: flex-end;
  margin-left: 25px;
}

.box_toggle {
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-content: flex-start;
}

.toggle_container {
  width: 25%;
}

.text_toggle {
  font-size: 14px;
  line-height: 18px;
  width: 100%;
}

.space {
  margin-top: 30px;
}

.space_2 {
  margin-top: 20px;
}

.space_3 {
  margin-top: 11px;
}

.recap {
  margin-top: 10px;
}

.array {
  display: flex;
  margin-top: 5px;
  background-color: var(--white);
  padding: 15px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--gray-step);
}

.array_content {
  display: flex;

  justify-content: flex-start;
  align-items: center;
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
  overflow: scroll;
}

.array_delete svg {
  width: 15px;
}

.array_content p:nth-child(2) {
  font-weight: 400;
}

.check_radio {
  width: 40px;
  height: 40px;
}

.box {
  display: flex;
  align-items: center;
}

.text_check {
  margin-top: -10px;
}

.box_check {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}

.check_container {
  width: 10%;
}

.check_container p {
  width: 25px;
  height: 25px;
  background-color: var(--white);
  border: 1px solid var(--green);
  border-radius: 4px;
  transition: all 0.3s;
}

.checkgreen {
  background-color: var(--green) !important;
  background-image: url('~assets/img/svg/check.svg');
}

.check_container .no-check {
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 1px solid var(--gray-step);
  border-radius: 4px;
}

.date {
  background-image: url('~assets/img/svg/calendar.svg');
  background-repeat: no-repeat;
  background-size: 8%;
  background-position: 90% 50%;
}

input[type='date']::-webkit-inner-spin-button,
input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

.box_next {
  background-color: var(--white);
  padding: 40px 0 40px 0;
  border-top: 1px solid var(--gray-step);
  margin: 30px 0px 0px 0px;
  z-index: 100;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.next {
  display: flex;
  justify-content: center;

  align-items: center;
}

.next p {
  width: 100%;
  background-color: var(--gray-step);
  padding: 18px;
  margin: 0 20px;
  border-radius: 4px;
  display: flex;
  transition: all 0.3s;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: 700;
}

.bottom {
  margin-top: 90px;
}

.next svg {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.addweight {
  display: flex;
  align-items: center;
}

.weight {
  width: 30%;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

/* COLLECTEUR */

.form_collect {
  margin-top: 120px;
  padding: 20px;
}

.form_collect h2 {
  font-size: 16px;
}

.form_collect hr {
  border: none;
  background-color: var(--black);
  width: 20px;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.collecteur {
  background-color: var(--green-light);
  padding: 15px;
  background-image: url('~assets/img/svg/check-circle.svg');
  background-repeat: no-repeat;
  border-radius: 4px;
  background-position: 95% 50%;
  border: 2px solid var(--green);
}

.fixed {
  margin-top: 20px;
}

.fixed p {
  font-size: 12px;
}

.open {
  pointer-events: none;
  background-color: var(--gray);
}

.openF {
  display: none !important;
}

.openC {
  display: none !important;
}

.fixed p:nth-child(2) {
  font-weight: bold;
  font-size: 16px;
}

.label_flex {
  margin-top: 20px;
}

.label_flex p {
  font-size: 12px;
}

.label_flex p:nth-child(2) {
  font-weight: bold;
  font-size: 16px;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.box_filter {
  padding: 15px;
  background-color: var(--bck);
  border: 1px dashed var(--green);
  margin-bottom: 10px;
  border-radius: 4px;
  margin-top: 10px;
}

.box_filter_2 {
  padding: 10px;
  background-color: var(--white);
  border: 1px solid var(--gray-step);
  margin-bottom: 10px;
  border-radius: 4px;
  margin-top: 10px;
}

.box_filter p:nth-child(1) {
  text-transform: uppercase;
  font-weight: 700;
}

.display {
  display: none;
}

.select_green {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  background-color: var(--green-light);
  border: 2px solid var(--green);
  border-radius: 4px;
  background-image: url('~assets/img/svg/check-circle.svg');
  background-repeat: no-repeat;
  background-position: 96% 50%;
}

.select_green p:nth-child(1) {
  text-transform: uppercase;
  width: 250px;
}

.item_delete {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.247);
  inset: 0;
  z-index: 200;
}

.box_delete {
  position: fixed;
  background-color: var(--white);
  top: 250px;
  left: 20px;
  right: 20px;
  padding: 30px 20px;
  border-radius: 4px;
  z-index: 201;
}

.title_delete {
  display: flex;
  justify-content: flex-start;
}

.title_delete svg {
  width: 20px;
  margin-right: 10px;
}

.title_delete p {
  font-size: 14px;
  color: var(--green);
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
  background-color: var(--green);
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  margin-top: 10px;
  color: var(--white);
}

.valide_array {
  background-color: var(--green) !important;
  pointer-events: all !important;
}
</style>
