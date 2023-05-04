import React from 'react'
import Layout from './Layout'

export default function Contactus() {
  return (
    <Layout>
      <div className='w-full'>
        <div className='contactHeader' style={{height:150}}>
        <h1 className='text-black p-10 mx-20' style={{fontSize:30,fontWeight:'bold',color:'#071242',paddingLeft:20}}>Order Completed</h1>
        </div>
        <div className="flex flex-row p-2 w-full" style={{height:150}}>
          <button className="align-center text-black px-8 py-2 w-full">
                Your Order is Completed
              </button>
        </div> 
      </div>
    </Layout>
  )
}
