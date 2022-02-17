<template>
<div>
    <nuxt/>
</div>
  
</template>

<script>
export default {
 async asyncData({ $strapi }) {
    const client = await $strapi.find('clients?_limit=-1')
    console.log(client)
    return { client }
  },
}
</script>

<style>

html {
  font-family: 'Work Sans', Times, serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: var(--bck);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


@font-face {
  font-family: 'MarkBold';
  src: url('~assets/fonts/MarkPro-Bold.otf');
}

@font-face {
  font-family: 'MarkMedium';
  src: url('~assets/fonts/MarkPro-Medium.otf');
}

@font-face {
  font-family: 'Mark';
  src: url('~assets/fonts/MarkPro.otf');
}



:root {
    --white: #fff; 
    --yellow: #FFC000;
    --yellow-light: #fff9e7;
    --bck: #fdfffe;
    --bck2:rgb(24, 85, 54)e;
    --green: #008000; 
    --green-hover: #024A02; 
    --green-light: #f6fbf7;
    --gray: #F7F7F7; 
    --red-load: #ffd0d7;
    --red: #D60021;
    --red-light: #ffeaed;
    --black: #202020; 
    --gray-body: #7c7c7c;
    --gray-pdf: #f3f3f3;
    --gray-nav: #979797;
    --gray-step: #dbdbdb;
}

.label {
  margin-bottom: 15px;
}

.event input{
  pointer-events: none;
  background-color: var(--gray);
}

.event textarea{
  pointer-events: none;
  background-color: var(--gray);
}

.label p {
  margin-bottom: 3px;
  margin-left: 2px;
  font-size: 14px;
}

input {
  border: 1px solid var(--gray-step);
  background-color: var(--white);
  outline-color: var(--green);
  -webkit-outline-color: var(--green);
  font-family: 'work sans', sans-serif;
  color: var(--black);
  border-radius: 4px;
  width: 100%;
  padding: 18px;
  -webkit-appearance: none;
  font-size: 16px;
}

textarea {
  border: 1px solid var(--gray-step);
  background-color: var(--white);
  outline-color: var(--green);
  -webkit-outline-color: var(--green);
  font-family: 'work sans', sans-serif;
  color: var(--black);
  border-radius: 4px;
  width: 100%;
  padding: 18px;
  -webkit-appearance: none;
  font-size: 16px;
}



select {
  border: 1px solid var(--yellow);
  background-color: var(--yellow);
  outline: none;
  font-family: 'work sans', sans-serif;
  color: var(--black);
  border-radius: 4px;
  width: 100%;
  font-weight: 700;
  appearance: none;
  background-image: url('~assets/img/svg/liste.svg');
  background-repeat: no-repeat;
  background-position: 90% 50%;
  padding: 18px;
  font-size: 16px;
}

input[type='radio' i] {
  background-color: var(--white) !important;
  width: 30px;
  padding: 0;
  height: 30px;
  border-radius: 4px;
  -webkit-appearance: none;
  border: 1px solid var(--green);
  outline: none;
  transition: all 0.3s;
}

input[type='radio' i]:checked {
  background-color: var(--green) !important;
  width: 30px;
  height: 30px;
  -webkit-appearance: none;
  display: flex;
  transition: all 0.3s;
}

input[type='radio' i]:checked::after {
  content: '\2713';
  font-size: 16px;
  background-color: var(--green);
  fill: var(--white);
  display: flex;
  font-weight: 900;
  color: var(--white);
  align-items: center;
  margin: auto;
  justify-content: center;

}


input::placeholder {
  font-family: 'work sans', sans-serif;
  font-size: 12px;
}

textarea::placeholder {
  font-family: 'work sans', sans-serif;
  font-size: 12px;
}


@media screen and (min-width : 768px) {
    body {
        display: none;
    }
}
</style>