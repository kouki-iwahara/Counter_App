<template>
  <div id="app">
    <h1>カウンター</h1>
    <router-link to="/countUp">カウントアップはこちら</router-link>/
    <router-link to="/countDown">カウントダウンはこちら</router-link>
    <router-view/>  
  </div>
</template>

 <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
