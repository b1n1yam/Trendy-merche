import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import Productitem from "../../Components/Productitem";

export default function AllArtistPage() {
  const [product, setProduct] = useState([""]);
  useEffect(() => {
    axios
      .get("https://gray-average-barnacle.cyclic.cloud/product")
      .then((response) => {
        console.log("Response", response.data), setProduct(response.data);
      })
      .catch((err) => console.log("Error", err));
    // console.log('Response', 'response')
  }, []);
  return (
    <Layout>
      <div style={{ flex: 1 }}>
        <div className="contactHeader" style={{ minHeight: 150 }}>
          <h1
            className="text-black p-10 mx-20"
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#071242",
              paddingLeft: 20,
            }}
          >
            All Artists products
          </h1>
        </div>
        <div className="grid md:grid-cols-5 md:gap-3">
          <div className="col-span-1" />
          <div className="md:col-span-4 px-3 flex-row mt-10">
            <h2
              className="font-bold"
              style={{ color: "#151875", fontSize: 20 }}
            >
              Ecommerce Acceories & Fashion item{" "}
            </h2>
            <p style={{ color: "#8A8FB9", marginTop: 5 }}>
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="md:col-span-1" />
        </div>
        <div className="grid md:grid-cols-6 md:gap-3">
          {/* <div className="col-span-1" /> */}
          <div className="flex col-span-2 item-center flex flex-col justifiy-center align-center px-40">
            <p
              className="font-bold underline "
              style={{ color: "#151875", fontSize: 20 }}
            >
              Artist Types
            </p>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                Tik Tokers
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                Youtubers
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                instagram
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                Singer
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                comedian
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                dancer
              </p>
            </div>
            <p
              className="font-bold underline mt-10"
              style={{ color: "#151875", fontSize: 20 }}
            >
              Discount Offer
            </p>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                20% Cashback
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                5% Cashback Offer
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                25% Discount Offer
              </p>
            </div>
            <p
              className="font-bold underline mt-10"
              style={{ color: "#151875", fontSize: 20 }}
            >
              Rating Item
            </p>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                Tik Tokers
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                Youtubers
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                instagram
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                Singer
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                comedian
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <input
                style={{
                  background: "#000000",
                  color: "#FFFFFFF",
                  marginTop: 1,
                }}
                type="checkbox"
              />
              <p
                className=""
                style={{
                  color: "#7E81A2",
                  marginTop: 5,
                  paddingLeft: 20,
                  fontSize: 16,
                }}
              >
                dancer
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 px-3 flex-row mt-10">
            <div className=" flex flex-col md:flex-row mt-10">
              {/* {data.products.map((product) => (
                                <Productitem product={product} key={product.slug}></Productitem>
                            ))} */}
              {product.map((product) => (
                <Productitem product={product} key={product.id}></Productitem>
              ))}
            </div>
            <div className=" flex flex-col md:flex-row mt-10">
              {product.map((product) => (
                <Productitem product={product} key={product.id}></Productitem>
              ))}
            </div>
            <div className=" flex flex-col md:flex-row mt-10">
              {product.map((product) => (
                <Productitem product={product} key={product.id}></Productitem>
              ))}
            </div>
            <div className=" flex flex-col md:flex-row mt-10">
              {product.map((product) => (
                <Productitem product={product} key={product.id}></Productitem>
              ))}
            </div>
            <div className=" flex flex-col md:flex-row mt-10">
              {product.map((product) => (
                <Productitem product={product} key={product.id}></Productitem>
              ))}
            </div>
          </div>
          {/* <div className="md:col-span-1" /> */}
        </div>
      </div>
    </Layout>
  );
}
