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
                <p>{{ c.siret.trim() }}</p>
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
              <p>Nom</p>
              <input
                type="text"
                :value="i.nom"
                :v-model="(form.nom = i.nom)"
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
                :v-model="(formRamdamC.idClient = i.idClient)"
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
        </div>

        <!-- <div class="label_group">
          <div class="label">
            <p></p>
            <input
              type="text"
              placeholder="Jean Dupont"
              v-model="form.contact"
              required
            />
          </div>
        </div>
        <div class="label_group">
          <div class="label">
            <p>Téléphone ou Fax</p>
            <input
              type="phone"
              placeholder="+33 "
              v-model="form.phone"
              required
            />
          </div>
        </div>
        <div class="label_group">
          <div class="label">
            <p>Email (Optionnel)</p>
            <input
              type="email"
              placeholder="votre@email.fr"
              v-model="form.mail"
            />
          </div>
        </div> -->
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
            <div class="label_todo_2">
              <p>Quantité(s)</p>
              <input type="number" v-model="unite" required />
            </div>
            <div
              class="add_todo"
              :class="{ add_todo_check: unite }"
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
            <p>{{ td.idArticle }}</p>
            <p>{{ td.designation }}</p>
          </div>
          <div class="array_delete" @click="deleteT(td.id)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#D60021"
                d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
              />
            </svg>
          </div>
        </div>
        <h2 class="space">Détail du déchets</h2>
        <hr />
        <div class="box space_2">
          <div class="check_radio">
            <input
              type="radio"
              checked
              name="waste"
              value="18 01 03*"
              v-model="form.wasteCode"
            />
          </div>
          <div class="text_check">
            <p>18 01 03 DASRI d’origine humaine</p>
          </div>
        </div>
        <div class="box">
          <div class="check_radio">
            <input type="radio" name="waste" value="18 01 02*" v-model="form.wasteCode" />
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
          <div class="label_group">
            <div class="label">
              <p>Désignation article</p>
              <input
                type="text"
                :class="{ openC: openC }"
                class="searchfourniture"
                v-model="searchcollecte"
              />
              <div class="filter_2" v-for="c in filtercollecte" :key="c.id">
                <div
                  class="box_filter_2"
                  v-if="searchcollecte"
                  @click="selecteC(c), (openC = !openC)"
                >
                  <p>{{ c.nom }}</p>
                </div>
              </div>
              <div class="select" v-for="i in collecteC" :key="i.id">
                <div class="select_green">
                  <p>
                    <strong>{{ i.nom }}</strong>
                  </p>
                </div>
                <div class="label_group display">
                  <div class="label">
                    <input
                      type="text"
                      :value="i.value"
                      :v-model="(value = i.value)"
                      required
                    />
                  </div>
                </div>
                <div class="label_group display">
                  <div class="label">
                    <input
                      type="text"
                      :value="i.volume"
                      :v-model="(volume = i.volume)"
                      required
                    />
                  </div>
                </div>
                <div class="label_group display">
                  <div class="label">
                    <input
                      type="text"
                      :value="i.idFacturation"
                      :v-model="(IdFacturationC = i.idFacturation)"
                      required
                    />
                  </div>
                </div>
                <div class="label_group display">
                  <div class="label">
                    <input
                      type="text"
                      :value="i.idArticle"
                      :v-model="(IdArticleC = i.idArticle)"
                      required
                    />
                  </div>
                </div>
                <div class="label_group display">
                  <div class="label">
                    <input
                      type="text"
                      :value="i.nom"
                      :v-model="(designation = i.nom)"
                      required
                    />
                  </div>
                </div>

                <!-- <p>{{formRamdam.idClient}}</p> -->
              </div>
            </div>
          </div>
          <div class="box_todo">
            <div class="label_todo_2">
              <p>Quantité(s)</p>
              <input type="number" v-model="quantity" required />
            </div>
            <div
              class="add_todo"
              :class="{ add_todo_check: quantity }"
              @click="mutiple"
            >
              <p>Ajouter</p>
            </div>
          </div>
        </div>

        <div class="recap" v-if="form.packagings.length > 0">
          <p>Récapitulatif :</p>
        </div>
        <div class="array" v-for="c in form.packagings" :key="c.id">
          <div class="array_content">
            <p>{{ c.quantity }}</p>
            <p>{{ c.volume }}l</p>
            <p>{{ c.designation }}</p>
            <p v-if="c.type === 'GRAND_EMBALLAGE'">Grand emballage</p>
            <p v-if="c.type === 'FUT'">Fût</p>
            <p v-if="c.type === 'BOITE_CARTON'">Boite en carton</p>
            <p v-if="c.type === 'BOITE_PERFORANTS'">Mini-collecteurs</p>
            <p v-if="c.type === 'AUTRE'">Autre</p>
            <p v-if="c.type === 'GRV'">Grand récipient pour vrac</p>
          </div>
          <div class="array_delete" @click="deleteC(c)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#D60021"
                d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
              />
            </svg>
          </div>
        </div>
        <div class="array" v-for="c in formRamdam.packagings" :key="c.id">
          <div class="array_content">
            <p>{{ c.quantity }}</p>
            <p>{{ c.volume }}l</p>
            <p>{{ c.designation }}</p>
            <p v-if="c.type === 'FUT'">Fût</p>
            <p v-if="c.type === 'BOITE_CARTON'">Boite en carton</p>
            <p v-if="c.type === 'BOITE_PERFORANTS'">Mini-collecteurs</p>
            <p v-if="c.type === 'AUTRE'">Autre</p>
            <p v-if="c.type === 'GRV'">Grand récipient pour vrac</p>
          </div>
          <div class="array_delete" @click="deleteC(c)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#D60021"
                d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
              />
            </svg>
          </div>
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
          <input type="number" class="weight" v-model="form.value" />
          <p>kg</p>
        </div>
        <div class="box_toggle space_2" v-if="addweight">
          <div class="toggle_container">
            <div
              class="toggle"
              @click="form.isEstimate = !form.isEstimate"
              :class="{ toggle_bck: form.isEstimate }"
            >
              <div
                class="rond"
                :class="{ active_toggle: form.isEstimate }"
              ></div>
            </div>
          </div>
          <div class="text_toggle">
            <p>Il s'agit d'une estimation</p>
          </div>
        </div>
        <div class="label_group space_2">
          <div class="label">
            <p>Code ADR</p>
            <input
              type="text"
              placeholder="Code de danger"
              value="UN3291 - Déchet hospitalier N.S.A, 6.2, II, (-)"
              v-model="form.adrCode"
            />
          </div>
        </div>
        <div class="box_next">
          <div class="next">
            <p @click=";(form1 = false), (form2 = true), scrollTop()">
              Étape suivante
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#fff"
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

        <div class="label_group space_2">
          <div class="label">
            <p>Immatriculation</p>
            <input
              type="text"
              placeholder="HR-567-HJ"
              :v-model="(form.plates = loggedInUser.immatriculation)"
              :value="loggedInUser.immatriculation"
            />
          </div>
        </div>

        <div class="label">
          <p>Lot accepté</p>
          <div class="box space_2">
            <div class="check_radio">
              <input
                type="radio"
                checked="true"
                value="ACCEPTED"
                v-model="form.acceptation"
                @click="addweight2 = false"
              />
            </div>
            <div class="text_check">
              <p>Accepté en totalité</p>
            </div>
          </div>
          <div class="box">
            <div class="check_radio">
              <input
                type="radio"
                value="REFUSED"
                v-model="form.acceptation"
                @click="addweight2 = true"
              />
            </div>
            <div class="text_check">
              <p>Réfusé</p>
            </div>
          </div>
          <div class="box">
            <div class="check_radio">
              <input
                type="radio"
                value="PARTIALLY_REFUSED"
                v-model="form.acceptation"
                @click="addweight2 = true"
              />
            </div>
            <div class="text_check">
              <p>Refus partiel</p>
            </div>
          </div>
          <div class="addweight" v-if="addweight2">
            <p>Quantité refusée :</p>
            <input type="text" class="weight" v-model="form.refusedWeight" />
            <p>kg</p>
          </div>
          <div class="label space_2" v-if="addweight2">
            <p>Motif de refus</p>
            <textarea type="text" v-model="form.refusalReason">
