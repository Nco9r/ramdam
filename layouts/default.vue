<template>
<div>
    <nuxt/>
</div>
  
</template>

<script>
export default {

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
  background-color: var(--white);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

:root {
    --white: #fff; 
    --yellow: #FFC000;
    --green: #008000; 
    --green-hover: #024A02; 
    --green-light: #F4F9F4;
    --gray: #F7F7F7; 
    --red: #D60021;
    --black: #202020; 
    --gray-body: #525252;
    --gray-step: #dbdbdb;
}

.label {
  margin-bottom: 15px;
}

.label p {
  margin-bottom: 3px;
  margin-left: 2px;
  font-size: 12px;
}

input {
  border: 1px solid var(--gray-step);
  background-color: var(--gray);
  outline-color: green;
  font-family: 'work sans', sans-serif;
  color: var(--gray-body);
  border-radius: 0px;
  width: 100%;
  padding: 15px;
  -webkit-appearance: none;
  font-size: 16px;
}

select {
  border: 1px solid var(--yellow);
  background-color: var(--yellow);
  outline: none;
  font-family: 'work sans', sans-serif;
  color: var(--gray-body);
  border-radius: 0px;
  width: 100%;
  appearance: none;
  padding: 15px;
  font-size: 16px;
}


input::placeholder {
  font-family: 'work sans', sans-serif;
  font-size: 12px;
}


@media screen and (min-width : 768px) {
    body {
        display: none;
    }
}
</style>