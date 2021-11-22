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
            <p
              @click="
                ;(form1 = true), (form2 = false), (form3 = false), scrollTop()
              "
            >
              PRED
            </p>
            <p
              @click="
                ;(form1 = false), (form2 = true), (form3 = false), scrollTop()
              "
              :class="{ green_process: form2 || form3 }"
            >
              Collecteur
            </p>
            <p
              @click="
                ;(form1 = false), (form2 = false), (form3 = true), scrollTop()
              "
              :class="{ green_process: form3 }"
            >
              Destinataire
            </p>
          </div>
          <div class="step_process">
            <p></p>
            <span :class="{ green_span: form2 || form3 }"></span>
            <p :class="{ green_step: form2 || form3 }"></p>
            <span :class="{ green_span: form3 }"></span>
            <p :class="{ green_step: form3 }"></p>
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
            <input
              type="text"
              class="search"
              placeholder="000 000 ..."
              v-model="siret"
            />
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
              <select v-model="type2" name="" id="" required autocomplete="none">
                <option disabled value="">Liste</option>
                <option value="B100 - Bidon de 10 litres">Bidon de 10l</option>
                <option value="F05 - fût de 5l">Fût 5l</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="add_todo"
          :class="{ add_todo_check: unite }"
          @click="create"
        >
          <p>Ajouter</p>
        </div>
        <div class="recap" v-if="todos.length > 0">
          <div class="space_2"></div>
          <p>Récapitulatif :</p>
          <div class="space_3"></div>
        </div>
        <div class="array" v-for="td in todos" :key="td.id">
          <p>{{ td.unite }}</p>
          <p>{{ td.type2 }}</p>
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
          <div
            class="check_container"
            @click=";(check = true), (check2 = false)"
          >
            <p :class="{ checkgreen: check }"></p>
          </div>
          <div class="text_check">
            <p>18 01 03 DASRI d’origine humaine</p>
          </div>
        </div>
        <div class="box_check">
          <div
            class="check_container"
            @click=";(check = false), (check2 = true)"
          >
            <p :class="{ checkgreen: check2 }"></p>
          </div>
          <div class="text_check">
            <p>18 01 02 DASRI d’origine animale</p>
          </div>
        </div>
        <h2 class="space">Conditionnement</h2>

        <hr />
        <!-- <p v-if="packagings.length === 0">
          Aucun conditionnement n’est encore défini sur ce Bordereau
        </p> -->
        <div class="todo_fr space_2">
          <div class="box_todo">
            <div class="label_todo">
              <p>Quantité</p>
              <input type="number" v-model="quantity" required />
            </div>
            <div class="label_todo_select">
              <p>Type</p>
              <select
                v-model="type"
                name=""
                id=""
                required
                autocomplete="none"
              >
                <option disabled value="">Liste</option>
                <option value="BOITE_CARTON">Boite Carton</option>
                <option value="FUT">Fût</option>
              </select>
            </div>
          </div>
        </div>
        <div
          class="add_todo"
          :class="{ add_todo_check: quantity }"
          @click="createC"
        >
          <p>Ajouter</p>
        </div>
        <div class="recap" v-if="packagings.length > 0">
          <p>
            Récapitulatif : 
          </p>
        </div>
        <div class="array" v-for="c in packagings" :key="c.id">
          <p>{{c.quantity}}</p>
          <p>{{c.type}}</p>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="#D60021"
              d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
            />
          </svg>
        </div>
        <h2 class="space">Quantité remise</h2>
        <hr />
        <div class="box_toggle space_2">
          <div class="toggle_container" @click="addweight = !addweight">
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
        <div class="addweight" v-if="addweight">
          <p>Quantité en kg :</p>
          <input type="text" class="weight" />
          <p>kg</p>
        </div>
        <div class="box_toggle space_2" v-if="addweight">
          <div class="toggle_container">
            <div
              class="toggle"
              @click="toggle4 = !toggle4"
              :class="{ toggle_bck: toggle4 }"
            >
              <div class="rond" :class="{ active_toggle: toggle4 }"></div>
            </div>
          </div>
          <div class="text_toggle">
            <p>Il s'agit d'une estimation</p>
          </div>
        </div>
        <div class="label_group space_2">
          <div class="label">
            <p>Code ADR</p>
            <input type="text" placeholder="Code de danger" />
          </div>
        </div>
        <div class="label_group">
          <div class="label">
            <p>Date de remise au collecteur transporteur</p>
            <input type="date" class="date" />
          </div>
        </div>
        <div class="box_next">
          <div class="next">
            <p @click=";(form1 = false), (form2 = true), scrollTop()">
              Étape suivante
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#008000"
                  d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div class="form_collect" id="form_c" v-if="form2">
        <h2>Entreprise de transport</h2>
        <hr />
        <div class="label_group collecteur">
          <p><strong>RAMDAM</strong></p>
          <p>509 185 948 00031</p>
          <p>7 RUE MIREPORT 33310 LORMONT</p>
        </div>
        <div class="label space_2">
          <p>Champs libre (Optionnel)</p>
          <textarea type="text" placeholder="Champs libre pour préciser" />
        </div>

        <div class="space_2"></div>
        <h2>Transport du déchet</h2>
        <hr />
        <div class="label">
          <p>Mode de transport</p>
          <select type="text" placeholder="Champs libre pour préciser">
            <option value="Route" selected>Route</option>
            <option value="Voie aérienne">Voie aérienne</option>
            <option value="Voie ferrée">Voie ferrée</option>
            <option value="Voie fluviale">Voie fluviale</option>
          </select>
        </div>
        <div class="label">
          <p>Lot accepté</p>
          <div class="box_check space_2">
            <div
              class="check_container"
              @click="
                ;(check3 = true),
                  (check4 = false),
                  (check5 = false),
                  (addweight2 = false)
              "
            >
              <p :class="{ checkgreen: check3 }"></p>
            </div>
            <div class="text_check">
              <p>Accepté en totalité</p>
            </div>
          </div>
          <div class="box_check">
            <div
              class="check_container"
              @click="
                ;(check3 = false),
                  (check4 = true),
                  (check5 = false),
                  (addweight2 = true)
              "
            >
              <p :class="{ checkgreen: check4 }"></p>
            </div>
            <div class="text_check">
              <p>Réfusé</p>
            </div>
          </div>
          <div class="box_check">
            <div
              class="check_container"
              @click="
                ;(check3 = false),
                  (check4 = false),
                  (check5 = true),
                  (addweight2 = true)
              "
            >
              <p :class="{ checkgreen: check5 }"></p>
            </div>
            <div class="text_check">
              <p>Réfus partiel</p>
            </div>
          </div>
          <div class="addweight" v-if="addweight2">
            <p>Quantité refusée :</p>
            <input type="text" class="weight" />
            <p>kg</p>
          </div>
          <div class="label space_2" v-if="addweight2">
            <p>Motif de refus</p>
            <textarea type="text" placeholder="Préciser le motif de refus" />
          </div>
          <div class="label_group">
            <div class="label space_2">
              <p>Date de prise en charge</p>
              <input type="date" class="date" />
            </div>
          </div>
          <h2 class="space">Quantité transporté</h2>
          <hr />
          <div class="box_toggle space_2">
            <div class="toggle_container" @click="addweight3 = !addweight3">
              <div
                class="toggle"
                @click="toggle5 = !toggle5"
                :class="{ toggle_bck: toggle5 }"
              >
                <div class="rond" :class="{ active_toggle: toggle5 }"></div>
              </div>
            </div>
            <div class="text_toggle">
              <p>Je souhaite ajouter une quantité.</p>
            </div>
          </div>
          <div class="addweight" v-if="addweight3">
            <p>Quantité en kg :</p>
            <input type="text" class="weight" />
            <p>kg</p>
          </div>
          <div class="box_toggle space_2" v-if="addweight3">
            <div class="toggle_container">
              <div
                class="toggle"
                @click="toggle6 = !toggle6"
                :class="{ toggle_bck: toggle6 }"
              >
                <div class="rond" :class="{ active_toggle: toggle6 }"></div>
              </div>
            </div>
            <div class="text_toggle">
              <p>Il s'agit d'une estimation</p>
            </div>
          </div>
        </div>
        <p>
          La date de remise à l'installation destinataire sera éditable après
          l'emport du déchet
        </p>
        <div class="box_next">
          <div class="next">
            <p @click=";(form1 = true), (form2 = false), scrollTop()">Retour</p>

            <p @click=";(form1 = false), (form2 = false), (form3 = true)">
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
      </div>
      <div class="form_destinataire" id="form_c" v-if="form3">
        <h2>Entreprise de transport</h2>
        <hr />
        <div class="label_group collecteur">
          <p><strong>SARP INDUSTRIES</strong></p>
          <p>850 942 442 00011</p>
          <p>32 AV JEAN JAURES 33530 BASSENS</p>
        </div>
        <div class="label space_2">
          <p>Champs libre (Optionnel)</p>
          <textarea type="text" placeholder="Champs libre pour préciser" />
        </div>
        <h2>Entreprise de transport</h2>
        <hr />
        <p>Cette section sera disponible quand le déchet aura été envoyé</p>
        <div class="space"></div>
        <h2>Traitement du déchet</h2>
        <hr />
        <p>Cette section sera disponible quand le déchet aura été reçu</p>
        <div class="box_next des">
          <div class="next">
            <p
              @click="
                ;(form1 = false), (form2 = true), (form3 = false), scrollTop()
              "
            >
              Retour
            </p>

            <p
              @click="
                ;(form1 = false), (form2 = false), (form3 = true), createBsd()
              "
            >
              Valider le BSD
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import createBsdasri from '../apollo/mutations/createBsdasri'

