<template>
  <b-row class="mt-5">
    <b-col class="text-center">
      <b-row>
        <b-col>
          <h1>Home</h1>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <nuxt-link :to="localePath('demo-component')">
            <b-button>Demo Component</b-button>
          </nuxt-link>
          <!-- <nuxt-link to="/computeds">
            <b-button>Computeds</b-button>
          </nuxt-link>
          <nuxt-link to="/hooks">
            <b-button>Hooks</b-button>
          </nuxt-link>
          <nuxt-link to="/watchers">
            <b-button>Watchers</b-button>
          </nuxt-link>
          <nuxt-link to="/hooks">
            <b-button>Methods</b-button>
          </nuxt-link> -->
          <!-- <nuxt-link to="/store">
            <b-button>Store</b-button>
          </nuxt-link>
          <nuxt-link to="/plugins">
            <b-button>Plugins</b-button>
          </nuxt-link>
          <nuxt-link to="/i18n">
            <b-button>I18n</b-button>
          </nuxt-link> -->
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script src="./index.ts" lang="ts"/>