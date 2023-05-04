import React from "react";
import Layout from "../../Components/Layout";
import Image from "next/image";
import Productitem from "../../Components/Productitem";
import data from "../../utils/data";

export default function Homepage() {
  return (
    <Layout>
      <div className="mb-20" style={{}}>
        <div className="flex flex-col-reverse md:grid md:grid-cols-4 md:gap-5 flex-col">
          <div
            className="flex justify-center lg:col-span-2 md:col-span-3 sm:col-span-4  py-5 flex-col mx-10"
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
              <button className="shipping py-2 px-5 mx-3">Shop now</button>
              <button className="shipping py-2 px-5 mx-3">Join Us</button>
            </div>
          </div>
          <div className="md:col-span-2 px-10 py-5 " style={{}}>
            <Image
              src="/images/yetis.png"
              alt="Picture of the author"
              width={1000}
              height={600}
            />
          </div>
        </div>
        {/* list products */}
        <div className="flex justify-center m-20">
          <div className="flex grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {data.products.map((product) => (
              <Productitem product={product} key={product.slug}></Productitem>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col grid grid-cols-4 gap-5"
          style={{ background: "#F6F7FB" }}
        >
          <div className="flex item-end justify-end  col-span-2">
            <Image
              src="/images/out2.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col col-span-2 justify-center">
          <div className=" w-full">
            <h1 className="mt-10" style={{ fontSize: 20, color: "#151875" }}>
              Are you an artist or influencer looking to sell merches
            </h1>
            <p className="text-left mt-5" style={{color: "#ACABC3"}}>quality support and help all the way </p>
            <p className="mt-5 mr-5" style={{color: "#ACABC3"}}>
              easy to use and user friendly platform aimed at helping you make
              the best products and sell them{" "}
            </p>
            <p className="text-left mt-5" style={{color: "#ACABC3"}}>Awesome designer and easy registration</p>
            <button className="shipping py-2 pr-20 pl-5 my-3">Join Us</button>
          </div>
         
          </div>
         
        </div>
        <div className="m-20">
             <h1 className="flex item-center justify-center my-10" style={{color:'#151875',fontSize:25,fontWeight:'bold'}}>
             Trending Products
             </h1>
             <div className="flex justify-center mt-20">
          <div className="flex grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {data.products.map((product) => (
              <Productitem product={product} key={product.slug}></Productitem>
            ))}
          </div>
        </div>
          </div>
          <div
          className="flex flex-col grid grid-cols-4 gap-5"
          style={{ background: "#F6F7FB" }}
        >
          
          <div className="flex flex-col col-span-2 justify-center pl-8">
          <div className=" w-full">
            <h1 className="mt-10" style={{ fontSize: 20, color: "#151875" }}>
              Are you an artist or influencer looking to sell merches
            </h1>
            <div className="flex flex-row">
            <p className="text-left m-5" style={{color: "#ACABC3"}}>quality support and help all the way </p>
            <p className="m-5 mr-5" style={{color: "#ACABC3"}}>
             Lorem ipsum
            </p></div>
            <div className="flex flex-row">
            <p className="text-left m-5" style={{color: "#ACABC3"}}>quality support and help all the way </p>
            <p className="m-5 mr-5" style={{color: "#ACABC3"}}>
             Lorem ipsum
            </p></div>
            <button className="shipping py-2 pr-20 pl-5 my-3">Shop Now</button>
          </div>
         
          </div>
          <div className="flex item-end justify-start  col-span-2">
            <Image
              src="/images/out2.png"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
         
        </div>
        <div>
        <h1 className="flex item-center justify-center my-10" style={{color:'#151875',fontSize:25,fontWeight:'bold'}}>
             Top Artist
             </h1>
             <div className="flex flex-row px-10">
                <div className="">
                <Image
              src="/images/out2.png"
              alt="Picture of the author"
              width={400}
              height={400}
              className="flex item-center justify-center"
            />
            <h1 className="flex  justify-center" style={{color:'#151875',fontWeight:'bold'}}>
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
            <h1 className="flex justify-center" style={{color:'#151875',fontWeight:'bold'}}>
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
            <h1 className="flex item-center justify-center" style={{color:'#151875',fontWeight:'bold'}}>
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
            <h1 className="flex item-center justify-center" style={{color:'#151875',fontWeight:'bold'}}>
              Yohana
            </h1>
                </div>
             </div>
        </div>
      </div>
    </Layout>
  );
}
