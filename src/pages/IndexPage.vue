<template>
  <q-page class="row items-center justify-evenly">
    <div class="flex flex:col gap:9">
      <q-input filled v-model="text" label="text" />
      <q-color v-model="hex" dark class="my-picker" />
      <q-btn
        color="red"
        icon="mail"
        icon-right="send"
        label="Go"
        @click="send"
      />
      <q-btn
        color="blue"
        icon="mail"
        icon-right="send"
        label="getUser"
        @click="query"
      />
      <q-btn
        color="blue"
        icon="mail"
        icon-right="send"
        label="pushDocs"
        @click="mutation"
      />
    </div>
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { apolloClient } from '../boot/apollo';
import { getUser } from '../apollo/helper';
import {
  useQuery,
  provideApolloClient,
  useMutation,
} from '@vue/apollo-composable';
import gql from 'graphql-tag';

provideApolloClient(apolloClient);

const router = useRouter();

const todos = ref<Todo[]>([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);
const meta = ref<Meta>({
  totalCount: 1200,
});

const text = ref('');
const hex = ref('');
const send = () => {
  router.push({
    name: 'NextPage',
    params: {
      text: text.value,
      color: hex.value,
    },
  });
};

const query = async () => {
  const result = await useQuery<getUser>(gql`
    query User {
      user(userName: "user2") {
        docs {
          name
          uuid
          userUuid
          createdTimestamp
        }
        uuid
        name
        nick
      }
    }
  `);
  console.log(result.result.value?.user.docs);
  console.log(process.env);
};

const mutation = async () => {
  const { mutate: addDoc } = useMutation(gql`
    mutation Mutation($userName: String!, $docName: String!) {
      addDoc(userName: $userName, docName: $docName) {
        name
        uuid
        userUuid
        createdTimestamp
      }
    }
  `);

  await addDoc({ userName: 'user2', docName: 'doc888' });
};
</script>
