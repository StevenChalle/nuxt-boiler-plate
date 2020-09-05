<template>
  <b-row class="mt-5">
    <b-col class="text-center">
      <b-row>
        <b-col>
          <h1>Props</h1>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="10" offset="1">
          <props-demo
            :users="users"
          ></props-demo>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script src="./index.ts" lang="ts"/>