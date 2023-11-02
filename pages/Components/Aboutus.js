import React from 'react'
import Layout from './Layout'

export default function Contactus() {
     return (
          <Layout>
               <div className=''>
                    <div className='contactHeader' style={{ height: 150 }}>
                         <h1 className='text-black p-10 mx-20' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }}>About Us</h1>
                    </div>
                    <div style={{ alignItems: 'center' }} className="flex flex-row w-full justify-center">
                         {/* <h1 className='tableHeader'>Image Part</h1> */}
                    </div>
                    <div className='md:mx-40'>
                         <div className="md:flex md:flex-row w-full justify-center">
                              <button className="align-center text-black px-8 py-2 w-full" style={{ fontSize: 30, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }} >
                                   Our Feature
                              </button>
                         </div>
                         <div className='md:flex md:flex-row w-full justify-center'>
                              <div className='card' style={{ minHeightheight: 200, minWidth: 200, backgroundColor: 'white', margin: 20, padding: 10 }}>
                                   <h1 className='pt-5' style={{ fontSize: 20, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }}>Fast Delivery</h1>
                                   <h1 className='tableHeader px-3 pt-8'>
                                        Free Shipping: Enjoy the convenience of free shipping on your favorite merchandise, bringing your beloved items right to your doorstep
                                   </h1>
                              </div>
                              <div className='card' style={{ minHeightheight: 200, minWidth: 200, backgroundColor: 'white', margin: 20, padding: 10 }}>
                                   <h1 className='pt-5' style={{ fontSize: 20, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }}>Multiple Choice</h1>
                                   <h1 className='tableHeader px-3 pt-8'>
                                        Customizable Cloth to Your Size: Tailor your merchandise to your exact size for a personalized and comfortable fit that's uniquely yours
                                   </h1>
                              </div>
                              <div className='card' style={{ minHeightheight: 200, minWidth: 200, backgroundColor: 'white', margin: 20, padding: 10 }}>
                                   <h1 className='pt-5' style={{ fontSize: 20, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }}>100% Cash Bank</h1>
                                   <h1 className='tableHeader px-3 pt-8'>
                                        15 Days Money-Back Guarantee: Shop with confidence! If you're not completely satisfied, we offer a 15-day money-back guarantee for your peace of mind.
                                   </h1>
                              </div>
                              <div className='card' style={{ minHeightheight: 200, minWidth: 200, backgroundColor: 'white', margin: 20, padding: 10 }}>
                                   <h1 className='pt-5' style={{ fontSize: 20, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }}>Quality Product</h1>
                                   <h1 className='tableHeader px-3 pt-8'>
                                        Quality Products: We're committed to providing you with top-notch merchandise, ensuring that you receive products of the highest quality and craftsmanship
                                   </h1>
                              </div>
                         </div>
                         <div className="flex flex-row w-full justify-center">
                              <button className="align-center text-black px-8 py-2 w-full" style={{ fontSize: 30, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }} >
                                   Our Client says
                              </button>
                         </div>
                         <div className='md:flex md:flex-row w-full justify-center'>
                              <div className='card' style={{ minHeight: 200, minWidth: 200, backgroundColor: 'white', margin: 20, padding: 10 }}>
                                   <div className='paddingLeft: 20 flex flex-col justify-center items-center '>
                                        <h1 className='pt-5' style={{ fontSize: 20, fontWeight: 'bold', color: '#071242', }}>Daniel Akele</h1>
                                        <p className=' text-red-500 font-regular '> Fashion Enthusiast</p>
                                   </div>
                                   <h1 className='tableHeader px-3 pt-8'>

                                        "I'm thrilled with Trendy Merches! The fast delivery and the ability to support my favorite influencers are amazing. Plus, the designs are spot on!"
                                   </h1>
                              </div>
                              <div className='card border-b border-black' style={{ minHeight: 200, minWidth: 200, backgroundColor: 'white', margin: 20, padding: 10 }}>
                                   <div className='paddingLeft: 20 flex flex-col justify-center items-center '>
                                        <h1 className='pt-5' style={{ fontSize: 20, fontWeight: 'bold', color: '#071242', }}>Sara mebrat</h1>
                                        <p className=' text-red-500 font-regular '> Fashion Enthusiast</p>
                                   </div>

                                   <h1 className='tableHeader px-3 pt-8'>
                                        "As an influencer myself, I couldn't be happier with Trendy Merches. The product quality is top-notch, and I love the designs. It's a win-win!"
                                   </h1>
                              </div>
                              <div className='card' style={{ minHeight: 200, minWidth: 200, backgroundColor: 'white', margin: 20, padding: 10 }}>
                                   <div className='paddingLeft: 20 flex flex-col justify-center items-center '>
                                        <h1 className='pt-5' style={{ fontSize: 20, fontWeight: 'bold', color: '#071242', }}>Lelisa Mebrat</h1>
                                        <p className=' text-red-500 font-regular '> Music Lover</p>
                                   </div> <h1 className='tableHeader px-3 pt-8'>

                                        "Trendy Merches has been a game-changer for me. I get to support my favorite artists, and the speedy delivery is a pleasant surprise every time!"
                                   </h1>
                              </div>
                              <div className='card' style={{ minHeight: 200, minWidth: 200, backgroundColor: 'white', margin: 20, padding: 10 }}>
                                   <div className='paddingLeft: 20 flex flex-col justify-center items-center '>
                                        <h1 className='pt-5' style={{ fontSize: 20, fontWeight: 'bold', color: '#071242', }}>Meron Lema</h1>
                                        <p className=' text-red-500 font-regular '>Art Admirer</p>
                                   </div>
                                   <h1 className='tableHeader px-3 pt-8'>

                                        "The ability to customize clothing to my size is fantastic! Trendy Merches has made me a devoted fan. The designs are simply irresistible.
                                   </h1>
                              </div>
                         </div>
                    </div>
               </div>
          </Layout>
     )
}
