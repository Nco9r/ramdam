<template>
  <div class="choose">
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
          <p>Choix de la prestation</p>
          <p></p>
        </div>
      </div>
    </div>
    <div class="box_items">
      <nuxt-link to="/depose-fournitures">
        <div class="item">
          <div class="item_text">
            <div class="img_text">
              <img src="~assets/img/svg/cartond.svg" alt="">
            </div>
            <div class="text">
                <p>Dépose de Dasri</p>
            <p>Je dépose des fournitures chez le client sans collecte.</p>
            </div>
          </div>
          <div class="item_cta">
           <div class="svg">
              <img src="~assets/img/svg/angle-right.svg" alt="">
           </div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/create-bsdasri">
        <div class="item">
         
          <div class="item_text">
              <div class="img_text">
              <img src="~assets/img/svg/collectec.svg" alt="">
            </div>
            <div class="text">
            <p>Collecte de Dasri</p>
            <p>Je dépose et collecte des fournitures chez le client.</p>
            </div>
          </div>
           <div class="item_cta">
           <div class="svg">
              <img src="~assets/img/svg/angle-right.svg" alt="">
           </div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/client-absent">
        <div class="item border_none">
          
          <div class="item_text">
            <div class="img_text">
              <img src="~assets/img/svg/abs.svg" alt="">
            </div>
            <div class="text">
            <p>Absence client</p>
            <p>Le client est absent lors du passage.</p>
          </div>
          </div>
           <div class="item_cta">
           <div class="svg">
              <img src="~assets/img/svg/angle-right.svg" alt="">
           </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hasHistory() {
      return window.history.length > 2
    },
  },
}
</script>

<style scoped>
.choose {
  position: relative;
  background-color: var(--white);

}

a {
  text-decoration: none;
}
.top_bsdasri {
  position: fixed;
  background-color: var(--white);
  top: 0;
  left: 0;
  padding: 20px;
  right: 0;
  height: 80px;
  /* border-bottom: 1px solid var(--gray-step); */
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

.box_items {
  margin: 100px 21px 0px 21px;
  background-color: var(--white);
  border: 1px solid var(--gray-step);
  border-radius: 6px;
  padding: 25px 20px 10px 20px;
}

.item {

  border-radius: 4px;
  margin-bottom: 20px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--gray-step);
  border-radius: 0;
}

.border_none {
  border-bottom: 0px;
  margin-bottom: -1px;
}

.item_text {
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 80%;
  margin-bottom: 15px;

}

.text p {
  color: var(--black);
  font-weight: 700;
}

.img_text img {
  width: 37px;
  margin-right: 30px;
  margin-top: 12px;
}

.text p:nth-child(2) {
  color: var(--gray-body);
  margin-top: 1px;
  font-weight: 400;
  font-size: 13px;
  align-content: center;
  justify-content: center;
}



.item_cta .svg img {
  width:20px;
}
</style>