export default {
  data() {
    return {
      form1: true,
      siret: '',
      code: '',
      form2: false,
      form3: false,
      toggle: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: false,
      toggle6: false,
      todos: [],
      packagings: [],
      unite: '',
      type: '',
      quantity: '',
      unite2: '',
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
      this.todos.push({ unite: this.unite, type: this.type })
      ;(this.unite = ''), (this.type = '')
    },
    createC() {
      this.packagings.push({ quantity: this.quantity, type: this.type })
      ;(this.quantity = ''), (this.type = '')
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    createBsd() {
      this.$apollo
        .mutate({
          mutation: createBsdasri.CreateBsdasri,
          variables: {
            input: {
              waste: {
                code: '18 01 03*',
                adr: 'non soumis',
              },
              emitter: {
                company: {
                  siret: '00000000000861',
                  name: 'Hopital Saint Denis',
                  address: '40 rue du médecin, 93200 Saint Denis',
                  mail: 'contact@hsd.fr',
                  contact: 'Docteur Brun',
                  phone: '06 06 06 06 06',
                },
                emission: {
                  weight: {
                    value: 1,
                    isEstimate: false,
                  },
                  packagings: this.packagings
                },
              },
              destination: {
                company: {
                  siret: '00000000000861',
                  name: 'Traiteur Inc',
                  address: '14 rue des acacias, 68100 Mulhouse',
                  mail: 'contact@traiteur.co',
                  contact: 'Bob Lapointe',
                  phone: '07 01 00 00 00',
                },
              },
              transporter: {
                company: {
                  siret: '00000000000861',
                  name: 'Transport Inc',
                  address: '6 rue des 7 chemins, 07100 ANNONAY',
                  mail: 'contact@transport.co',
                  phone: '07 00 00 00 00',
                  contact: 'John Antoine',
                },
                recepisse: {
                  number: 'KIH-458-87',
                  department: '07',
                  validityLimit: '2022-01-01',
                },
              },
            },
          },
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
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
  border-bottom: 1px solid var(--gray-step);
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
  margin: 30px -20px -20px -20px;
}

.next {
  display: flex;
  justify-content: center;

  align-items: center;
}

.next p {
  width: 80%;
  background-color: var(--green-light);
  padding: 15px;
  border: 1px dashed var(--green);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--green);
  font-weight: 700;
}

.next svg {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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

/* DESTINATAIRE */

.form_destinataire {
  margin-top: 120px;
  padding: 20px;
}

.form_destinataire h2 {
  font-size: 16px;
}

.form_destinataire hr {
  border: none;
  background-color: var(--black);
  width: 20px;
  height: 2px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.des {
  position: absolute;
  left: 0;
  right: 20px;
  bottom: 20px;
}
</style>
