<template>
  <div class="module-container">
    <b-navbar class="bg-white-50p shadow-sm" toggleable="lg" type="light">
      <router-link class="navbar-brand" to="/"><strong>Home</strong></router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nav-link nav-item" to="/article_render"><strong>Article</strong></router-link>
          <router-link class="nav-link nav-item" to="/article_list"><strong>Article List</strong></router-link>
          <router-link class="nav-link nav-item" to="/unfinished_component"><strong>Archived</strong></router-link>
          <router-link class="nav-link nav-item" to="/unfinished_component"><strong>About</strong></router-link>
        </b-navbar-nav>
        <!-- 文章搜索 -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search Article"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navigation-bar'
}
</script>

<style scoped>
  .module-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw !important;
  }
  .navbar-brand {
    font-size: 2.5rem;
  }
  .nav-item {
    font-size: 1.5rem;
  }
</style>
