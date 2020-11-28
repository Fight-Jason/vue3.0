<template>
    <div>
        <div class="topnav">
            <router-link to="/" class="logo">
              <svg class="icon">
                  <use xlink:href="#icon-king"></use>
              </svg>
            </router-link>
            <ul class="menu">
              <router-link to="/doc">文档</router-link>
            </ul>
              <svg v-if="toggleMenuButtonVisible" class="toggleAside icon" @click="toggleMenu">
                  <use xlink:href="#icon-menu"></use>
              </svg>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
    export default {
      name : 'Topnav',
      props: {
        toggleMenuButtonVisible: {
          type: Boolean,
          default: false
        }
      },
      setup() {
        const asideVisible = inject<Ref< boolean>>('xxxx')
        const toggleMenu = () => {
          asideVisible.value = !asideVisible.value;
           console.log(`topnav 获取的asideVisible 为 ${asideVisible.value}`)
        }
        return { toggleMenu }
      }
    }
</script>
<style lang="scss" scoped>  
$color: #28d1c9;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: fade-out(black, .9);
    position: absolute;
    left: 16px;
    top: 50%;
    transform:  translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto ;
    }
    > .toggleAside {
      display: inline-block;
    }
  } 
}
</style>