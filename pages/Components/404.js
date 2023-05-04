import React from 'react'
import Layout from './Layout'

export default function Contactus() {
  return (
    <Layout>
      <div>
        <div className='contactHeader' style={{height:150}}>
        <h1 className='text-black p-10 mx-20' style={{fontSize:30,fontWeight:'bold',color:'#071242',paddingLeft:20}}>404 Not Found</h1>
        </div>
        <div className="flex flex-row w-full justify-center">
        <img
          src='/images/notFound.jpg'
          alt="Not Found Image"
          className="rounded shadow items-center"
          style={{margin:10,width:'50%'}}
        />
        </div> 
      </div>
    </Layout>
  )
}
