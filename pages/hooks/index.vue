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
          <p>Passed in created ? {{ passedInCreated }}</p>
          <p>Passed in mounted ? {{ passedInMounted }}</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script src="./index.ts" lang="ts"/>