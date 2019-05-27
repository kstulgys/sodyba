import "./styles.css"
import React from "react"
import cover from "./assets/images/cover.jpg"
import HouseCard from "./HouseCard"

export default function HouseList({ data }) {
  console.log(data, "data")
  return (
    <div className="">
      <h1 className="text-center mb-5" style={{ lineHeight: "4rem" }}>
        Sveiki atvykę į{" "}
        <span className="font-weight-bold text-dark">Emilijos sodybą</span>!
      </h1>
      <div className="d-flex justify-content-center pb-5">
        <div
          className="shadow rounded"
          style={{
            border: "none",
            overflow: "hidden"
          }}
        >
          <iframe
            title="sodyba-video"
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1123021504414978%2Fvideos%2F1836175046432950%2F&show_text=0&width=560"
            width="560"
            height="315"
            style={{
              border: "none",
              overflow: "hidden",
              display: "block"
            }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allowFullScreen={true}
          />
        </div>
      </div>

      <div className="container mt-5 p-0">
        <div className="house-grid">
          {data.hotels &&
            data.hotels.map(item => {
              return <HouseCard key={item.name} item={item} />
            })}
        </div>
      </div>
    </div>
  )
}
