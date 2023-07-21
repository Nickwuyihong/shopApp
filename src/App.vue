<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterView />

      <nav>
        <RouterLink to="/">
          <HomeOutlined />
          <div>首页</div>
        </RouterLink>
        <RouterLink to="/shoppingCart">
          <ShoppingCartOutlined />
          <div>购物车</div>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  color: #000;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  padding: 0.5rem;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  text-align: center;
  border-top: 1px solid #f2f2f2;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    color: #000;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
