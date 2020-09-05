<template>
  <b-row class="mt-5">
    <b-col class="text-center">
      <b-row>
        <b-col>
          <h1>Demo Component</h1>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="6" offset="3">
          <demo-component
            :props-example="'Here is and example of props'"
          ></demo-component>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script src="./index.ts" lang="ts"/>