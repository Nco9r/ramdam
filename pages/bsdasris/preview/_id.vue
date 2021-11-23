<template>
  <div>
    <main>
      <prev>{{ bsdasri }}</prev>
    </main>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const GET_BSDASRI = gql`
  query getBsdasri($id: ID!) {
    bsdasri(id: $id) {
      id
      statuts
    }
  }
`
export default {
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient
    const { id } = params

    const res = await client.query({
      query: GET_BSDASRI,
      variables: {
        id,
      },
    })

    const { bsdasri } = res.data
    console.log(bsdasri)
    return {
      bsdasri,
    }
  },
}
</script>

<style></style>
