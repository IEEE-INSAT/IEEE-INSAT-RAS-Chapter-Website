import Navbar from "../components/navbar/navbar";
import { useState } from "react";
import Footer from "../components/footer/footer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
export default function shop() {
  const [cards, setCards] = useState([
    {
      name: "Hoodie Red",
      price: 40,
      imgURL: "images/shop/hoodie-rouge.jpg",
    },
    {
      name: "Polo grey",
      price: 40,
      imgURL: "images/shop/hoodie-grey.jpg",
    }
  ]);
  return (
    <div>
      <Navbar />
      <section className="ftco-section mt-5 pt-5">
        <div className="row justify-content-center mb-1 pb-3 mt-5 pt-5">
          <div className="col-md-7 heading-section  text-center ">
            <h2 className="mb-1 ">Our Store </h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cards.map((c, i) => (
            <div
              className="card"
              key={i}
              style={{
                backgroundColor: "transparent",
                borderColor: "#c49b63",
                padding: "8px",
                margin:"12px"
              }}
            >
              <div
                className="image special-hover"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Zoom>
                  <img
                    src={c.imgURL}
                    width="500px"
                    height="400px"
                    alt=""
                  />
                </Zoom>
              </div>
              <div>
                <div className="content">
                  <span
                    className="header"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {c.name}
                  </span>
                </div>
                <div
                  className="extra"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="price">{c.price}DT</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    data-tf-popup="IXqgieqQ"
                    id="shopModalButton"
                    className="btn btn-primary btn-outline-primary"
                    data-toggle="modal"
                    data-target="#shopModal"
                    data-price={c.price}
                    data-name={c.name}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <script  strategy="beforeInteractive" src="//embed.typeform.com/next/embed.js"></script>
        </div>
      </section>
      <Footer />
    </div>
  );
}
