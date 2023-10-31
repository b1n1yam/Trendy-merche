import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'
import useCartStore from "../store/useStore";
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
  const router = useRouter();
  const data = router.query;
  const { remove } = useCartStore();
  console.log("Shopping Cart side ", data)
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <div className="contactHeader md:grid md:grid-cols-5" style={{ minHeight: 150 }}>
        <div className="md:col-span-1" />
        <h1
          className="text-black p-10 mx-20 col-span-2"
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
      <div className="md:grid md:grid-cols-5 md:gap-5 mx-10">
        <div className="md:col-span-1" />
        <div className="hidden md:block overflow-x-auto col-span-2">
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
              {/* {CartItems.map((items) => ( */}
              <tr className="border-b">
                <td className="p-5 text-black">
                  <Image
                    src={data.productimageUrl}
                    alt="product image"
                    className="rounded shadow"
                    width={200}
                    height={200}
                  />
                </td>
                <td className="px-5 tableHeader">{32}</td>
                <td className="px-5 tableHeader">
                  <button onClick={() => setCount(count - 1)} className="px-3 py-2 rounded-sm mx-5" style={{ borderWidth: 1, borderRadius: 10, background: '#7F56D9' }}>
                    <p className="text-white" style={{ fontSize: 20 }}>-</p>
                  </button>
                  {/* {items.quantity} */}
                  {count}
                  <button onClick={() => setCount(count + 1)} className="px-3 py-2 rounded-sm mx-5" style={{ borderWidth: 1, borderRadius: 10, background: '#74ed94' }}>
                    <p className="text-white" style={{ fontSize: 20 }}>+</p>
                  </button>
                </td>
                <td className="px-5 tableHeader">
                  $ {data.productPrice * count}
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row p-2">
              <button className="align-center shipping py-2 px-8 mx-1">
                Update Cart
              </button>
            </div>
            <div className="flex flex-row p-2">
              <button onClick={() => { remove() }} className="align-center shipping py-2 px-8 mx-1">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
        {/* small device */}
        <div className="block md:hidden mt-10 flex flex-row border py-10 rounded">
          <div>
            <Image
              src={data.productimageUrl}
              alt="product image"
              className="rounded shadow"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col ">
            <h1 className="px-5 text-left tableHeader font-Regular">Love Red Hoodies</h1>
            <h1 className="px-5 text-left tableHeader font-bold mt-3">1,400 Birr</h1>
            <div className="mt-5 flex flex-row justify-center item-center">
              <button onClick={() => setCount(count - 1)} className="px-3 py-2 rounded-sm mx-5" style={{ borderWidth: 1, borderRadius: 10, background: '#7F56D9' }}>
                <p className="text-white" style={{ fontSize: 20 }}>-</p>
              </button>
              <p className="text-black mt-3">{count}</p>
              <button onClick={() => setCount(count + 1)} className="px-3 py-1 rounded-sm mx-5" style={{ borderWidth: 1, borderRadius: 10, background: '#74ed94' }}>
                <p className="text-white" style={{ fontSize: 20 }}>+</p>
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-center w-full my-4 font-bold tableHeader">Cart Totals</h1>
          <div>
            <div className="checkOut p-3">
              <div className="flex flex-row justify-between p-2 my-5" style={{ borderColor: "#071242", borderBottomWidth: 1 }}>
                <h2 className="tableHeader">Subtotals </h2>
                <h2 className="tableHeader">$219.00</h2>
              </div>
              <div className="flex flex-row justify-between p-2 my-5" style={{ borderColor: "#071242", borderBottomWidth: 1 }}>
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
                  <Link
                    href={{
                      pathname: '/containers/Main/PaymentPage',
                      query: {
                        productimageUrl: data.productimageUrl,
                        productName: data.productName,
                        productPrice: data.productPrice,
                        productID: data.productID
                      },
                    }}
                  >Proceed To Checkout</Link>
                </button>
              </div>
            </div>
          </div>
          <h1 className="hidden text-center w-full my-4 font-bold tableHeader">
            Calculate Shipping
          </h1>
          <div className="checkOut p-3 hidden">
            <h2 className="tableHeader">For foregin countries</h2>
            <div className="flex flex-row justify-between p-2 my-5" style={{ borderColor: "#071242", borderBottomWidth: 1 }}>
              <h2 className="tableHeader">Subtotals </h2>
              <h2 className="tableHeader">$219.00</h2>
            </div>
            <div className="flex flex-row justify-between p-2 my-5 " style={{ borderColor: "#071242", borderBottomWidth: 1 }}>
              <h2 className="tableHeader">Totals </h2>
              <h2 className="tableHeader">$325.00</h2>
            </div>
            <div className="flex flex-row p-2">
              <p className="tableHeader text-20">
                Shipping and Taxes calculated
              </p>
            </div>
            <div className="flex flex-row p-2">
              <button onClick={() => { }} className="align-center shipping px-8 py-2 ">
                <Link href={{
                  pathname: '/Components/Shipping',
                  query: {
                    productimageUrl: data.productimageUrl,
                    productName: data.productName
                  }
                }}><p> Calculate Shipping</p></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
