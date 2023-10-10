import Link from "next/link";
import React from "react";
import Image from 'next/image'

export default function Productitem({ product }) {
  return (
    <div className="card hover:bg-sky-700 group mx-5" >
      <div className="flex flex-col items-center " style={{ width: 250 }}>
        <div style={{ background: '#F6F7FB', height: 250, width: 250 }} className="flex justify-center pt-5">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.image}
              alt="product image"
              className="rounded shadow"
              style={{ height: 200, width: 200, justifyContent: 'center', alignItems: 'center' }}
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-5" style={{}}>
          {/* <Link href={`/product/${product.slug}`}>
      <h2 className="text-lg">
         {product.name}
        </h2>
      </Link> */}
          <p className="mt-5 mb-5 text-red-600 group-hover:text-white" style={{ fontWeight: '600' }}>{product.brand}</p>
          <Image
            src={'/images/ProductIconicLabel.png'}
            alt="nodata"
            style={{ marginTop: 2, justifyContent: 'center', alignItems: 'center' }}
            width={70}
            height={5}
          />
          <p className="mb-2 mt-5 text-red-600 group-hover:text-white" style={{ fontWeight: '600' }} >$ {product.price}</p>
        </div>

      </div>
      <div className="text-right mt-5 " style={{ background: '#FB2E86', width: '70%', textAlign: 'end', float: 'right', borderTopLeftRadius: 20 }}>
        <p className="p-1.5" style={{ color: 'white', fontWeight: '600' }}>Aman T.</p>
      </div>

    </div>
  );
}
