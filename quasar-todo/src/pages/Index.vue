<template>
  <q-page class="flex text-white flex-center">
    <h1 class="w-screen text-6xl text-center">{{count}}</h1>
    <div class="flex w-screen flex-center">
      <q-btn class="bg-gray-900" @click="count++">button</q-btn>
    </div>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      count: 0
    }
  }

}
</script>
