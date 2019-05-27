import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react"
import { Link } from "@reach/router"
import HouseModal from "./HouseModal"

export default function HouseCard({ item }) {
  return (
    <div className="w-100  d-flex flex-column">
      <img
        src={`https://media.graphcms.com/resize=w:450,h:300,fit:crop/${
          item.photos[0].handle
        }`}
        className="rounded shadow"
        style={{ objectFit: "cover", width: "100%" }}
        alt="sample"
      />
      <div className="p-3 pt-4 d-flex flex-column flex-fill">
        <h4 className="font-weight-bold text-dark">{item.name}</h4>
        <div className="d-flex mt-3">
          <div className="d-flex align-items-center mr-3">
            <span className="text-dark">
              <i className="fas fa-user-friends" />
            </span>
            <span className="ml-2">{item.people}</span>
          </div>
          <div className="d-flex align-items-center mr-3">
            <span className="text-dark">
              <i className="fas fa-bed" />
            </span>
            <span className="ml-2">{item.beds}</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="text-dark">
              <i className="fas fa-euro-sign" />
            </span>
            <span className="ml-2">{item.price}</span>
          </div>
        </div>
        <p className="mt-3">{truncate(item.description)}...</p>
      </div>
      <div className="mt-3 pl-3">
        <HouseModal id={item.id} item={item} />
      </div>
    </div>
  )
}

function truncate(str) {
  return str
    .split(" ")
    .reduce((arr, next) => {
      if (arr.length < 16) {
        return [...arr, next]
      } else {
        return arr
      }
    }, [])
    .join(" ")
}
