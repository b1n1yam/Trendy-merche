import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Contactus() {
  return (
    <Layout>
      <div className='w-full'>
        <div className='contactHeader' style={{}}>
          <h1 className='text-black p-10 mx-20' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }}>Order Completed</h1>
        </div>
        <div className=' flex justify-center  items-center'>
          <Image
            alt='Success Icon'
            src={'/images/success.png'}
            height={80}
            width={80}
          />
        </div>
        <div className="flex flex-col align-center p-2 w-full" style={{ height: 150 }}>

          <button className="align-center text-black px-8 py-2 w-full font-bold" style={{ color: '#101750', fontSize: 20 }}>
            Your Order is Completed
          </button>
          <div class="flex items-center justify-center mb-10" style={{ color: '#101750', fontSize: 20 }}>
            <p className='font-regular text-black  p-10 text-center' style={{ width: 800, borderRadius: 10, borderWidth: 0.5 }}> Thank you for your order! Your order is being processed and will be completed within 3-6
              days. You will receive an email confirmation when your order is completed.</p>
          </div>
        </div>
        <Link href={'/containers/Main/Homepage'}><div class=" flex items-center justify-center mt-50" style={{ marginTop: 100 }}>
          <button className='font-bold bg-red-500 text-white font-bold p-5 text-center' style={{ width: 300, borderRadius: 10 }}>Continue Shopping</button>
        </div>
        </Link>
      </div>
    </Layout>
  )
}
