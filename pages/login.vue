<template>
  <main>
    <section class="login">
      <div class="title_login">
        <img src="@/assets/img/png/ramdam.webp" alt="" />
        <p>
          Offrez à vos déchets médicaux la fin de vie
          <strong>qu’ils méritent !</strong>
        </p>
      </div>
      <div class="form_group">
        <form @submit.prevent="login()">
          <div class="title_form">
            <h2>Connexion</h2>
          </div>
          <div class="label_form">
            <div class="label">
              <p>Email</p>
              <input
                type="email"
                placeholder="votre@email.fr"
                v-model="email"
              />
            </div>
            <div class="label">
              <p>Mot de passe</p>
              <input type="password" placeholder="******" v-model="password" />
            </div>
            <div class="forget">
              <p>Mot de passe <span class="green">oublié</span> ?</p>
            </div>
            <div class="btn_login">
              <button v-if="connexion">Se connecter</button>
              <div v-if="loading" class="loading_supp">
                <p>Connexion en cours...</p>
                <div class="lds-hourglass"></div>
              </div>
            </div>
          </div>
          <p class="error" v-if="error">
            L'email ou le mot de passe est incorrect
          </p>
        </form>
      </div>
      <div class="bans">
        <p>RAMDAM ​- ​​7, rue de Mireport - 33310 Lormont</p>
      </div>
    </section>
  </main>
</template>

<script>

export default {
   async asyncData({ $strapi }) {
    const client = await $strapi.find('clients?_limit=-1')
    console.log(client)
    return { client }
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      connexion: true,
      loading: false,
    }
  },
  methods: {
    async login() {
      this.error = null
      ;(this.connexion = false), (this.loading = true)
      try {
        await this.$auth.loginWith('local', {
          data: {
            identifier: this.email,
            password: this.password,
          },
        })
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message
        ;(this.connexion = true), (this.loading = false)
      }
    },
  },
  mounted() {

  }
}
</script>

<style scoped>
.login {
  margin: 0 20px;
}

hr {
  margin-top: 20px;
  border: none;
  width: 100%;
  background-color: var(--gray);
  height: 2px;
}
/* Initialisation de la page */

/* En tête */

.title_login {
  margin-top: 10px;
  text-align: center;
}

.title_login img {
  width: 60%;
}

.title_login p {
  margin-top: -20px;
}

/*  Module de login */

.form_group {
  margin-top: 80px;
}

.title_form {
  margin-bottom: 30px;
}

.label {
  margin-bottom: 10px;
}

.label p {
  margin-bottom: 3px;
  margin-left: 2px;
}

.forget {
  font-size: 12px;
  text-align: center;
}

.forget p {
  color: var(--gray-body);
}

.green {
  color: var(--green);
  font-weight: 700;
}

.btn_login {
  margin-top: 15px;
}

.btn_login button {
  border: none;
  background-color: var(--green);
  outline: none;
  color: var(--white);
  border-radius: 4px;
  width: 100%;
  padding: 18px;
  font-size: 14px;
  font-weight: 700;
}

/*  Bannière */

.bans {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--yellow);
  padding: 15px;
  text-align: center;
}

.bans p {
  font-weight: 700;
  font-size: 12px;
}

.error {
  padding: 20px;
  margin-top: 20px;
  border: 2px solid var(--red);
  background-color: var(--red-light);
  border-radius: 4px;
  color: var(--red);
  font-weight: 700;
  font-size: 12px;
  background-image: url('~assets/img/svg/warning.svg');
  background-size: 30px;
  background-position: 95% 45%;
  background-repeat: no-repeat;
}

.btn_delete .supp {
  padding: 15px;
  background-color: var(--red);
  border-radius: 4px;
  font-weight: 700;
  margin-top: 10px;
  color: var(--white);
}

.loading_supp {
  background-color: var(--green-hover) !important;
  color: var(--red) !important;
  display: flex;
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
  font-weight: 700;
  align-items: center;
  justify-content: center;
}

.loading_supp p {
  background-color: var(--green-hover) !important;
  color: var(--white) !important;
  padding: 18px;
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  margin-top: -15px;
}
.lds-hourglass:after {
  content: ' ';
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 7px 2px 8px -4px;
  box-sizing: border-box;
  border: 14px solid var(--white);
  border-color: var(--white) transparent var(--white) transparent;
  animation: lds-hourglass 1.9s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
