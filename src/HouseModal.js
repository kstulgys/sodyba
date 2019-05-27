import React, { useState } from "react"
import { Button, Modal, ModalBody, ModalHeader } from "shards-react"
import { useQuery } from "react-apollo-hooks"
import gql from "graphql-tag"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

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

export default function HouseModal({ item }) {
  const [open, toggle] = useState(false)
  const { data, error, loading } = useQuery(HOTEL, {
    variables: { id: item.id }
  })

  function handleClick() {
    toggle(!open)
  }

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
    return (
      <div>
        <Button outline pill theme="dark" onClick={handleClick}>
          Daugiau
        </Button>
        <Modal size="lg" open={open} toggle={handleClick}>
          <ModalHeader>{data.hotel && data.hotel.name}</ModalHeader>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
          />

          <ModalBody>
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
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
