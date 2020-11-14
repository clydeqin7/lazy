<template>
  <nav>导航栏
    <router-link to="/">菜单1</router-link>
    <router-link to="/xxx">菜单2</router-link>
  </nav>
  <hr>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>
