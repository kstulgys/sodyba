import "react-image-gallery/styles/css/image-gallery.css"
import React from "react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"
import ImageGallery from "react-image-gallery"

const HOTEL = gql`
  query hotel($id: ID!) {
    hotel(where: { id: $id }) {
      name
      description
      amenities
      photos {
        handle
      }
    }
  }
`

export default function HouseInfo({ id }) {
  const { data, error, loading } = useQuery(HOTEL, {
    variables: { id: id }
  })

  if (error) {
    console.log(error.message)
  }

  if (data) {
    const images =
      data.hotel &&
      data.hotel.photos.map(({ handle }) => {
        return {
          original: `https://media.graphcms.com/resize=w:1000,h:600,fit:crop/${handle}`,
          thumbnail: `https://media.graphcms.com/resize=w:450,h:300,fit:crop/${handle}`
        }
      })

    // console.log(data, "hotel data")
    return (
      <div className="container bg-light py-5">
        {data.hotel && (
          <div className="shadow rounded ">
            <ImageGallery items={images} />
          </div>
        )}

        <div className="mt-5">
          <div className="rounded p-3">
            <h1 className="mb-3 font-weight-bold">
              {data.hotel && data.hotel.name}
            </h1>
            <div className="d-flex mt-4">
              <div className="d-flex align-items-center mr-4">
                <span>
                  <i className="fas fa-user-friends fa-2x" />
                </span>
                <h3 className="ml-2">8</h3>
              </div>
              <div className="d-flex align-items-center mr-4">
                <span>
                  <i className="fas fa-bed fa-2x" />
                </span>
                <h3 className="ml-2">8</h3>
              </div>
              <div className="d-flex align-items-center">
                <span>
                  <i className="fas fa-euro-sign fa-2x" />
                </span>
                <h3 className="ml-2">35</h3>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded p-3 mt-4">
              <h3 className="mb-3 font-weight-bold">Aprašymas</h3>
              <p>{data.hotel && data.hotel.description}</p>
            </div>
            <div className="rounded p-3 mt-2">
              <h3 className="mb-3 font-weight-bold">Patogumai</h3>
              <p>{data.hotel && data.hotel.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
