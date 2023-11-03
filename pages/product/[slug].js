import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useCartStore from "../../store/useStore";
import Layout from "../Components/Layout";
//updated
//modal
import { useLoginModal } from "../../store/useStore";
//packages
import ReactStars from "react-star-rating-component";

// Get a cookie
import { getCookie } from "cookies-next";

export default function ProductScreens() {
  const { isOpen, onOpen, onClose } = useLoginModal();
  const { add } = useCartStore();
  const Cookiesdata = getCookie("userInfo");
  // console.log('Cookies ', Cookiesdata)
  const [selectedSize, setSelectedSize] = useState("XL");
  const { query } = useRouter();
  const { slug } = query;
  // const product = data.products.find((x) => x.slug === slug);
  // if (!product) return <div>{slug}</div>;
  return (
    <Layout>
      {/* <div>
        <Link href="/">Back to product</Link>
      </div> */}
      <div style={{}}>
        <div className="contactHeader" style={{ height: 150 }}>
          <h1
            className="text-black p-10 mx-20"
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#071242",
              paddingLeft: 20,
            }}
          >
            Product Details
          </h1>
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-3">
          <div className="md:col-span-1" />
          <div className="md:col-span-4 px-3 flex-row">
            <div className="flex flex-row md:flex-col-reverse grid md:grid-cols-6">
              <div className="flex flex-row md:flex-col md:col-span-1 hidden md:block">
                <div className="p-5 m-5 shadow-md">
                  <Image
                    src={slug}
                    alt={"product.name"}
                    width={70}
                    height={50}
                    layout="responsive"
                  />
                </div>
                <div className="p-5 m-5 shadow-md">
                  <Image
                    src={slug}
                    alt={"product.name"}
                    width={70}
                    height={50}
                    layout="responsive"
                  />
                </div>
                <div className="p-5 m-5 shadow-md">
                  <Image
                    src={slug}
                    alt={"product.name"}
                    width={70}
                    height={50}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col col-span-2 mt-5 my-10">
                <div className="p-10 shadow-md">
                  <Image
                    src={slug}
                    alt={"product.name"}
                    width={70}
                    height={80}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col col-span-2 pt-10 my-5">
                <p
                  className="font-bold text-black "
                  style={{ fontSize: 20, marginLeft: 20 }}
                >
                  Playwood arm chair
                </p>
                <div className="mx-5 flex flex-row">
                  <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    size={30}
                    activeColor="#ffd700"
                  />
                  <p className="mx-1 text-black">(22)</p>
                </div>
                <div className="flex flex-row mt-5">
                  <p className="text-black font-bold mx-5">Categories</p>
                  <p className="text-black font-regular mx-5">Cloth</p>
                </div>
                <div className="flex flex-row mt-5">
                  <p className="text-black font-bold mx-5">Tags</p>
                  <p className="text-black font-regular mx-5">Hoodies</p>
                </div>
                <div className="flex flex-row mt-5">
                  <p
                    className="text-black font-bold mx-5"
                    style={{ fontSize: 20 }}
                  >
                    Posted
                  </p>
                  <p
                    className="text-black font-regular mx-5"
                    style={{ fontSize: 15 }}
                  >
                    19 days ago
                  </p>
                </div>
                <div className="flex flex-row mt-5">
                  <p className="text-black mx-5 mt-1">Size</p>
                  <div className="grid grid-cols-4">
                    <button
                      onClick={() => setSelectedSize("SM")}
                      className="mx-2 py-1 border border-black px-5 text-black rounded"
                      style={{
                        background: selectedSize === "SM" ? "blue" : "white",
                        color: selectedSize === "SM" ? "white" : "black",
                        borderColor: selectedSize === "SM" ? "white" : "black",
                      }}
                    >
                      SM
                    </button>
                    <button
                      onClick={() => setSelectedSize("XL")}
                      className="mx-2 py-1 border border-black px-5 text-black rounded"
                      style={{
                        background: selectedSize === "XL" ? "blue" : "white",
                        color: selectedSize === "XL" ? "white" : "black",
                        borderColor: selectedSize === "XL" ? "white" : "black",
                      }}
                    >
                      XL
                    </button>
                    <button
                      onClick={() => setSelectedSize("L")}
                      className="mx-2 py-1 border border-black px-5 text-black rounded"
                      style={{
                        background: selectedSize === "L" ? "blue" : "white",
                        color: selectedSize === "L" ? "white" : "black",
                        borderColor: selectedSize === "L" ? "white" : "black",
                      }}
                    >
                      L
                    </button>
                    <button
                      onClick={() => setSelectedSize("XXL")}
                      className="mx-2 py-1 border border-black px-5 text-black rounded"
                      style={{
                        background: selectedSize === "XXL" ? "blue" : "white",
                        color: selectedSize === "XXL" ? "white" : "black",
                        borderColor: selectedSize === "XXL" ? "white" : "black",
                      }}
                    >
                      XXL
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <p
                    className="text-black font-bold mx-5"
                    style={{ fontSize: 30 }}
                  >
                    1,400 Birr
                  </p>
                </div>
                {/* <div className="flex flex-row mt-5">
                  <p className="text-black font-bold mx-5">Color</p>
                  <div className="flex flex-col" style={{ marginTop: -10 }}>
                    <div className="mt-5 flex flex-row">
                      <button
                        className="bg-red-500 mx-5"
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                      />
                      <button
                        className="bg-gray-500 mx-5"
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                      />
                      <button
                        className="bg-blue-500 mx-5"
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                      />
                      <button
                        className="bg-pink-500 mx-5"
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                      />
                    </div>
                    <div className="mt-5 flex flex-row">
                      <button
                        className="bg-black-700 mx-5"
                        style={{ height: 40, width: 40, borderRadius: 50, background: 'black' }}
                      />
                      <button
                        className="bg-sky-500 mx-5"
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                      />
                      <button
                        className="bg-green-500 mx-5"
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                      />
                      <button
                        className="bg-orange-500 mx-5"
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                      />
                    </div>
                  </div>
                </div> */}

                <div className="mt-5 mx-5">
                  <p style={{ color: "#A9ACC6" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tellus porttitor purus, et volutpat sit.
                  </p>
                </div>
                {/* <Link href={{
                  pathname: '/Components/ShoppingCart',
                  query: {
                    productimageUrl: product.image,
                    productName: product.name
                  },
                }}> */}
                <button
                  //  onClick={() => add()}
                  onClick={() => {
                    if (Cookiesdata !== "") {
                      add();
                    }
                    {
                      onOpen();
                    }
                  }}
                  className="flex flex-row mx-5 my-8 md:mt-10 border-gray-400 rounded-md py-5"
                  style={{ borderWidth: 1 }}
                >
                  <p className="text-black mx-10">Add To cart</p>
                  {/* <Image
                    src={'/images/heart.png'}
                    height={30}
                    width={30}
                    alt="cart image"
                  /> */}
                </button>
                {/* </Link> */}

                <div className="hidden md:block flex flex-row mt-5">
                  <p className="text-black font-bold mx-5">Share</p>
                  <p className="text-black font-regular mx-5">Hoodies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1" />
        </div>
        <div
          className="flex  hidden md:block md:grid md:grid-cols-5"
          style={{ background: "#F9F8FE" }}
        >
          <div className="col-span-1" />
          <div className="col-span-3">
            <div className="flex pt-10 pb-2 col-span-3">
              <button
                classsName="hover:bg-blue-700 underline font-regular py-2 px-10"
                style={{ color: "#151875" }}
              >
                Description
              </button>
              <button
                classsName="hover:bg-blue-700 underline font-regular py-2 px-10"
                style={{ color: "#151875" }}
              >
                Additional Info
              </button>
              <button
                classsName="hover:bg-blue-700 underline font-regular py-2 px-10"
                style={{ color: "#151875" }}
              >
                Reviews
              </button>
              <button
                classsName="hover:bg-blue-700 underline font-regular py-2 px-10"
                style={{ color: "#151875" }}
              >
                Video
              </button>
            </div>
            <div className="">
              <p style={{ color: "#151875", fontWeight: 700, fontSize: 20 }}>
                Varius tempor.
              </p>
              <p
                style={{
                  color: "#151875",
                  fontWeight: 300,
                  fontSize: 15,
                  opacity: 0.6,
                }}
              >
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes,
                mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                Velit consectetur neque, elit, aliquet. Non varius proin sed
                urna, egestas consequat laoreet diam tincidunt. Magna eget
                faucibus cras justo, tortor sed donec tempus. Imperdiet
                consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in
                fringilla vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>

            <div className="my-5">
              <p style={{ color: "#151875", fontWeight: 700, fontSize: 20 }}>
                More details.
              </p>
              <p
                style={{
                  color: "#151875",
                  fontWeight: 300,
                  fontSize: 15,
                  opacity: 0.6,
                  paddingTop: 5,
                }}
              >
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet.
              </p>
              <p
                style={{
                  color: "#151875",
                  fontWeight: 300,
                  fontSize: 15,
                  opacity: 0.6,
                  paddingTop: 5,
                }}
              >
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet.
              </p>
              <p
                style={{
                  color: "#151875",
                  fontWeight: 300,
                  fontSize: 15,
                  opacity: 0.6,
                  paddingTop: 5,
                }}
              >
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet.
              </p>
              <p
                style={{
                  color: "#151875",
                  fontWeight: 300,
                  fontSize: 15,
                  opacity: 0.6,
                  paddingTop: 5,
                }}
              >
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet.
              </p>
              <p
                style={{
                  color: "#151875",
                  fontWeight: 300,
                  fontSize: 15,
                  opacity: 0.6,
                  paddingTop: 5,
                }}
              >
                Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 mt-10">
          <div className="col-span-1" />
          <div className="col-span-4">
            <p
              style={{
                color: "#151875",
                fontWeight: 700,
                fontSize: 24,
                marginBottom: 10,
              }}
            >
              Related Product
            </p>
            <div className="flex flex-col md:flex-row">
              <div className="my-5 mx-5">
                <Image
                  src={"/images/MenFashion.png"}
                  width={150}
                  height={200}
                  alt="Product name"
                />
                <p className="text-black font-bold py-2"> Men Fashion</p>
                <p className="text-black font-medium">$ 400</p>
              </div>
              <div className="my-5 mx-5">
                <Image
                  src={"/images/womenFashion.png"}
                  width={150}
                  height={200}
                  alt="Product name"
                />
                <p className="text-black font-bold py-2"> Women Fashion</p>
                <p className="text-black font-medium">$ 400</p>
              </div>
              <div className="my-5 mx-5">
                <Image
                  src={"/images/wolxDummy.png"}
                  width={150}
                  height={200}
                  alt="Product name"
                />
                <p className="text-black font-bold py-2"> Delox Fashion</p>
                <p className="text-black font-medium">$ 400</p>
              </div>
              <div className="my-5 mx-5">
                <Image
                  src={"/images/TopWall.png"}
                  width={150}
                  height={200}
                  alt="Product name"
                />
                <p className="text-black font-bold py-2"> Top Wall Fashion</p>
                <p className="text-black font-medium">$ 400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
