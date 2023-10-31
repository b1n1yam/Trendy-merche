import Link from "next/link";
import Image from "next/image";
import React from "react";
import Layout from "../../Components/Layout";
import data from "../../utils/data";
import Productitem from "../../Components/Productitem";

export default function ArtistProfile() {
    return (
        <Layout>
            <div style={{ flex: 1 }}>
                <div className="flex flex-col">
                    <Image src={'/images/ArtistHome.png'} height={700} width={2000} alt="ArtistProfilePage" />
                    <div className="flex flex-col md:flex-row md:grid md:grid-cols-2">
                        <div className="hidden md:block md:col-span-1"
                            style={{
                                // backgroundImage: ('/images/Rectangle.png'),
                                // height: '1000',
                                // width: '1000'
                                // backgroundImage: `url(${bg.src})`,
                                flex: 1,
                                backgroundImage: `url(/images/Rectangle.png)`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                // width: 1000,
                                height: 700,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 200
                            }}
                        >
                            <h1 className="flex font-bold " style={{ color: '#151875', fontSize: 20, marginTop: 200 }}>Hello ima sombody!!!</h1>
                            <p className="text-black flex font-regula" style={{ width: 500 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                            </p>
                        </div>

                        <div className="col-span-1" style={{ marginTop: 0 }}>
                            <Image src={'/images/ArtistHome2.png'} height={700} width={700} alt="ArtistProfilePage" />
                        </div>
                        <div className="md:grid md:grid-cols-6 md:gap-3">
                            <div className="md:col-span-2" />
                            <div className="md:col-span-3 px-3 md:flex-row mt-10">
                                <div className="flex flex-col md:flex-row md:mt-10 item-center px-8">
                                    {data.products.map((product) => (
                                        <Productitem product={product} key={product.slug}></Productitem>
                                    ))}
                                </div>
                                <div className="flex flex-col md:flex-row mt-10 item-center px-8">
                                    {data.products.map((product) => (
                                        <Productitem product={product} key={product.slug}></Productitem>
                                    ))}
                                </div>
                                <div className="flex flex-col md:flex-row mt-10 item-center px-8">
                                    {data.products.map((product) => (
                                        <Productitem product={product} key={product.slug}></Productitem>
                                    ))}
                                </div>
                            </div>
                            {/* <div className="md:col-span-1" /> */}

                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}
