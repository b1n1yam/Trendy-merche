import React from 'react'
import Layout from './Layout'

export default function Contactus() {
  return (
    <Layout>
      <div>
        <div className='contactHeader' style={{ height: 150 }}>
          <h1 className='text-black p-10' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242' }}>Contact Us</h1>
        </div>
        <div className='flex flex-row'>
          <div className='w-full m-5' style={{}}>
            <div>
              <h1 className='text-black p-5 size-20' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242' }}>Information About us</h1>
              <p className='text-black p-5'>Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum
                We bring customers to our client using SOCIAL MEDIA MARKETING.
                If you want to succeed in the world of branding, you need to stand out and know how to advertise your brand to the right audience on social media
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
                <p className='text-black p-5'>Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum
                  Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum
                </p>
                <div>
                  <input className='border mx-5 ' placeholder='Your Name ' />
                  <input className='border mx-5' placeholder='Your Email ' />
                </div>
                <div>
                  <input className='border mx-5 w-full my-5' placeholder='Subject*' />
                </div>
                <div>
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
            <div className='flex flex-row w-full'>
              <div className='flex flex-row m-3'>
                <div><h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'blue', height: 10, widows: 10 }}></h1></div>
                <div>
                  <h1 className='text-black'>Tel : 877-67-98-78</h1>
                  <h1 className='text-black'>Email : someone@store.com</h1>
                </div>
              </div>
              <div className='flex flex-row m-3'>
                <div><h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'purple', height: 10, widows: 10 }}></h1></div>
                <div>
                  <h1 className='text-black'>Tel : 877-67-98-78</h1>
                  <h1 className='text-black'>Email : someone@store.com</h1>
                </div>
              </div>
            </div>
            <div className='flex flex-row w-full mt-7'>
              <div className='flex flex-row m-3'>
                <div><h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'orange', }}></h1></div>
                <div>
                  <h1 className='text-black'>Address</h1>
                  <h1 className='text-black'>Email : someone@store.com</h1>
                </div>
              </div>
              <div className='flex flex-row m-3'>
                <div><h1 className='rounded-xl p-3 m-3' style={{ backgroundColor: 'green', height: 10, widows: 10 }}></h1></div>
                <div>
                  <h1 className='text-black'>Free standard shipping</h1>
                  <h1 className='text-black'>Email : someone@store.com</h1>
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