<p>Emballage non conforme</p></textarea
            >
          </div>
          <div class="label_group">
            <div class="label space_2">
              <p>Date de prise en charge</p>
              <input type="date" class="date" v-model="form.takenOverAt" />
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
            <p @click=";(form1 = false), (form2 = false), (form3 = true)">
              Étape suivante
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
        <h2>Installation destinataire</h2>
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
        <h2>Réception du déchet</h2>
        <hr />
        <p>Cette section sera disponible quand le déchet aura été envoyé</p>
        <div class="space"></div>
        <h2>Traitement du déchet</h2>
        <hr />
        <p>Cette section sera disponible quand le déchet aura été reçu</p>
        <div class="space"></div>
        <div class="space"></div>
        <div class="box_next bottom">
          <div class="next">
            <p
              @click="
                ;(form1 = false),
                  (form2 = false),
                  (form3 = true),
                  createBsd(),
                  postStrapi(),
                  sendEmail(),
                  postStrapiC()
              "
            >
              Valider le BSD
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
        <p>Collecte fourniture validée</p>
      </div>
      <div class="content_delete">
        <p>
          Vous avez bien validé la collecte de fourniture. Un email a été envoyé
          au client pour lui notifier la prestation.
        </p>
      </div>
      <div class="btn_delete">
        <nuxt-link to="/transport/to-collect">
          <p class="supp">Transport</p>
        </nuxt-link>
      </div>
    </div>
    <div v-if="error" class="item_delete"></div>
    <div class="box_delete" v-if="error">
      <div class="title_delete">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#D60021"
            d="M12,7a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Zm0,8a1,1,0,1,0,1,1A1,1,0,0,0,12,15Zm9.71-7.44L16.44,2.29A1.05,1.05,0,0,0,15.73,2H8.27a1.05,1.05,0,0,0-.71.29L2.29,7.56A1.05,1.05,0,0,0,2,8.27v7.46a1.05,1.05,0,0,0,.29.71l5.27,5.27a1.05,1.05,0,0,0,.71.29h7.46a1.05,1.05,0,0,0,.71-.29l5.27-5.27a1.05,1.05,0,0,0,.29-.71V8.27A1.05,1.05,0,0,0,21.71,7.56ZM20,15.31,15.31,20H8.69L4,15.31V8.69L8.69,4h6.62L20,8.69Z"
          />
        </svg>
        <p class="red">Une erreur s'est produite</p>
      </div>
      <div class="content_delete">
        <p>
          Une ou plusieurs erreurs empeche la validation du bordereau. Veuillez
          vérifier vos informations et réessayer.
        </p>
      </div>
      <div class="btn_delete">
        <p class="supp supperror" @click="error = !error">Retour</p>
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
      error: false,
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
        item: [],
        itemc: [],
        idClient: '',
        email: '',
        designation: '',
        contact: '',
        nom: '',
      },
      formRamdamc: {
        item: [],
        idClient: '',
        email: '',
        designation: '',
        contact: '',
        nom: '',
      },
      formRamdamC: {
        idClient: '',
        collecte: [],
      },

      formRamdam_2: {
        idClient: '',
      },
      form: {
        contact: '',
        idClient: '',
        mail: '',
        adrCode: 'UN3291 - Déchet hospitalier N.S.A, 6.2, II, (-)',
        wasteCode: '',
        acceptation: '',
        road: 'ROAD',
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
        quantity: this.unite,
        name: this.name,
        idClient: this.idClient,
        idArticle: this.type2,
        immatriculation: this.immatriculation,
        nameC: this.chauffeur,
        designation: this.type3,
        idFacturation: this.type4,
        codeArticle: 'Coldasri',
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
    createR() {
      this.formRamdamC.collecte.push({
        quantity: this.quantity,
        type: this.value,
        idArticle: this.IdArticleC,
        idFacturation: this.IdFacturationC,
        volume: this.volume,
      })
      this.formRamdam.itemc.push({
        quantity: this.quantity,
        designation: this.designation,
        name: this.name,
        idClient: this.idClient,
        idArticle: this.IdArticleC,
        idFacturation: this.IdFacturationC,
        immatriculation: this.immatriculation,
        nameC: this.chauffeur,
        date: Date.now(),
      })
      ;(this.quantity = ''),
        (this.type = ''),
        (this.volume = ''),
        (this.IdArticleC = ''),
        (this.IdFacturationC = ''),
        (this.openC = false),
        (this.collecteC = [])
    },
    sendEmail() {
      this.$axios
        .post(`${process.env.GET_TRACK}/api/email/dasri`, {
          ...this.formRamdam,
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err)
        })
    },
    mutiple() {
      this.createC()
      this.createR()
    },
    deleteC(id) {
      this.form.packagings.splice(id, 1)
      this.formRamdam.itemc.splice(id, 1)
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
    createBsd() {
      console.log(this.form)
      this.error = true
      this.$axios
        .post(`${process.env.GET_TRACK}/api/create`, {
          ...this.form,
        })
        .then((res) => {
          this.sucess = true
        })
        .catch((res) => {
          this.error = true
        })
    },
    postStrapi() {
      this.$axios
        .post('http://localhost:8787/facturations', {
          ...this.formRamdam,
        })
        .then((res) => {
          // this.$router.push('/transport/to-collect')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    postStrapiC() {
      this.$axios
        .post('http://localhost:8787/facturation-collectes', {
          ...this.formRamdam,
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

<style>
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
  width: 23px;
  display: flex;
  justify-content: flex-start;
  height: 23px;
  margin-left: 4px;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: var(--white);
}

.toggle_bck {
  background-color: var(--green);
}

.active_toggle {
  justify-content: flex-end;
  margin-left: 27px;
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
}

.array_delete svg {
  width: 15px;
}

.array_content p:nth-child(2) {
  font-weight: 400;
  width: 60px;
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
  margin: 30px -20px -20px -20px;
}

.next {
  display: flex;
  justify-content: center;

  align-items: center;
}

.next p {
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
.select_green p:nth-child(3) {
  width: 250px;
}

.item_delete {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.452);
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

.red {
  color: var(--red) !important;
}

.supperror {
  background-color: var(--gray-pdf) !important;
  color: var(--gray-body) !important;
}
</style>
