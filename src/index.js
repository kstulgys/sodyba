import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import "./styles.css"
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { Router, Link } from "@reach/router"
// import * as contentful from "contentful"
import HouseInfo from "./HouseInfo"
import HouseList from "./HouseList"

import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider, useQuery } from "react-apollo-hooks"
import Footer from "./Footer"
import gql from "graphql-tag"
// Replace this with your project's endpoint
const GRAPHCMS_API =
  "https://api-euwest.graphcms.com/v1/cjw6bnv0e03r701ehhywjla70/master"

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

const HOTELS = gql`
  query {
    hotels {
      id
      name
      description
      amenities
      people
      beds
      price
      photos {
        handle
      }
    }
  }
`

function App() {
  const { data, error, loading } = useQuery(HOTELS)

  if (loading) {
    console.log("loading...")
  }

  if (data) {
    return (
      <div className="bg-light min-vh-100 w-100 py-5">
        <Router>
          <HouseList path="/" data={data} />
          <HouseInfo path="/:id" />
        </Router>
        <Footer />
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  rootElement
)

// return (
//   <div className="bg-light min-vh-100 w-100">
// <Router>
//   <HouseList path="/" data={houses} />
//   <HouseInfo path="/:id" />
// </Router>
//   </div>
// )
