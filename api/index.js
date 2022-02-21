import express from 'express'
import cors from 'cors'
const bodyParser = require('body-parser')
import { GraphQLClient, gql } from 'graphql-request'

const app = express()
app.use(
  cors({
    origin: 'https://sandbox.trackdechets.beta.gouv.fr',
  })
)


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/prewiewbsdasri/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const query = gql`
      query getBsdasri($id: ID!) {
        bsdasri(id: $id) {
          id
          status
          emitter {
            emission {
              packagings {
                type
                volume
                quantity
              }
            }
            company {
              name
              siret
              address
            }
          }
          transporter {
            transport {
              acceptation {
                status
                refusalReason
                refusedWeight
              }
              packagings {
                type
                volume
                quantity
              }
            }
            company {
              name
              siret
              address
            }
          }
          destination {
            company {
              name
              siret
              address
            }
          }
          waste {
            code
            adr
          }
          createdAt
        }
      }
    `
    const variables = {
      id: id,
    }

    const data = await graphQLClient.request(query, variables)
    res.setHeader('Content-type', 'application/json')
    console.log(JSON.stringify(data))
    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => console.error(error))
})

app.post('/bsdasripdf/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const query = gql`
      query bsdasriPdf($id: ID) {
        bsdasriPdf(id: $id) {
          downloadLink
        }
      }
    `
    const variables = {
      id: id,
    }

    const data = await graphQLClient.request(query, variables)
    res.setHeader('Content-type', 'application/json')
    console.log(JSON.stringify(data))
    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => console.error(error))
})

app.get('/getbsdasriall', (req, res) => {
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const query = gql`
      query getBsdasrisInitial {
        bsdasris {
          totalCount
          pageInfo {
            startCursor
          }
          edges {
            cursor
            node {
              id
              status
              emitter {
                company {
                  name
                }
              }
              destination {
                company {
                  name
                }
              }
              waste {
                code
              }
            }
          }
        }
      }
    `
    const data = await graphQLClient.request(query)

    res.setHeader('Content-type', 'application/json')
    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => console.error(error))
})

app.get('/getbsdasri', (req, res) => {
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const query = gql`
      query getBsdasrisInitial {
        bsdasris(where: { status: { _in: [INITIAL, SIGNED_BY_PRODUCER] } }) {
          totalCount
          pageInfo {
            startCursor
          }
          edges {
            cursor
            node {
              id
              status
              emitter {
                company {
                  name
                }
              }
              destination {
                company {
                  name
                }
              }
              waste {
                code
              }
            }
          }
        }
      }
    `
    const data = await graphQLClient.request(query)

    res.setHeader('Content-type', 'application/json')
    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => res.send(JSON.stringify(error)))
})

app.get('/getbsdasricollected', (req, res) => {
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const query = gql`
      query getBsdasrisInitial {
        bsdasris(where: { status: { _eq: SENT } }) {
          totalCount
          pageInfo {
            startCursor
          }
          edges {
            cursor
            node {
              id
              status
              emitter {
                company {
                  name
                }
              }
              destination {
                company {
                  name
                }
              }
              waste {
                code
              }
            }
          }
        }
      }
    `
    const data = await graphQLClient.request(query)

    res.setHeader('Content-type', 'application/json')
    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => console.error(error))
})

app.get('/getbsdasriprocessed', (req, res) => {
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const query = gql`
      query getBsdasrisInitial {
        bsdasris(where: { status: { _eq: PROCESSED } }) {
          totalCount
          pageInfo {
            startCursor
          }
          edges {
            cursor
            node {
              id
              status
              emitter {
                company {
                  name
                }
              }
              destination {
                company {
                  name
                }
              }
              waste {
                code
              }
            }
          }
        }
      }
    `
    const data = await graphQLClient.request(query)

    res.setHeader('Content-type', 'application/json')
    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => console.error(error))
})

app.post('/create', (req, res) => {
  const body = req.body
  console.log(body)
  async function main() {
    try {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const mutation = gql`
      mutation CreateBsdasri($input: BsdasriInput!) {
        createBsdasri(input: $input) {
          id
          status
          transporter {
            company {
              siret
              name
              address
              mail
              phone
              contact
            }
          }
        }
      }
    `

    const variables = {
      input: {
        waste: {
          code: body.wasteCode,
          adr: body.adrCode,
        },
        emitter: {
          company: {
            siret: body.siret,
            name: body.nom,
            address: body.adresse,
            mail: body.mail,
            contact: body.contact,
            phone: body.phone,
          },
          emission: {
            weight: {
              value: parseInt(body.value),
              isEstimate: body.isEstimate,
            },
            packagings: body.packagings,
          },
        },
        destination: {
          company: {
            siret: '00000000002268',
            name: 'SARP INDUSTRIES',
            address: '32 Avenue Jean Jaures, 33530 BASSENS',
            mail: 'contact@sarp-industries.fr',
            contact: 'Sarp Industries',
            phone: '09 51 32 17 34',
          },
        },
        transporter: {
          transport: {
            packagings: body.packagings,
            acceptation: {
              status: body.acceptation,
              refusalReason: body.refusalReason,
              refusedWeight: parseFloat(body.refusedWeight),
            },
            plates: body.plates,
            takenOverAt: body.takenOverAt,
          },
          company: {
            siret: '00000000002387',
            name: 'Ramdam',
            address: '7 rue mireport, 33310 LORMONT',
            mail: 'contact@ramdambordeaux.fr',
            phone: '09 51 32 17 34',
            contact: 'Matthieu DEHOUCK',
          },
          recepisse: {
            number: '2019-T-056',
            department: '33',
            validityLimit: '09/08/2024',
          },
        },
      },
    }
    const data = await graphQLClient.request(mutation, variables)
    console.log(JSON.stringify(data))
    res.send(JSON.stringify(data))
    res.status(200)
  } catch(e) {
    res.send.status(404)
  }}

main();
})

app.post('/signbsdasri/:id', (req, res) => {
  const body = req.body
  const id = req.params.id
  console.log(body)
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const mutation = gql`
      mutation SignBsdasri(
        $id: ID!
        $input: BsdasriSignatureWithSecretCodeInput!
      ) {
        signBsdasriEmissionWithSecretCode(id: $id, input: $input) {
          id
          status
        }
      }
    `

    const variables = {
      id: id,
      input: {
        author: body.author,
        securityCode: Number.parseInt(body.securityCode),
      },
    }
    const data = await graphQLClient.request(mutation, variables)
    console.log(JSON.stringify(data))
    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => {(
    console.log(JSON.stringify(error.response.errors[0].message)),
    res.status(400, {data : JSON.stringify(error.response.errors[0].message)}).send(
    ))
  })
})

app.post('/signbsdasritransporter/:id', (req, res) => {
  const body = req.body
  const id = req.params.id
  console.log(body)
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const mutation = gql`
      mutation SignBsdasri($id: ID!, $input: BsdasriSignatureInput!) {
        signBsdasri(id: $id, input: $input) {
          id
          status
        }
      }
    `

    const variables = {
      id: id,
      input: {
        author: body.author,
        type: body.type,
      },
    }
    const data = await graphQLClient.request(mutation, variables)
    console.log(JSON.stringify(data))
    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => {(
    console.log(JSON.stringify(error.response.errors[0].message)),
    res.status(400, {data : JSON.stringify(error.response.errors[0].message)}).send(
    ))
  })
})

app.post('/update/:id', (req, res) => {
  const body = req.body
  const id = req.params.id
  console.log(body)
  async function main() {
    const endpoint = 'https://api.sandbox.trackdechets.beta.gouv.fr'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: process.env.API_TOKEN,
        'Access-Control-Allow-Origin':
          'https://sandbox.trackdechets.beta.gouv.fr',
      },
    })

    const mutation = gql`
      mutation UpdateBsdasri($id: ID!, $input: BsdasriInput!) {
        updateBsdasri(id: $id, input: $input) {
          id
          status
        }
      }
    `

    const variables = {
      id: id,
      input: {
        transporter: {
          transport: {
            acceptation: {
              status: body.acceptation,
            },
          },
        },
      },
    }
    const data = await graphQLClient.request(mutation, variables)
    console.log(JSON.stringify(data))

    res.send(JSON.stringify(data))
    res.status(200)
  }

  main().catch((error) => console.error(error))
})

export default {
  path: '/api',
  handler: app,
}
