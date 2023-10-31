import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../Components/Layout";
import data from "../../utils/data";

export default function ArtistPage() {
    return (
        <Layout>
            <div style={{ flex: 1 }}>
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
                        Artists Shop
                    </h1>
                </div>
                <div className="grid md:grid-cols-5 md:gap-3">
                    <div className="col-span-1" />
                    <div className="md:col-span-4 px-3 flex-row mt-10">
                        <h2 className="font-bold" style={{ color: '#151875', fontSize: 20 }}>Ecommerce Acceories & Fashion item </h2>
                        <p style={{ color: '#8A8FB9', marginTop: 5 }}>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="md:col-span-1" />

                </div>
                <div className="mx-5 md:mx-0 md:grid md:grid-cols-5 md:gap-3">
                    <div className="col-span-1" />
                    <div className="col-span-1 flex flex-col">
                        <p className="font-bold underline " style={{ color: '#151875', fontSize: 20 }}>Artist Types</p>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>Tik Tokers</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>Youtubers</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>instagram</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>Singer</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>comedian</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>dancer</p>
                        </div>
                        <p className="font-bold underline mt-10" style={{ color: '#151875', fontSize: 20 }}>Discount Offer</p>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>20% Cashback</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>5% Cashback Offer</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>25% Discount Offer</p>
                        </div>
                        <p className="font-bold underline mt-10" style={{ color: '#151875', fontSize: 20 }}>Rating Item</p>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>Tik Tokers</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>Youtubers</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>instagram</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>Singer</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>comedian</p>
                        </div>
                        <div className="flex flex-row mt-5">
                            <input

                                style={{ background: '#000000', color: "#FFFFFFF", marginTop: 1 }}
                                type="checkbox"
                            />
                            <p className="" style={{ color: '#7E81A2', marginTop: 5, paddingLeft: 20, fontSize: 16 }}>dancer</p>
                        </div>
                    </div>


                    <div className="md:col-span-2 px-3 flex-row mt-10">
                        <div className="flex flex-col-reverse md:flex-row shadow-lg bg-white-100 mt-10" style={{ minHeight: 210, marginTop: 10, borderStartStartRadius: 30, width: '100%' }}>
                            <div className="flex flex-row overflow-scroll">
                                {[1, 2, 3,].map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundImage: `url(/images/hoodies/Printed-Hoodie-Black-Front.jpg)`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                                minWidth: 120,
                                                height: 100,
                                                marginLeft: 10,
                                                marginTop: 50,
                                                marginLeft: 50
                                            }}
                                        >
                                            {index === 0 ? <div className=" p-1" style={{ background: '#FB2E86', width: 100, borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 80, marginLeft: 20 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 30 }}>New</p></div> : null}
                                        </div>
                                    )
                                })}
                            </div>
                            <Link href={'/containers/Main/ArtistProfile'}>
                                <div
                                    style={{
                                        backgroundImage: `url(/images/yohanaLatest.png)`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        width: 170,
                                        height: 190,
                                        marginLeft: 50
                                    }}
                                >
                                    <div className=" p-1" style={{ background: '#FB2E86', borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 180 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 50 }}>Yohana</p></div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex flex-col-reverse md:flex-row shadow-lg bg-white-100 mt-10" style={{ minHeight: 210, marginTop: 10, borderStartStartRadius: 30, width: '100%' }}>
                            <div className="flex flex-row overflow-scroll">
                                {[1, 2, 3,].map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundImage: `url(/images/hoodies/Printed-Hoodie-Black-Front.jpg)`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                                minWidth: 120,
                                                height: 100,
                                                marginLeft: 10,
                                                marginTop: 50,
                                                marginLeft: 50
                                            }}
                                        >
                                            {index === 0 ? <div className=" p-1" style={{ background: '#FB2E86', width: 100, borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 80, marginLeft: 20 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 30 }}>New</p></div> : null}
                                        </div>
                                    )
                                })}
                            </div>
                            <Link href={'/containers/Main/ArtistProfile'}>
                                <div
                                    style={{
                                        backgroundImage: `url(/images/yohanaLatest.png)`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        width: 170,
                                        height: 190,
                                        marginLeft: 50
                                    }}
                                >
                                    <div className=" p-1" style={{ background: '#FB2E86', borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 180 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 50 }}>Yohana</p></div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row shadow-lg bg-white-100 mt-10" style={{ minHeight: 210, marginTop: 10, borderStartStartRadius: 30, width: '100%' }}>
                            <div className="flex flex-row overflow-scroll">
                                {[1, 2, 3,].map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundImage: `url(/images/hoodies/Printed-Hoodie-Black-Front.jpg)`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                                minWidth: 120,
                                                height: 100,
                                                marginLeft: 10,
                                                marginTop: 50,
                                                marginLeft: 50
                                            }}
                                        >
                                            {index === 0 ? <div className=" p-1" style={{ background: '#FB2E86', width: 100, borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 80, marginLeft: 20 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 30 }}>New</p></div> : null}
                                        </div>
                                    )
                                })}
                            </div>
                            <Link href={'/containers/Main/ArtistProfile'}>
                                <div
                                    style={{
                                        backgroundImage: `url(/images/yohanaLatest.png)`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        width: 170,
                                        height: 190,
                                        marginLeft: 50
                                    }}
                                >
                                    <div className=" p-1" style={{ background: '#FB2E86', borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 180 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 50 }}>Yohana</p></div>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row shadow-lg bg-white-100 mt-10" style={{ minHeight: 210, marginTop: 10, borderStartStartRadius: 30, width: '100%' }}>
                            <div className="flex flex-row overflow-scroll">
                                {[1, 2, 3,].map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                backgroundImage: `url(/images/hoodies/Printed-Hoodie-Black-Front.jpg)`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                                minWidth: 120,
                                                height: 100,
                                                marginLeft: 10,
                                                marginTop: 50,
                                                marginLeft: 50
                                            }}
                                        >
                                            {index === 0 ? <div className=" p-1" style={{ background: '#FB2E86', width: 100, borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 80, marginLeft: 20 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 30 }}>New</p></div> : null}
                                        </div>
                                    )
                                })}
                            </div>
                            <Link href={'/containers/Main/ArtistProfile'}>
                                <div
                                    style={{
                                        backgroundImage: `url(/images/yohanaLatest.png)`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        width: 170,
                                        height: 190,
                                        marginLeft: 50
                                    }}
                                >
                                    <div className=" p-1" style={{ background: '#FB2E86', borderTopLeftRadius: 20, justifyContent: 'center', alignSelf: 'flex-end', marginTop: 180 }}><p className="text-white" style={{ alignSelf: 'center', marginLeft: 50 }}>Yohana</p></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-1" />

                </div>
            </div>
        </Layout>
    );
}
