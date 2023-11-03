"use-client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import Productitem from "../../Components/Productitem";

// Get a cookie
import { getCookie } from "cookies-next";

//api

//component

//hooks
import { useLoginModal } from "../../../store/useStore";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://gray-average-barnacle.cyclic.cloud/product"
  );
  const data = await response.json();

  console.log("Data", data);
  return {
    props: { googledata: data },
  };
  // .then(response => response.json())
  // .then(json => console.log("Esubalew", json))
};

export default function Homepage({ googledata }) {
  const [selectedArtist, setSelectedArtist] = useState("");
  const { isOpen, onClose } = useLoginModal();
  const [product, setProduct] = useState([""]);
  const [productFilteredBy, setproductFilteredBy] = useState("New Arrival");
  const handleClose = () => {
    onClose();
  };
  // setCookie('Paziyon techno', 'Paziyon Technology Group', {
  //   path: "/",
  //   maxAge: 300000000, // Expires after 1hr
  //   sameSite: true,
  // });
  const Cookiesdata = getCookie("user");
  console.log("Cookies Results", Cookiesdata);
  var config = {
    method: "get",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    url: "https://gray-average-barnacle.cyclic.cloud/product",
    headers: {},
  };
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
      <div className="mb-20  " style={{ background: "#F6F6F6" }}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-6 md:gap-5 flex-col">
          <div className="col-span-1" />
          <div
            className="flex justify-center lg:col-span-2 md:col-span-2 sm:col-span-4  py-5 flex-col mx-10"
            style={{}}
          >
            <div>
              <h1
                className=" font-bold tableHeader mx-4 my-5 md:text-4xl "
                style={{
                  color: "#000000",
                  fontWeight: "semi-bold",
                }}
              >
                The best Merches directly from the Artist to you the fan
              </h1>
            </div>
            <div>
              <Link href="/containers/Main/AllArtistPage">
                <button className="shipping py-2 px-5 mx-3">Shop now</button>
              </Link>
              {/* <Link href="/containers/Main/AllArtistPage"><p className="shipping py-2 pr-20 pl-5 my-3">Shop Now</p></Link> */}
              <button className="shipping py-2 px-5 mx-3">Join Us</button>
            </div>
          </div>
          <div className="md:col-span-2 px-10 py-5 " style={{}}>
            <Image
              src="/images/yuti.jpg"
              alt="Picture of the author"
              width={1000}
              height={1000}
            />
          </div>
          <div className="col-span-1" />
        </div>
        {/* list products */}
        <div className="flex justify-center m-0">
          <div className="flex grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {product.map((product) => (
              <Productitem product={product} key={product.id}></Productitem>
            ))}
          </div>
        </div>
        <div>
          <div
            className="flex  md:grid md:grid-cols-5 md:gap-5 flex-col mx-1.5 my-10"
            style={{}}
          >
            <div className="lg:col-span-1" />
            <div className="hidden md:block lg:col-span-1">
              <p
                className="text-black mb-2"
                style={{ color: "#151875", fontWeight: 700 }}
              >
                Filter
              </p>
              <div
                className=" shadow-sm flex flex-center flex-col  items-center py-10 overflow-scroll bg-white pb-10"
                style={{ maxHeight: 500, borderRadius: 20 }}
              >
                {[
                  "Yohana",
                  "Abel",
                  "TeddyAfro",
                  "Life of Abel",
                  "Nebil",
                  "Musse",
                  "Dani royal",
                  "Awra",
                  "Amleset Muche",
                  "Amleset",
                  "Bertemios",
                  "Elshaday",
                ].map((item, index) => (
                  // return (
                  <button
                    onClick={() => setSelectedArtist(item)}
                    key={index}
                    className="text-black flex-center py-2"
                    style={{
                      background: selectedArtist === item ? "#2F1AC4" : "white",
                      color: selectedArtist === item ? "white" : "black",
                      minWidth: 200,
                      borderRadius: 10,
                    }}
                  >
                    {item}
                  </button>
                  // )
                ))}
              </div>
              <div
                className="bg-blue-700"
                style={{
                  width: 200,
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 10,
                  marginLeft: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href="/containers/Main/ArtistPage">
                  <p
                    className="text-white"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 40,
                    }}
                  >
                    All Categories
                  </p>
                </Link>
              </div>
            </div>
            <div className="hidden md:block lg:col-span-2">
              <h1
                className="flex item-center justify-center"
                style={{ color: "#151875", fontSize: 25, fontWeight: "bold" }}
              >
                Latest Products
              </h1>
              <div className="flex justify-evenly">
                <button
                  onClick={() => setproductFilteredBy("New Arrival")}
                  classsName="hover:bg-blue-700  font-regular py-2 px-1"
                  style={{
                    color:
                      productFilteredBy === "New Arrival"
                        ? "#FB2E86"
                        : "#151875",
                    textDecoration:
                      productFilteredBy === "New Arrival"
                        ? "underline"
                        : "none",
                  }}
                >
                  New Arrival
                </button>
                <button
                  onClick={() => setproductFilteredBy("Best Seller")}
                  classsName="hover:bg-blue-700  font-regular py-2 px-1"
                  style={{
                    color:
                      productFilteredBy === "Best Seller"
                        ? "#FB2E86"
                        : "#151875",
                    textDecoration:
                      productFilteredBy === "Best Seller"
                        ? "underline"
                        : "none",
                  }}
                >
                  Best Seller
                </button>
                <button
                  onClick={() => setproductFilteredBy("Featured")}
                  classsName="hover:bg-blue-700  font-regular py-2 px-1"
                  style={{
                    color:
                      productFilteredBy === "Featured" ? "#FB2E86" : "#151875",
                    textDecoration:
                      productFilteredBy === "Featured" ? "underline" : "none",
                  }}
                >
                  Featured
                </button>
                <button
                  onClick={() => setproductFilteredBy("Special Offer")}
                  classsName="hover:bg-blue-700  font-regular py-2 px-1"
                  style={{
                    color:
                      productFilteredBy === "Special Offer"
                        ? "#FB2E86"
                        : "#151875",
                    textDecoration:
                      productFilteredBy === "Special Offer"
                        ? "underline"
                        : "none",
                  }}
                >
                  Special Offer
                </button>
              </div>
              <div
                className="shadow-md overflow-scroll"
                style={{ maxHeight: 500 }}
              >
                {/* <div className="flex flex-row shadow-lg bg-white-100" style={{ height: 210 }}>
                  {[1, 2, 3].map((item, index) => {
                    return (
                      <div key={index} className="bg-white flex item-center justify-center shadow-sm mx-5 flex flex-col" style={{ borderWidth: 1, height: 120, widows: 200, marginTop: 60 }} >
                        <Image
                          alt="Product Image"
                          src='/images/hoodies/Printed-Hoodie-Black-Front.jpg'
                          width={120}
                          fill={true}
                          height={100}
                        />
                        {index === 0 ? <div style={{ alignSelf: 'flex-end' }}><Image
                          alt="Product Image"
                          src="/images/newProductLabel.png"
                          width={60}
                          height={20}
                        /></div> : null}

                      </div>
                    )
                  })}
                  <div
                    style={{
                      // use the src property of the image object
                      backgroundImage: `url(/images/yohanaLatest.png)`,
                      // other styles
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: 180,
                      height: 200,
                    }}
                  >
                    <div className=" p-1" style={{ background: '#FB2E86', borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 180 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 50 }}>Yohana</p></div>
                  </div>
                </div> */}
                <div
                  className="flex flex-row shadow-lg bg-white-100"
                  style={{ height: 210, marginTop: 10 }}
                >
                  {[1, 2, 3].map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundImage: `url(/images/hoodies/Printed-Hoodie-Black-Front.jpg)`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: 120,
                          height: 100,
                          marginLeft: 10,
                          marginTop: 50,
                          marginLeft: 50,
                        }}
                      >
                        {index === 0 ? (
                          <div
                            className=" p-1"
                            style={{
                              background: "#FB2E86",
                              width: 100,
                              borderTopLeftRadius: 20,
                              justifyContent: "center",
                              alignSelf: "flex-end",
                              marginTop: 80,
                              marginLeft: 20,
                            }}
                          >
                            <p
                              className="text-white"
                              style={{ alignSelf: "center", marginLeft: 30 }}
                            >
                              New
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                  <Link href={"/containers/Main/ArtistProfile"}>
                    <button
                      style={{
                        backgroundImage: `url(/images/yohanaLatest.png)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: 170,
                        height: 200,
                        marginLeft: 50,
                      }}
                    >
                      <div
                        className=" p-1"
                        style={{
                          background: "#FB2E86",
                          borderTopLeftRadius: 20,
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          marginTop: 180,
                        }}
                      >
                        <p
                          className="text-white"
                          style={{ alignSelf: "center", marginLeft: 50 }}
                        >
                          Yohana
                        </p>
                      </div>
                    </button>
                  </Link>
                </div>

                <div
                  className="flex flex-row shadow-lg bg-white-100"
                  style={{ height: 210, marginTop: 10 }}
                >
                  {[1, 2, 3].map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundImage: `url(/images/hoodies/DANCEL_2.png)`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: 120,
                          height: 100,
                          marginLeft: 10,
                          marginTop: 50,
                          marginLeft: 50,
                        }}
                      >
                        {index === 0 ? (
                          <div
                            className=" p-1"
                            style={{
                              background: "#FB2E86",
                              width: 100,
                              borderTopLeftRadius: 20,
                              justifyContent: "center",
                              alignSelf: "flex-end",
                              marginTop: 80,
                              marginLeft: 20,
                            }}
                          >
                            <p
                              className="text-white"
                              style={{ alignSelf: "center", marginLeft: 30 }}
                            >
                              New
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                  selectedArtist
                  <Link href={"/containers/Main/ArtistProfile"}>
                    <button
                      style={{
                        backgroundImage: `url(/images/yohanaLatest.png)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: 170,
                        height: 200,
                        marginLeft: 50,
                      }}
                    >
                      <div
                        className=" p-1"
                        style={{
                          background: "#FB2E86",
                          borderTopLeftRadius: 20,
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          marginTop: 180,
                        }}
                      >
                        <p
                          className="text-white"
                          style={{ alignSelf: "center", marginLeft: 50 }}
                        >
                          Yohana
                        </p>
                      </div>
                    </button>
                  </Link>
                </div>

                <div
                  className="flex flex-row shadow-lg bg-white-100"
                  style={{ height: 210, marginTop: 10 }}
                >
                  {[1, 2, 3].map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundImage: `url(/images/hoodies/EthiopiaJah.png)`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: 120,
                          height: 100,
                          marginLeft: 10,
                          marginTop: 50,
                          marginLeft: 50,
                        }}
                      >
                        {index === 0 ? (
                          <div
                            className=" p-1"
                            style={{
                              background: "#FB2E86",
                              width: 100,
                              borderTopLeftRadius: 20,
                              justifyContent: "center",
                              alignSelf: "flex-end",
                              marginTop: 80,
                              marginLeft: 20,
                            }}
                          >
                            <p
                              className="text-white"
                              style={{ alignSelf: "center", marginLeft: 30 }}
                            >
                              New
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                  <Link href={"/containers/Main/ArtistProfile"}>
                    <button
                      style={{
                        backgroundImage: `url(/images/yohanaLatest.png)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: 170,
                        height: 200,
                        marginLeft: 50,
                      }}
                    >
                      <div
                        className=" p-1"
                        style={{
                          background: "#FB2E86",
                          borderTopLeftRadius: 20,
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          marginTop: 180,
                        }}
                      >
                        <p
                          className="text-white"
                          style={{ alignSelf: "center", marginLeft: 50 }}
                        >
                          Yohana
                        </p>
                      </div>
                    </button>
                  </Link>
                </div>

                <div
                  className="flex flex-row shadow-lg bg-white-100"
                  style={{ height: 210, marginTop: 10 }}
                >
                  {[1, 2, 3].map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundImage: `url(/images/hoodies/hotHoodies.png)`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: 120,
                          height: 100,
                          marginLeft: 10,
                          marginTop: 50,
                          marginLeft: 50,
                        }}
                      >
                        {index === 0 ? (
                          <div
                            className=" p-1"
                            style={{
                              background: "#FB2E86",
                              width: 100,
                              borderTopLeftRadius: 20,
                              justifyContent: "center",
                              alignSelf: "flex-end",
                              marginTop: 80,
                              marginLeft: 20,
                            }}
                          >
                            <p
                              className="text-white"
                              style={{ alignSelf: "center", marginLeft: 30 }}
                            >
                              New
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                  <div
                    style={{
                      backgroundImage: `url(/images/yohanaLatest.png)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: 170,
                      height: 200,
                      marginLeft: 50,
                    }}
                  >
                    <div
                      className=" p-1"
                      style={{
                        background: "#FB2E86",
                        borderTopLeftRadius: 20,
                        justifyContent: "center",
                        alignSelf: "flex-end",
                        marginTop: 180,
                      }}
                    >
                      <p
                        className="text-white"
                        style={{ alignSelf: "center", marginLeft: 50 }}
                      >
                        Yohana
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-row shadow-lg bg-white-100"
                  style={{ height: 210, marginTop: 10 }}
                >
                  {[1, 2, 3].map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundImage: `url(/images/hoodies/personalized-hoodies-blue.png)`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: 120,
                          height: 100,
                          marginLeft: 10,
                          marginTop: 50,
                          marginLeft: 50,
                        }}
                      >
                        {index === 0 ? (
                          <div
                            className=" p-1"
                            style={{
                              background: "#FB2E86",
                              width: 100,
                              borderTopLeftRadius: 20,
                              justifyContent: "center",
                              alignSelf: "flex-end",
                              marginTop: 80,
                              marginLeft: 20,
                            }}
                          >
                            <p
                              className="text-white"
                              style={{ alignSelf: "center", marginLeft: 30 }}
                            >
                              New
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                  <Link href={"/containers/Main/ArtistProfile"}>
                    <button
                      style={{
                        backgroundImage: `url(/images/yohanaLatest.png)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: 170,
                        height: 200,
                        marginLeft: 50,
                      }}
                    >
                      <div
                        className=" p-1"
                        style={{
                          background: "#FB2E86",
                          borderTopLeftRadius: 20,
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          marginTop: 180,
                        }}
                      >
                        <p
                          className="text-white"
                          style={{ alignSelf: "center", marginLeft: 50 }}
                        >
                          Yohana
                        </p>
                      </div>
                    </button>
                  </Link>
                </div>

                <div
                  className="flex flex-row shadow-lg bg-white-100"
                  style={{ height: 210, marginTop: 10 }}
                >
                  {[1, 2, 3].map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundImage: `url(/images/hoodies/ethiopiaCrew.jpg)`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          width: 120,
                          height: 100,
                          marginLeft: 10,
                          marginTop: 50,
                          marginLeft: 50,
                        }}
                      >
                        {index === 0 ? (
                          <div
                            className=" p-1"
                            style={{
                              background: "#FB2E86",
                              width: 100,
                              borderTopLeftRadius: 2000,
                              justifyContent: "center",
                              alignSelf: "flex-end",
                              marginTop: 80,
                              marginLeft: 20,
                            }}
                          >
                            <p
                              className="text-white"
                              style={{ alignSelf: "center", marginLeft: 30 }}
                            >
                              New
                            </p>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                  <Link href={"/containers/Main/ArtistProfile"}>
                    <button
                      style={{
                        backgroundImage: `url(/images/yohanaLatest.png)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: 170,
                        height: 200,
                        marginLeft: 50,
                      }}
                    >
                      <div
                        className=" p-1"
                        style={{
                          background: "#FB2E86",
                          borderTopLeftRadius: 20,
                          justifyContent: "center",
                          alignSelf: "flex-end",
                          marginTop: 180,
                        }}
                      >
                        <p
                          className="text-white"
                          style={{ alignSelf: "center", marginLeft: 50 }}
                        >
                          Yohana
                        </p>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <h1
                className="flex item-center justify-center mb-10"
                style={{ color: "#151875", fontSize: 25, fontWeight: "bold" }}
              >
                Latest Products
              </h1>
              <div className="flex justify-center m-0">
                <div className="flex grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {/* {data.products.map((product) => (
                    <Productitem product={product} key={product.slug}></Productitem>
                  ))} */}
                  {product.map((product) => (
                    <Productitem
                      product={product}
                      key={product.id}
                    ></Productitem>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="md:hidden bg-blue-700"
              style={{
                width: 200,
                padding: 10,
                marginTop: 10,
                borderRadius: 10,
                marginLeft: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/containers/Main/ArtistPage">
                <p
                  className="text-white"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 40,
                  }}
                >
                  All Categories
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col md:grid md:grid-cols-4 md:gap-5"
          style={{ background: "#F6F7FB" }}
        >
          <div className=" flex item-end justify-end  col-span-2">
            <Image
              src="/images/out2.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col col-span-2 justify-center">
            <div className="w-full mx-5">
              <h1 className="mt-10" style={{ fontSize: 20, color: "#151875" }}>
                Are you an artist or influencer looking to sell merches
              </h1>
              <p className="text-left mt-5" style={{ color: "#ACABC3" }}>
                quality support and help all the way{" "}
              </p>
              <p className="mt-5 mr-5" style={{ color: "#ACABC3" }}>
                easy to use and user friendly platform aimed at helping you make
                the best products and sell them{" "}
              </p>
              <p className="text-left mt-5" style={{ color: "#ACABC3" }}>
                Awesome designer and easy registration
              </p>
              <button className="shipping py-2 pr-20 pl-5 my-3">Join Us</button>
            </div>
          </div>
        </div>
        <div className="m-0">
          <h1
            className="flex item-center justify-center my-10"
            style={{ color: "#151875", fontSize: 25, fontWeight: "bold" }}
          >
            Trending Products
          </h1>
          <div className="flex justify-center mT-20">
            <div className="flex grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {/* {data.products.map((product) => (
                <Productitem product={product} key={product.slug}></Productitem>
              ))} */}
              {product.map((product) => (
                <Productitem product={product} key={product.id}></Productitem>
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row w-full item-center justify-center py-10"
          style={{ background: "#F6F5FF" }}
        >
          <div className="">
            <h1
              className="mt-10 mx-5"
              style={{ fontSize: 20, color: "#151875" }}
            >
              Are you an artist or influencer looking to sell merches
            </h1>
            <div className="flex flex-row">
              <p className="text-left m-5" style={{ color: "#ACABC3" }}>
                quality support and help all the way{" "}
              </p>
              <p className="m-5 mr-5" style={{ color: "#ACABC3" }}>
                Lorem ipsum
              </p>
            </div>
            <div className="flex flex-row">
              <p className="text-left m-5" style={{ color: "#ACABC3" }}>
                quality support and help all the way{" "}
              </p>
              <p className="m-5 mr-5" style={{ color: "#ACABC3" }}>
                Lorem ipsum
              </p>
            </div>
            <Link href="/containers/Main/AllArtistPage">
              <p
                className="text-white"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 40,
                }}
              >
                Shop Nows
              </p>
            </Link>
          </div>
          <div>
            <Image
              src="/images/out2.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div>
          <h1
            className="flex item-center justify-center my-10"
            style={{ color: "#151875", fontSize: 25, fontWeight: "bold" }}
          >
            Top Artist
          </h1>
          <div className="flex md:flex-row flex-col item-center justify-center px-10">
            <div className="">
              <Image
                src="/images/out2.png"
                alt="Picture of the author"
                width={400}
                height={400}
                className="flex item-center justify-center"
              />
              <h1
                className="flex  justify-center"
                style={{ color: "#151875", fontWeight: "bold" }}
              >
                Yohana
              </h1>
            </div>
            <div>
              <Image
                src="/images/out2.png"
                alt="Picture of the author"
                width={400}
                height={400}
              />
              <h1
                className="flex justify-center"
                style={{ color: "#151875", fontWeight: "bold" }}
              >
                Aman T.
              </h1>
            </div>
            <div>
              <Image
                src="/images/out2.png"
                alt="Picture of the author"
                width={400}
                height={400}
                className="flex item-center justify-center"
              />
              <h1
                className="flex item-center justify-center"
                style={{ color: "#151875", fontWeight: "bold" }}
              >
                Nebil
              </h1>
            </div>
            <div>
              <Image
                src="/images/out2.png"
                alt="Picture of the author"
                width={400}
                height={400}
              />
              <h1
                className="flex item-center justify-center"
                style={{ color: "#151875", fontWeight: "bold" }}
              >
                Yohana
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
