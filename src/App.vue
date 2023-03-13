<template>
    <div v-for="book in books" :key="book.title">
      <h2>{{ book.title }}</h2>
      <p>Author: {{ book.author }}</p>
    </div>
</template>


<script lang="ts">
import gql from 'graphql-tag';

export default {
  data() {
    return {
      books: [] as { author: string; title: string }[],
    };
  },

  apollo: {
    books: {
      query: gql`
        query ExampleQuery {
          books {
            author
            title
          }
        }
      `,
    },
  },
}

 
</script>
