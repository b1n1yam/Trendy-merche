import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
const CartItems = [
  {
    image: "/images/1shoes.jpg",
    price: 3500,
    quantity: 10,
    id: 1,
  },
  {
    image: "/images/3shoes.jpg",
    price: 2530,
    quantity: 9,
    id: 2,
  },
  {
    image: "/images/2mobile.jpg",
    price: 13500,
    quantity: 4,
    id: 3,
  },
  {
    image: "/images/2labtop.jpg",
    price: 35000,
    quantity: 3,
    id: 4,
  },
];
export default function ShoppingCart() {
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
          Shopping Cart
        </h1>
      </div>
      <div className="grid grid-cols-4 md:gap-5 mx-10">
        <div className="overflow-x-auto col-span-3">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left tableHeader font-bold">Product</th>
                <th className="p-5 text-left tableHeader font-bold">Price</th>
                <th className="p-5 text-left tableHeader font-bold">Quantity</th>
                <th className="p-5 text-left tableHeader font-bold">Total</th>
              </tr>
            </thead>
            <tbody className="p-5 text-left ">
              {CartItems.map((items) => (
                <tr className="border-b" key={items.id}>
                  <td className="p-5 text-black">
                    <Image
                      src={items.image}
                      alt="product image"
                      className="rounded shadow"
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className="px-5 tableHeader">{items.price}</td>
                  <td className="px-5 tableHeader">- {items.quantity} +</td>
                  <td className="px-5 tableHeader">
                    $ {items.quantity * items.price}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row p-2">
              <button className="align-center shipping py-2 px-8 mx-1">
                Update Cart
              </button>
            </div>
            <div className="flex flex-row p-2">
              <button className="align-center shipping py-2 px-8 mx-1">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center w-full my-4 font-bold tableHeader">Cart Totals</h1>
          <div>
            <div className="checkOut p-3">
              <div className="flex flex-row justify-between p-2 my-5" style={{borderColor:"#071242",borderBottomWidth:1}}>
                <h2 className="tableHeader">Subtotals </h2>
                <h2 className="tableHeader">$219.00</h2>
              </div>
              <div className="flex flex-row justify-between p-2 my-5" style={{borderColor:"#071242",borderBottomWidth:1}}>
                <h2 className="tableHeader">Totals </h2>
                <h2 className="tableHeader">$325.00</h2>
              </div>
              <div className="flex flex-row p-2 mt-5 mb-5">
                <p className="font-color text-15">
                  Shipping and Taxes calculated
                </p>
              </div>
              <div
                style={{ backgroundColor: "rgb(6, 161, 6)" }}
                className="flex flex-row p-2  text-center align-center"
              >
                <button className="align-center w-full mx-3">
                  <Link href='../Components/orderCompleted'>Proceed To Checkout</Link>
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-center w-full my-4 font-bold tableHeader">
            Calculate Shipping
          </h1>
          <div className="checkOut p-3">
            <h2 className="tableHeader">For foregin countries</h2>
            <div className="flex flex-row justify-between p-2 my-5" style={{borderColor:"#071242",borderBottomWidth:1}}>
              <h2 className="tableHeader">Subtotals </h2>
              <h2 className="tableHeader">$219.00</h2>
            </div>
            <div className="flex flex-row justify-between p-2 my-5 " style={{borderColor:"#071242",borderBottomWidth:1}}>
              <h2 className="tableHeader">Totals </h2>
              <h2 className="tableHeader">$325.00</h2>
            </div>
            <div className="flex flex-row p-2">
              <p className="tableHeader text-20">
                Shipping and Taxes calculated
              </p>
            </div>
            <div className="flex flex-row p-2">
              <button className="align-center shipping px-8 py-2 ">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
