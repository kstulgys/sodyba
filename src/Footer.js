import "./styles.css"
import React from "react"
import { Button } from "shards-react"

export default function Footer() {
  return (
    <section className="fdb-block mt-5">
      <div className="container-fluid p-0 pb-md-5">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.233975229501!2d23.756121316045103!3d54.10505582531018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e096a90d1ca70d%3A0x3791eae736d710bf!2sEmilijos+Sodyba!5e0!3m2!1sen!2slt!4v1558967792000!5m2!1sen!2slt"
          width="600"
          height="450"
          frameborder="0"
          style="border:0"
          allowfullscreen
        /> */}
        <iframe
          title="sodyba-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.233975229501!2d23.756121316045103!3d54.10505582531018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e096a90d1ca70d%3A0x3791eae736d710bf!2sEmilijos+Sodyba!5e0!3m2!1sen!2slt!4v1558967792000!5m2!1sen!2slt"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen={true}
          style={{
            border: 0
          }}
        />
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-5">
            <p className="lead mt-3">
              <span className="font-weight-bold text-dark">email: </span>
              hello@website.com
            </p>
            <p className="lead mt-3">
              <span className="font-weight-bold text-dark">tel: </span>
              +44 123 123 1232
            </p>
            <p className=" lead mt-3 font-weight-bold text-dark">SwedBank: </p>
            <p>Roma Stulgienė</p>
            <p>LT 44 123 123 1232</p>
            <div className="d-flex mt-4 text-dark">
              <span className="font-weight-bold mr-3">
                <i className="fab fa-facebook-square fa-2x" />
              </span>
              <span className="font-weight-bold ">
                <i className="fab fa-instagram fa-2x" />
              </span>
            </div>
          </div>

          <div className="col-12 col-md-6 ml-auto pt-5 pt-md-0">
            <form
              action="https://formspree.io/karolis.stulgys@gmail.com"
              method="POST"
            >
              <div className="row">
                <div className="col">
                  <input
                    name="vardas"
                    type="text"
                    className="form-control"
                    placeholder="Vardas"
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <input
                    name="el paštas"
                    type="email"
                    className="form-control"
                    placeholder="Jūsų el paštas"
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <textarea
                    className="form-control"
                    name="žinute"
                    rows="3"
                    placeholder="Kuo mes galime Jums padėti?"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <Button
                    className="font-weight-bold"
                    type="submit"
                    size="lg"
                    pill
                    theme="dark"
                  >
                    Siųsti
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
