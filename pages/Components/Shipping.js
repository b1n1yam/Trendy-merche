import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart";
import { useRouter } from "next/router";

export default function Shipping() {
  const router = useRouter();
  const data = router.query;
  console.log('Shipping cart data ', data)
  return (
    <Layout>
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
          Shopping
        </h1>
      </div>
      <div>
        <div>
          <h1 className="font-bold tableHeader m-10">Shipping + Payment</h1>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-1" />
        <div className="shippingContact overflow-x-auto col-span-3 p-4 rounded-lg my-10">
          <div>
            <h1 className="tableHeader font-bold my-10">Contact Information</h1>
          </div>
          <div className="flex flex-col">
            <input
              className="contactInput"
              placeholder="Email or Mobile Phone number"
            />
            <check className="text-black my-10">keep me up to date</check>
          </div>
          <div className="mt-20">
            <h1 className="tableHeader font-bold">Shipping address</h1>
          </div>
          <div className="flex flex-row">
            <input
              className="p-2 m-2 w-full contactInput"
              placeholder="First name (option) "
            />
            <input
              className="p-2 m-2 w-full contactInput"
              placeholder="Last name"
            />
          </div>
          <div>
            <input
              className="p-2 m-2 w-full contactInput"
              placeholder="Address"
            />
          </div>
          <div>
            <input
              className="p-2 m-2 w-full contactInput"
              placeholder="Apartnment (optional)"
            />
          </div>
          <div>
            <input className="p-2 m-2 w-full contactInput" placeholder="City" />
          </div>
          <div className="flex flex-row ">
            <input
              className="p-2 m-3 w-full contactInput"
              placeholder="Addis Ababa"
            />
            <input
              className="p-2 m-3 w-full contactInput"
              placeholder="Postal Code"
            />
          </div>
          <div>
            <button className="shipping py-2 px-5 mx-3">
              <Link href="../Components/ShoppingCart">Continue Shipping</Link>
            </button>
          </div>
        </div>
        <div>

          <div
            className="flex flex-row shippingContactLeft justify-center"
            style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}
          >
            <div>
              <Image
                src={data.productimageUrl}
                alt="Picture of the author"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-row w-full justify-between px-5">
              <div>
                <h3 className="tableHeader">{data?.productName}</h3>
                <h2 className="tableHeader">Color: Red</h2>
                <h2 className="tableHeader">Size :XL</h2>
              </div>
              <div
                className="justify-center tableHeader"
                style={{ marginRight: 6 }}
              >
                $32.00
              </div>
            </div>
          </div>
          {/* <div
            className="flex flex-row shippingContactLeft"
            style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}
          >
            <div>
              <Image
                src="/images/blackhoodies.jpg"
                alt="Picture of the author"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-row w-full justify-between px-5">
              <div>
                <h3 className="tableHeader">addidas</h3>
                <h2 className="tableHeader">Color: Brown</h2>
                <h2 className="tableHeader">Size :XL</h2>
              </div>
              <div
                className="justify-center align-center tableHeader"
                style={{ marginRight: 6 }}
              >
                $32.00
              </div>
            </div>
          </div> */}
          <div className="checkOut">
            <div className="flex flex-row justify-between p-2">
              <h2 className="tableHeader">Subtotals </h2>
              <h2 className="text-black">$219.00</h2>
            </div>
            <div className="flex flex-row justify-between p-2">
              <h2 className="tableHeader">Shipping </h2>
              <h2 className="text-black">$20.00</h2>
            </div>
            <div className="flex flex-row justify-between p-2">
              <h2 className="tableHeader">Totals </h2>
              <h2 className="text-black">$325.00</h2>
            </div>
            <div className="flex flex-row p-2">
              <p className="tableHeader">
                Shipping and Taxes calculated at checkout
              </p>
            </div>
            <div
              style={{ backgroundColor: "rgb(6, 161, 6)" }}
              className="flex flex-row p-2  text-center align-center"
            >
              <button className="align-center w-full mx-3">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
