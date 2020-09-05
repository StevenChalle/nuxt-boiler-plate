<template>
  <b-row class="mt-5">
    <b-col class="text-center">
      <b-row>
        <b-col>
          <h1>Computeds</h1>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="10" offset="1">
          <p>Get fullName : {{ fullName }}</p>
          <b-input
            v-model="input"
            class="d-inline"
            style="width: 250px"
          ></b-input>
          <b-button
            class="d-inline"
            @click="fullName = input"
          >
            Set fullName
          </b-button>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script src="./index.ts" lang="ts"/>