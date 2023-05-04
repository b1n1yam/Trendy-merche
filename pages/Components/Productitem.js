import Link from "next/link";
import React from "react";

export default function Productitem({ product }) {
  return (
    <div className="card" >
    <div className="flex flex-col items-center" style={{width:250,height:260}}>
      <div style={{background:'#F6F7FB',height:200,width:250}} className="flex justify-center pt-5">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt="product image"
          className="rounded shadow"
          style={{height:200,width:200,justifyContent:'center',alignItems:'center'}}
          
        />
      </Link>
      </div>
      <div className="flex flex-col items-center justify-center mt-5" style={{height: 50}}>
      {/* <Link href={`/product/${product.slug}`}>
      <h2 className="text-lg">
         {product.name}
        </h2>
      </Link> */}
      <p className="mt-5" style={{color:'#FB2E86',fontWeight:'600'}}>{product.brand}</p>
      <p className="mb-2"style={{color:'#FB2E86',fontWeight:'600'}} >$ {product.price}</p>
      </div>
      
    </div>
    <div className="text-right mt-5 " style={{background:'#FB2E86',width:'70%',textAlign:'end',float:'right',borderTopLeftRadius:20}}>
      <p className="p-1.5" style={{color:'white',fontWeight:'600'}}>Aman T.</p>
      </div>
    
    </div>
  );
}
