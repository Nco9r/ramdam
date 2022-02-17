<template>
  <div>
    <main>
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
            <p>Aperçu BSDASRI</p>
            <p></p>
          </div>
        </div>
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
      <div class="infos_fixed">
        <div class="item">
          <p>Bordereau numéro</p>
          <p>{{ prev.data.bsdasri.id }}</p>
        </div>
        <div class="item">
          <p>Création</p>
          <p>{{ $moment(prev.data.bsdasri.createdAt).format('lll') }}</p>
        </div>
        <div class="item">
          <p>Statut</p>
          <p v-if="prev.data.bsdasri.status === 'INITIAL'" class="statut">
            Initial
          </p>
          <p
            v-if="prev.data.bsdasri.status === 'SIGNED_BY_PRODUCER'"
            class="statut"
          >
            Signé par le producteur
          </p>
          <p v-if="prev.data.bsdasri.status === 'SENT'" class="statut">
            Envoyé au destinataire
          </p>
          <p v-if="prev.data.bsdasri.status === 'REFUSED'" class="statut">
            Refusé
          </p>
          <p v-if="prev.data.bsdasri.status === 'PROCESSED'" class="statut">
            Traité
          </p>
        </div>
        <div class="item" @click="getPdf()">
          <div class="item_option">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="#202020"
                d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"
              />
            </svg>
            <p>Obtenir PDF</p>
          </div>
        </div>
      </div>

      <div class="pred" v-if="form1">
        <div class="infos">
          <h2>Information du Producteur</h2>
        </div>
        <div class="infos_client">
          <p>{{ prev.data.bsdasri.emitter.company.name }}</p>
          <p>{{ prev.data.bsdasri.emitter.company.siret }}</p>
          <p>{{ prev.data.bsdasri.emitter.company.address }}</p>
        </div>
        <div class="infos space_2">
          <h2>Récapitulatif du déchet</h2>
        </div>
        <div class="item">
          <p>Origine du déchets</p>
          <p>{{ prev.data.bsdasri.waste.code }}</p>
        </div>
        <div class="item">
          <p>Récapitualtif</p>
        </div>
        <div
          class="array"
          v-for="bsd in prev.data.bsdasri.emitter.emission.packagings"
          :key="bsd.id"
        >
          <div class="array_content">
            <p>{{ bsd.quantity }}</p>
            <p>{{ bsd.volume }}l</p>
            <p v-if="bsd.type === 'GRAND_EMBALLAGE'">Grand emballage</p>
            <p v-if="bsd.type === 'FUT'">Fût</p>
            <p v-if="bsd.type === 'BOITE_CARTON'">Boite en carton</p>
            <p v-if="bsd.type === 'BOITE_PERFORANTS'">Mini-collecteurs</p>
            <p v-if="bsd.type === 'AUTRE'">Autre</p>
            <p v-if="bsd.type === 'GRV'">Grand récipient pour vrac</p>
          </div>
        </div>
        <div class="infos space_2"></div>
      </div>
      <div class="pred" v-if="form2">
        <div class="infos">
          <h2>Information du Collecteur</h2>
        </div>
        <div class="infos_client">
          <p>{{ prev.data.bsdasri.transporter.company.name }}</p>
          <p>{{ prev.data.bsdasri.transporter.company.siret }}</p>
          <p>{{ prev.data.bsdasri.transporter.company.address }}</p>
        </div>
        <div class="infos space_2">
          <h2>Récapitulatif du déchet</h2>
        </div>
        <div
          class="array"
          v-for="bsd in prev.data.bsdasri.emitter.emission.packagings"
          :key="bsd.id"
        >
          <div class="array_content">
            <p>{{ bsd.quantity }}</p>
            <p>{{ bsd.volume }}l</p>
            <p v-if="bsd.type === 'GRAND_EMBALLAGE'">Grand emballage</p>
            <p v-if="bsd.type === 'FUT'">Fût</p>
            <p v-if="bsd.type === 'BOITE_CARTON'">Boite en carton</p>
            <p v-if="bsd.type === 'BOITE_PERFORANTS'">Mini-collecteurs</p>
            <p v-if="bsd.type === 'AUTRE'">Autre</p>
            <p v-if="bsd.type === 'GRV'">Grand récipient pour vrac</p>
          </div>
        </div>
        <div class="infos space_2">
          <h2>Mode de transport</h2>
        </div>
        <div class="item2">
          <p>Route</p>
        </div>
        <div class="space_2"></div>
        <div class="infos space_2">
          <p>Lot accepté</p>
          <div class="check">
            <p></p>
            <p
              v-if="
                prev.data.bsdasri.transporter.transport.acceptation.status ===
                'ACCEPTED'
              "
            >
              Accepté en totalité
            </p>
            <p
              v-if="
                prev.data.bsdasri.transporter.transport.acceptation.status ===
                'PARTIALLY_REFUSED'
              "
            >
              Refusé partiellement
            </p>
            <p
              v-if="
                prev.data.bsdasri.transporter.transport.acceptation.status ===
                'REFUSED'
              "
            >
              Réfusé
            </p>
          </div>
          <div
            class="space_2"
            v-if="
              prev.data.bsdasri.transporter.transport.acceptation.status ===
                'PARTIALLY_REFUSED' ||
              prev.data.bsdasri.transporter.transport.acceptation.status ===
                'REFUSED'
            "
          >
            <p>Motif de refus</p>
            <textarea
              cols="20"
              rows="5"
              :value="
                prev.data.bsdasri.transporter.transport.acceptation
                  .refusalReason
              "
            ></textarea>
            <div class="item">
              <p>Quantité refusée</p>
              <p>
                <strong
                  >{{
                    prev.data.bsdasri.transporter.transport.acceptation
                      .refusedWeight
                  }}
                  kgs</strong
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="pred" v-if="form3">
        <div class="infos">
          <h2>Information du Destinataire</h2>
        </div>
        <div class="infos_client">
          <p>{{ prev.data.bsdasri.destination.company.name }}</p>
          <p>{{ prev.data.bsdasri.destination.company.siret }}</p>
          <p>{{ prev.data.bsdasri.destination.company.address }}</p>
        </div>
        <div class="infos space_2">
          <h2>Récapitulatif du déchet</h2>
        </div>
        <div
          class="array"
          v-for="bsd in prev.data.bsdasri.emitter.emission.packagings"
          :key="bsd.id"
        >
          <div class="array_content">
            <p>{{ bsd.quantity }}</p>
            <p>{{ bsd.volume }}l</p>
            <p v-if="bsd.type === 'GRAND_EMBALLAGE'">Grand emballage</p>
            <p v-if="bsd.type === 'FUT'">Fût</p>
            <p v-if="bsd.type === 'BOITE_CARTON'">Boite en carton</p>
            <p v-if="bsd.type === 'BOITE_PERFORANTS'">Mini-collecteurs</p>
            <p v-if="bsd.type === 'AUTRE'">Autre</p>
            <p v-if="bsd.type === 'GRV'">Grand récipient pour vrac</p>
          </div>
        </div>
        <div class="infos space_2">
          <h2>Opération (code de traitement)</h2>
        </div>

        <div class="space_2"></div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const id = params.id
    const prev = await $axios.get(`${process.env.GET_TRACK}/api/prewiewbsdasri/${id}`)
    return { prev, id }
  },
  data() {
    return {
      form1: true,
      form2: false,
      form3: false,
    }
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    getPdf() {
      this.$axios
        .post(`${process.env.GET_TRACK}/api/bsdasripdf/${this.id}`)
        .then((res) => {
          console.log(res)
          res.data = res.data.bsdasriPdf.downloadLink
          console.log(res.data)
          window.open(`${res.data}`, '_blank')
        })
        .catch((err) => {
          console.log(err)
        })
    },

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
  height: 120px;
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


.infos_fixed {
  margin-top: 140px;
  padding: 0 15px;
}

.item {
  margin-bottom: 10px;
}

.item p:nth-child(1) {
  font-size: 14px;
  margin-bottom: 3px;
  color: var(--black);
}

.item p:nth-child(2) {
  padding: 18px;
  border: 1px solid var(--gray-step);
  border-radius: 4px;
}

.item2 p {
  padding: 18px;
  border: 1px solid var(--yellow);
  background-color: var(--yellow);
  border-radius: 4px;
  color: var(--black);
  font-weight: 700;
}

.pred {
  margin-top: 20px;
  padding: 20px 15px;
  border-top: 1px solid var(--gray-step);
  background-color: var(--white);
}

.pred h2 {
  font-size: 16px;
}

.item_option {
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: var(--gray-pdf);
  justify-content: center;
  width: 140px;
  border-radius: 4px;
  margin-top: 20px;
  height: 70px;
}

.item_option svg {
  width: 25px !important;
  margin-bottom: -7px;
  margin-top: 7px;
}

.item_option p {
  font-weight: bold;
  color: var(--black);
  border: none !important;
  padding: 10px !important;
  font-size: 12px;
}

.infos_client {
  border: 2px solid var(--green);
  background-color: var(--green-light);
  padding: 10px;
  margin-top: 10px;
}

.infos_client p:nth-child(1) {
  font-weight: 700;
  text-transform: uppercase;
}
.statut {
  color: var(--white);
  font-weight: 700;
  background-color: var(--green);
  border: 1px solid var(--green) !important;
}

.space_2 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.array {
  display: flex;
  margin-top: 5px;
  background-color: var(--white);
  padding: 15px;
  width: 100%;
  border-radius: 4px;
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
}

.check {
  display: flex;
  margin-top: 10px;
  flex-flow: row;
  align-items: center;
}

.check p:nth-child(1) {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: 1px solid var(--green);
  background-color: var(--green);
}

.check p:nth-child(1)::after {
  content: '\2713';
  color: var(--white);
  font-weight: 900;
}
</style>
