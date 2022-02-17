<template>
<div>
  <div class="option" @click="option = !option">
            <img src="~assets/img/svg/option.svg" alt="">
          </div>
    <div class="item_option" v-if="option">
            <div class="overlay" @click="option = !option" :key="bsd">
            </div>
            {{bsd.id}}
            <div class="option_list">
              <div class="box_list">
                <div class="title_list">
                  <h2>Option</h2> 
                  <img @click="option = !option" src="~assets/img/svg/close.svg" alt="">
                  </div>
              </div>
            </div>
          </div>
</div>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            option: false
        }
    }

}
</script>

<style scoped>

.overlay {
  position: fixed; background-color: #2020203b;
  z-index: 3;
  inset: 0;
}

.option {
  position: absolute;
  right: 15px;
  top: 20px;
  width: 30px;
  height: 30px;
}

.option img {
  width: 25px;
}


.option_list {
   position: fixed; 
  z-index: 4;
  background-color: var(--white);
  left: 25px;
  right: 25px;
  top: 40%;
  height: 325px;
  border-radius: 4px;
}

.box_list {
  padding: 30px;
}

.title_list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title_list h2 {
  font-size: 16px;
  color: var(--black);
}

.title_list img {
  width: 20px;
}


</style>