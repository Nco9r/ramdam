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
            <p>Bordereau de suivi Dasri</p>
            <p></p>
          </div>
        </nuxt-link>
        <div class="process">
          <div class="text_process">
            <p>PRED</p>
            <p :class="{ green_process: form2 }">Collecteur</p>
            <p>Destinataire</p>
          </div>
          <div class="step_process">
            <p></p>
            <span :class="{ green_span: form2 }"></span>
            <p :class="{ green_step: form2 }"></p>
            <span></span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <form>
      <div class="form_pred" v-if="form1">
        <h2>Personne responsable de l’élimination des déchets</h2>
        <hr />
        <div class="label_group">
          <div class="label">
            <p>Numéro de siret ou nom de l’entreprise</p>
            <input type="text" class="search" />
          </div>
        </div>
        <div class="label_group">
          <div class="label">
            <p>Personne à contacter</p>
            <input type="text" placeholder="Jean Dupont" />
          </div>
        </div>
        <div class="label_group">
          <div class="label">
            <p>Téléphone ou Fax</p>
            <input type="phone" placeholder="+33 " />
          </div>
        </div>
        <div class="label_group">
          <div class="label">
            <p>Email (Optionnel)</p>
            <input type="email" placeholder="votre@email.fr" />
          </div>
        </div>
        <div class="box_toggle space">
          <div class="toggle_container">
            <div
              class="toggle"
              @click="toggle = !toggle"
              :class="{ toggle_bck: toggle }"
            >
              <div class="rond" :class="{ active_toggle: toggle }"></div>
            </div>
          </div>
          <div class="text_toggle">
            <p>Je souhaite ajouter une adresse de collecte ou d’enlévement.</p>
          </div>
        </div>
        <div class="label_group" v-if="toggle">
          <div class="space_2"></div>
          <p>Adresse d'enlèvement</p>
          <hr />
          <div class="space_2"></div>
          <div class="label">
            <p>Nom du site d'enlèvement</p>
            <input type="text" placeholder="Intitulé" />
          </div>
          <div class="label">
            <p>Adresse du site d'enlèvement</p>
            <input type="text" placeholder="33000, Bordeaux" />
          </div>
          <div class="label">
            <p>Informations complémentaires</p>
            <textarea type="text" placeholder="Champs libre pour préciser" />
          </div>
        </div>
        <h2 class="space">Fourniture déposé</h2>

        <hr />
        <div class="todo_fr space_2">
          <div class="box_todo">
            <div class="label_todo">
              <p>Unité</p>
              <input type="number" v-model="unite" required />
            </div>
            <div class="label_todo_select">
              <p>Type</p>
              <select v-model="type" name="" id="" required autocomplete="none">
                <option disabled value="">Liste</option>
                <option value="B100 - Bidon de 10 litres">Bidon de 10l</option>
                <option value="F05 - fût de 5l">Fût 5l</option>
              </select>
            </div>
          </div>
        </div>
        <div class="add_todo" :class="{ add_todo_check : unite}" @click="create">
          <p >Ajouter</p>
        </div>
        <div class="recap" v-if="todos.length > 0">
          <div class="space_2"></div>
          <p>Récapitulatif :</p>
          <div class="space_3"></div>
         
        </div>
        <div class="array" v-for="td in todos" :key="td.id">
          <p>{{ td.unite }}</p>
          <p>{{ td.type }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="#D60021"
              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            />
          </svg>
        </div>
        <h2 class="space">Détail du déchets</h2>
        <hr />
        <div class="box_check space_2">
          <div class="check_container" @click="check = !check">
            <p v-if="!check"></p>
            <p v-if="check"></p>
          </div>
          <div class="text_check">
            <p>18 01 03 DASRI d’origine humaine</p>
          </div>
        </div>
        <div class="box_check">
          <div class="check_container" @click="check = !check">
            <p class="no-check"></p>
          </div>
          <div class="text_check">
            <p>18 01 02 DASRI d’origine animale</p>
          </div>
        </div>
        <h2 class="space">Conditionnement</h2>

        <hr />
        <p v-if="cond.length === 0">
          Aucun conditionnement n’est encore défini sur ce Bordereau
        </p>
        <div class="todo_fr space_2">
          <div class="box_todo">
            <div class="label_todo">
              <p>Unité</p>
              <input type="number" v-model="unite2" required />
            </div>
            <div class="label_todo_select">
              <p>Type</p>
              <select
                v-model="type2"
                name=""
                id=""
                required
                autocomplete="none"
              >
                <option disabled value="">Liste</option>
                <option value="Bidon de 10 litres">Bidon de 10l</option>
                <option value="fût">Fût 5l</option>
              </select>
            </div>
          </div>
        </div>
        <div class="add_todo" :class="{ add_todo_check : unite2}" @click="createC">
          <p>Ajouter</p>
        </div>
        <div class="recap" v-if="cond.length > 0">
          <p>
            Récapitulatif : Il y a
            <strong>{{ cond.length }}</strong> conditionnement
          </p>
        </div>
        <div class="array" v-for="c in cond" :key="c.id">
          <p>{{ c.unite2 }}</p>
          <p>{{ c.type2 }}</p>
        </div>
        <h2 class="space">Quantité remise</h2>
        <hr />
        <div class="box_toggle space_2">
          <div class="toggle_container">
            <div
              class="toggle"
              @click="toggle3 = !toggle3"
              :class="{ toggle_bck: toggle3 }"
            >
              <div class="rond" :class="{ active_toggle: toggle3 }"></div>
            </div>
          </div>
          <div class="text_toggle">
            <p>Je souhaite ajouter un poids.</p>
          </div>
        </div>
        <div class="label_group">
          <div class="label">
            <p>Code ADR</p>
            <input type="text" />
          </div>
        </div>
        <div class="label_group">
          <div class="label">
            <p>Date de remise au collecteur transporteur</p>
            <input type="date" class="date" />
          </div>
        </div>
        <div class="next">
          <p>Annuler</p>
          <p @click=";(form1 = false), (form2 = true)">
            Etape suivante
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#FFFFFF"
                d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
              />
            </svg>
          </p>
        </div>
      </div>
      <div class="form_collect" v-if="form2">
        <h2>Entreprise de transport</h2>
        <hr />
        <div class="label_group collecteur">
          <p><strong>RAMDAM</strong></p>
          <p>509 185 948 00031</p>
          <p>7 RUE MIREPORT 33310 LORMONT</p>
        </div>
        <div class="label_group fixed">
          <p>Personne à contacter</p>
          <p>DOUECK Matthieu</p>
        </div>
        <div class="label_group fixed">
          <p>Téléphone ou Fax</p>
          <p>09 51 32 17 34</p>
        </div>
        <div class="label_group fixed">
          <p>Email</p>
          <p>contact@ramdam-bordeaux.fr</p>
        </div>
        <div class="space"></div>
        <h2>Autorisations</h2>
        <hr />
        <div class="label_group fixed">
          <p>Numéro de récépissé</p>
          <p>2019-T-056</p>
        </div>
        <div class="label_group flex">
          <div class="label_flex">
            <p>Département</p>
            <p>33</p>
          </div>
          <div class="label_flex">
            <p>Limite de validité</p>
            <p>09/08/2024</p>
          </div>
        </div>
        <div class="space"></div>
        <h2>Transport du déchet</h2>
        <hr />

        <div class="next">
          <p @click=";(form1 = true), (form2 = false)">Retour</p>
          <p @click=";(form1 = false), (form2 = false), (form3 = true)">
            Etape suivante
          </p>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form1: true,
      form2: false,
      form3: false,
      toggle: false,
      toggle2: false,
      toggle3: false,
      todos: [],
      cond: [],
      unite: '',
      type: '',
      unite2: '',
      type2: '',
      check: false,
    }
  },
  methods: {
    create() {
      this.todos.push({ unite: this.unite, type: this.type })
      ;(this.unite = ''), (this.type = '')
    },
    createC() {
      this.cond.push({ unite: this.unite2, type: this.type2 })
      ;(this.unite2 = ''), (this.type2 = '')
    },
    //  deleteItem(i) {
    //      this.todos.slice(i)
    //  }
  },
}
</script>

