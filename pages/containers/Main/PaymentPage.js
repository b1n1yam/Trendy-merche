import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PaymentPage() {
    const router = useRouter();
    const data = router.query;
    const [selectPaymentOption, setSelectedPaymentOption] = useState('teleBirr')
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
                    Pay with
                </h1>
            </div>
            <div>
                <div>
                    <h1 className="font-bold tableHeader m-10">Select your Convient Payment Method</h1>
                </div>
            </div>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-1" />
                <div className="shippingContact overflow-x-auto col-span-3 p-4 rounded-lg my-10">
                    <div className="flex flex-row grid grid-cols-4 mt-5" style={{}}>
                        <button onClick={() => setSelectedPaymentOption('bankTransfer')} className="col-span-2 border rounded-xl border-red text-black mx-5" style={{ borderColor: 'orange', background: selectPaymentOption === 'bankTransfer' ? 'orange' : 'white', color: selectPaymentOption === 'bankTransfer' ? 'white' : 'black' }}>Bank Transfer</button>
                        <button onClick={() => setSelectedPaymentOption('teleBirr')} className="col-span-2 border rounded-xl py-5 border-red mx-5 text-black" style={{ borderColor: 'orange', background: selectPaymentOption === 'teleBirr' ? 'orange' : 'white', color: selectPaymentOption === 'teleBirr' ? 'white' : 'black' }}>Telebirr</button>
                    </div>
                    <div className="flex flex-row grid grid-cols-4 mt-5" style={{}}>
                        <button onClick={() => setSelectedPaymentOption('chapa')} className="col-span-2 border rounded-xl py-5 border-red mx-5 text-black" style={{ borderColor: 'orange', background: selectPaymentOption === 'chapa' ? 'orange' : 'white', color: selectPaymentOption === 'chapa' ? 'white' : 'black' }}>Chapa</button>
                        <button onClick={() => setSelectedPaymentOption('amole')} className="col-span-2 border rounded-xl py-5 border-red mx-5 text-black" style={{ borderColor: 'orange', background: selectPaymentOption === 'amole' ? 'orange' : 'white', color: selectPaymentOption === 'amole' ? 'white' : 'black' }}>Amole</button>
                    </div>
                    <div className="flex flex-row grid grid-cols-4 mt-5" style={{}}>
                        <button onClick={() => setSelectedPaymentOption('cbe')} className="col-span-2 border rounded-xl py-5 border-red mx-5 text-black" style={{ borderColor: 'orange', background: selectPaymentOption === 'cbe' ? 'orange' : 'white', color: selectPaymentOption === 'cbe' ? 'white' : 'black' }}>CBE</button>
                        <button onClick={() => setSelectedPaymentOption('helloCash')} className="col-span-2 border rounded-xl py-5 border-red mx-5 text-black" style={{ borderColor: 'orange', background: selectPaymentOption === 'helloCash' ? 'orange' : 'white', color: selectPaymentOption === 'helloCash' ? 'white' : 'black' }}>HelloCash</button>
                    </div>
                    <div className="flex flex-row grid grid-cols-4 mt-5" style={{}}>
                        <button onClick={() => setSelectedPaymentOption('visa')} className="col-span-2 border rounded-xl py-5 border-red mx-5 text-black" style={{ borderColor: 'orange', background: selectPaymentOption === 'visa' ? 'orange' : 'white', color: selectPaymentOption === 'visa' ? 'white' : 'black' }}>Visa</button>
                        <button onClick={() => setSelectedPaymentOption('masterCard')} className="col-span-2 border rounded-xl py-5 border-red mx-5 text-black" style={{ borderColor: 'orange', background: selectPaymentOption === 'masterCard' ? 'orange' : 'white', color: selectPaymentOption === 'masterCard' ? 'white' : 'black' }}>MasterCard</button>
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

                    </div>

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
                                <Link href='../Components/orderCompleted'>Pay Now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
