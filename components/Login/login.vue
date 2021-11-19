<template>
  <section class="login">
    <div class="title_login">
      <img src="@/assets/img/png/ramdam.webp" alt="" />
      <p>
        Offrez à vos déchets médicaux la fin de vie
        <strong>qu’ils méritent !</strong>
      </p>
    </div>
    <div class="form_group">
      <form>
        <div class="title_form">
          <h2>Connexion</h2>
        </div>
        <div class="label_form">
          <div class="label">
            <p>Email</p>
            <input type="email" placeholder="votre@email.fr" />
          </div>
          <div class="label">
            <p>Mot de passe</p>
            <input type="password" placeholder="******" />
          </div>
          <div class="forget">
            <p>Mot de passe <span class="green">oublié</span> ?</p>
          </div>
          <div class="btn_login">
            <nuxt-link to="/"> <button>Se connecter</button></nuxt-link>
          </div>
        </div>
        <hr />
      </form>
    </div>
    <div class="bans">
      <p>RAMDAM ​- ​​7, rue de Mireport - 33310 Lormont</p>
    </div>
  </section>
</template>

<script>
export default {}
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
  margin-bottom: 15px;
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
  border-radius: 0px;
  width: 100%;
  padding: 15px;
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

</style>
