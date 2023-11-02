import React from 'react'
import Layout from './Layout'

export default function Contactus() {
    return (
        <Layout>
            <div>
                <div className='contactHeader' style={{ height: 150 }}>
                    <h1 className='text-black p-10' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242' }}>Contact Us</h1>
                </div>
                <div className='md:flex mdflex-row'>
                    <div className='w-full m-5' style={{}}>
                        <div>
                            <h1 className='text-black p-5 size-20' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242' }}>Information About us</h1>
                            <p className='text-black p-5'>

                                Welcome to Trendy Merches, where fans and influencers unite to create something extraordinary. For fans like you, this is your space to connect with your favorite content creators, discover unique merchandise,
                                and be part of their journey like never before. For influencers, it's your platform to take your brand to new heights, reach a broader audience, and turn your passion into profit. At Trendy Merches, we're all about enhancing the fan experience and providing influencers with the tools to shine. Join us in shaping the future of fan engagement and influencer monetization in Ethiopia
                            </p>
                            <div className='bg-amber flex flex-row'>
                                <h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'blue' }}></h1>
                                <h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'purple' }}></h1>
                                <h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'red' }}></h1>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className='text-black p-5 size-20' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242' }}>Get in Touch</h1>
                                <p className='text-black p-5'>
                                    Questions or collaborations? Don't hesitate to reach out!
                                    We're here to assist, connect, and explore opportunities with you
                                </p>
                                <div>
                                    <input className='border mx-5 my-2' placeholder='Your Name ' />
                                    <input className='border mx-5 my-2' placeholder='Your Email ' />
                                </div>
                                <div>
                                    <input className='border mx-5 md:w-full my-5' placeholder='Subject*' />
                                </div>
                                <div className='flex'>
                                    <textarea className='border mx-5' placeholder='Type your message'>
                                    </textarea>

                                </div>
                                <button className='shipping p-2 mx-5 my-5'>Send mail</button>
                                <div className='bg-amber flex flex-row'>
                                    <h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'blue' }}></h1>
                                    <h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'purple' }}></h1>
                                    <h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'red' }}></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full m-5' style={{}}>
                        <h1 className='text-black p-5 size-20' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242' }}>Contact us</h1>
                        <div className='md:flex md:flex-row w-full'>
                            <div className='flex flex-row m-3'>
                                <div><h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'blue', height: 10, widows: 10 }}></h1></div>
                                <div>
                                    <h1 className='text-black'>Tel : +(251) 996341186</h1>
                                    <h1 className='text-black'>Email : trendymerches@gmail.com</h1>
                                </div>
                            </div>
                            <div className='flex flex-row m-3'>
                                <div><h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'purple', height: 10, widows: 10 }}></h1></div>
                                <div>
                                    <h1 className='text-black'>Tel : +(251) 996341186</h1>
                                    <h1 className='text-black'>Email : trendymerches@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex md:flex-row w-full mt-7'>
                            <div className='flex flex-row m-3'>
                                <div><h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'orange', }}></h1></div>
                                <div>
                                    <h1 className='text-black'>Address</h1>
                                    <h1 className='text-black'>Email : trendymerches@gmail.com</h1>
                                </div>
                            </div>
                            <div className='flex flex-row m-3'>
                                <div><h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'green', height: 10, widows: 10 }}></h1></div>
                                <div>
                                    <h1 className='text-black'>Free standard shipping</h1>
                                    <h1 className='text-black'>Email : trendymerches@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}