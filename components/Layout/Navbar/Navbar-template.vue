<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <nuxt-link :to="localePath('index')">
      <b-navbar-brand>Nuxt Boiler Plate</b-navbar-brand>
    </nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="localePath('demo-component')">Demo Component</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item :to="switchLocalePath('fr')">
           FR
          </b-dropdown-item>
          <b-dropdown-item :to="switchLocalePath('en')">
            EN
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script src="./Navbar.ts" lang="ts"></script>