<style>
.top_bsdasri {
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  padding: 20px;
  right: 0;
  height: 120px;
  border-bottom: 1px solid var(--gray);
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

.process {
  display: flex;
  flex-flow: column;
  margin-top: 20px;
}

.text_process {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}

.text_process p {
  width: 70px;
}

.text_process p:nth-child(1) {
  font-weight: 700;
  color: var(--green);
}

.green_process {
  font-weight: 700;
  color: var(--green);
}

.green_step {
  background-color: var(--green) !important;
}

.text_process p:nth-child(2) {
  margin-left: 12px;
}

.text_process p:nth-child(3) {
  margin-right: 12px;
}

.step_process {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.step_process p {
  width: 10px;
  height: 10px;
  background-color: var(--gray-step);
  border-radius: 50%;
}

.step_process p:nth-child(1) {
  width: 10px;
  height: 10px;
  background-color: var(--green);
  border-radius: 50%;
}

.green_span {
  border: 1px dashed var(--green) !important;
}

.step_process span {
  border: 1px dashed var(--gray-step);
  width: 40%;
}

.form_pred {
  margin-top: 120px;
  padding: 20px;
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

.todo_fr {
  background-color: var(--gray);
  border: 1px dashed var(--gray-step);
  border-radius: 2px;
}

.box_todo {
  display: flex;
  flex-flow: row;
  padding: 20px 15px 30px 15px;
  align-items: center;
  justify-content: space-between;
}

.label_todo {
  width: 20%;
}

.label_todo p {
  font-size: 12px;
}

.label_todo_select p {
  font-size: 12px;
}

.label_todo_select {
  width: 75%;
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
  padding: 15px;
  display: flex;
  background-color: var(--gray-step);
  width: 50%;
  color: var(--white);
  font-weight: 700;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: all .3s;
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
  margin-top: 10px;
}

.recap {
  margin-top: 10px;
}

.array {
  display: flex;
  margin-top: 5px;
  background-color: var(--white);
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--gray-step);
}

.array p {
  font-weight: 700;
}

.array svg {
  width: 15px;
}

.array p:nth-child(2) {
  margin-left: 10px;
  font-weight: 400;
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
  background-color: var(--green);
  background-image: url('~assets/img/svg/check.svg');
  border: 1px solid var(--green);
  border-radius: 4px;
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

.next {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  align-items: center;
  margin-bottom: 50px;
}

.next p:nth-child(2) {
  width: 65%;
  background-color: var(--green);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-weight: 700;
}

.next p:nth-child(1) {
  width: 33%;
  background-color: transparent;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  font-weight: 700;
}

.next svg {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-position: 95% 50%;
  border: 2px solid var(--green);
}

.fixed {
  margin-top: 20px;
}

.fixed p {
  font-size: 12px;
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
</style>
