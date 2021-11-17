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
    --gray: #F7F7F7; 
    --red: #D60021;
    --black: #202020; 
    --gray-body: #525252;
}


@media screen and (min-width : 768px) {
    body {
        display: none;
    }
}
</style>