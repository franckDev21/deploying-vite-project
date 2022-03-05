<script setup>

</script>

<template>
  <header>
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link>
  </header>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style lang="scss">
body,html{
  margin: 0;
  padding: 0;
  background-color: #2c3e50;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 4rem;
  font-size: 2rem;
  color: #fff;
}
header{
  margin-bottom: 2rem;
  &::after{
    content: '';
    display: block;
    height: .4rem;
    border-radius: .2rem;
    background-color: #2c3e50;
    width: 80%;
    margin: 1rem auto;
  }
  a{
    display: inline-block;
    color: inherit;
    text-decoration: none;
    &.router-link-active{
      color: #42b983;
    }
  }
}
</style>
