<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div>nav | 
    <router-link to="/"> frank</router-link> |
    <router-link to="/xxx"> frank2</router-link>
  
  </div>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Frank from './components/Frank.vue'


export default {
  name: 'App',
  components: {
    Frank
  }
}
</script>
