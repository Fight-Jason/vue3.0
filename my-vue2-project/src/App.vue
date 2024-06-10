<template>
  <div id="app">
    <!-- <AvatarCarousel :avatars="avatars" /> -->
    <BubbleScroll :bubbles="bubbles" :bubbleHeight="50" />
  </div>
</template>

<script>
import AvatarCarousel from './components/ avatarCarousel.vue'
import BubbleScroll from './components/bubbleScroll.vue'

export default {
  name: 'App',
  components: {
    AvatarCarousel,
    BubbleScroll
  },
  data() {
    return {
      avatars: [
        { img: "https://p1.itc.cn/q_70/images03/20230802/3eafe3d8115044f4b6b6238a9aa56fb1.jpeg", id: 1 },
        { img: "https://p1.itc.cn/q_70/images03/20230802/10c1329943ed4ac9b968b898ac98705d.jpeg", id: 2 },
        { img: "https://p3.itc.cn/q_70/images03/20230802/51bc3cef31894492b37ae2b2393f8423.jpeg", id: 3 },
        { img: "https://avatar3.pddpic.com/a/Q0NkUDFOZmlMenBxZ3hVTGN5TFRhQlpFMHNEQTRaWTI1dz09djA0-1697168049?imageMogr2/thumbnail/100x", id: 4 },
        { img: "https://avatar3-2.pddpic.com/a/Q0pmeGFQSGxiNnF6WG5hTWk3MGlwaDdGNGQvU3RKMjRMZz09djA0-1645362454?imageMogr2/thumbnail/100x", id: 5 },
        { img: "https://avatar3.pddpic.com/a/Q0QwZkNBUDRaUEFHQWZJRXlaaFVwR3U4cSthTmZ1ekZ5dz09djA0-1713646951?imageMogr2/thumbnail/100x", id: 6 },
      ],
      bubbles: ['Bubble 1', 'Bubble 2', 'Bubble 3', 'Bubble 4', 'Bubble 5', 'Bubble 6', 'Bubble 7', 'Bubble 8', 'Bubble 9']
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
