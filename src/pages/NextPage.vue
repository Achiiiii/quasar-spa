<template>
  <q-page class="flex flex:col items-center">
    <h1 :class="`f:${color}`">{{ text }}</h1>
    <q-btn color="red" icon-right="send" label="Back" @click="send" />
  </q-page>
</template>

<script setup lang="ts">
// import { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const text = ref(route.params.text);
const color = ref(route.params.color);

const send = () => {
  router.push({
    name: 'IndexPage',
  });
};
</script>
