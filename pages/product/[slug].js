import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../Components/Layout";
import data from "../utils/data";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) return <div>{slug}</div>;
  return (
    <Layout>
      <div>
        <Link href="/">Back to product</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2 px-3">
          <Image src={product.image} alt={product.name} width={640} height={640} layout="responsive" ></Image>
        </div>
        <div>
            <ui>
                <li>
                    <h1>{product.name}</h1>
                </li>
                <li>
                    <h1>Category: {product.category}</h1>
                </li>
                <li>
                    <h1>Brand: {product.brand}</h1>
                </li>
                <li>{product.rating}</li>
            </ui>
        </div>
        <div>
        <div className="card p-5">
           <div className="mb-2 flex justify-between">
            <div>Price</div>
            <div>{product.price}</div>   
           </div>
           <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{product.countInStock}</div>   
           </div>
           <button className="primary-button w-full">Add to cart</button>
        </div>
        </div>
      </div>
    </Layout>
  );
}
