<template>
  <b-row class="mt-5">
    <b-col class="text-center">
      <b-row>
        <b-col>
          <h1>{{ $t('home') }}</h1>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <nuxt-link :to="localePath('demo-component')">
            <b-button>Demo Component</b-button>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script src="./index.ts" lang="ts"/>