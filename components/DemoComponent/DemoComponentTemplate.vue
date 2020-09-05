<template>
  <ul class="list-group">
    <li class="list-group-item">
      <p><b>Component integration :</b></p>
      <custom-component/>
    </li>
    <li class="list-group-item">
      <p class="m-0"><b>Data :</b> {{ dataExample }}</p>
    </li>
    <li class="list-group-item">
      <p class="m-0"><b>Props received :</b> {{ propsExample }}</p>
    </li>
    <li class="list-group-item">
      <p class="d-inline m-0 mt-1">
        <b>Computeds :</b>
        <b-input
          v-model="computedInput"
          class="d-inline ml-1"
          style="width: 250px"
          placeholder="Full Name"
        ></b-input>
        <b-button
          class="d-inline"
          @click="fullName = computedInput"
        >
          Set fullName
        </b-button>
        FullName : {{ fullName }}
      </p>
    </li>
    <li class="list-group-item">
      <p><b>Watchers :</b></p>
      <p class="d-inline m-0">Property watched :</p>
      <b-input
        v-model="watcherInput"
        class="d-inline ml-2"
        style="width: 200px"
      ></b-input>
      <p class="m-0 mt-2">Reactive property : {{ reactiveProperty }}</p>
    </li>
    <li class="list-group-item">
      <p class="m-0"><b>Hooks :</b> Passed in created ? {{ passedInCreated }} - Passed in mounted ? {{ passedInMounted }}</p>
    </li>
    <li class="list-group-item">
      <p class="m-0"><b>Methods :</b> {{ capitalizeString('mAHaTmA') }}</p>
    </li>
    <li class="list-group-item">
      <p><b>Plugins :</b></p>
      <p class="m-0">Lodash : {{ lodashArray }}</p>
      <p class="m-0">Moment : {{ moment().format('LL') }}</p>
    </li>
    <li class="list-group-item">
      <p><b>Store :</b></p>
      <p class="mb-1">Username : {{ $store.state.user.username || 'Ø' }}</p>
      <p class="mb-2">Logged since : {{ loggedSince != null ? loggedSince.toString() + ' seconds' : 'Ø' }}</p>
      <b-button
        class="d-inline"
        @click="loginUser()"
      >
        Log in User
      </b-button>
      <b-button
        class="d-inline"
        @click="logoffUser()"
      >
        Log off User
      </b-button>
    </li>
    <li class="list-group-item">
      <p><b>I18n :</b></p>
      <p class="mb-2">{{ $t('welcome') }}</p>
      <nuxt-link :to="switchLocalePath('fr')">
        <b-button class="d-inline">
          French
        </b-button>
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('en')">
        <b-button class="d-inline">
          English
        </b-button>
      </nuxt-link>
    </li>
    <li class="list-group-item">
      <p class="m-0"><b>API Call :</b> X</p>
    </li>
  </ul>
</template>

<script src="./DemoComponent.ts" lang="ts"/>