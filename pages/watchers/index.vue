<template>
  <b-row class="mt-5">
    <b-col class="text-center">
      <b-row>
        <b-col>
          <h1>Hooks</h1>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="10" offset="1">
          <p class="d-inline">Property watched :</p>
          <b-input
            v-model="input"
            class="d-inline ml-2"
            style="width: 200px"
          ></b-input>
          <p class="mt-4">Reactive property : {{ reactiveProperty }}</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script src="./index.ts" lang="ts"/>