import React from 'react'
import Layout from './Layout'

export default function Contactus() {
  return (
    <Layout>
      <div>
        <div className='contactHeader' style={{height:150}}>
        <h1 className='text-black p-10 mx-20' style={{fontSize:30,fontWeight:'bold',color:'#071242',paddingLeft:20}}>About Us</h1>
        </div>
        <div style={{alignItems:'center'}} className="flex flex-row w-full justify-center">
         <h1 className='tableHeader'>Image Part</h1>
        </div> 
        <div>
       <div className="flex flex-row w-full justify-center">
          <button className="align-center text-black px-8 py-2 w-full" style={{fontSize:30,fontWeight:'bold',color:'#071242',paddingLeft:20}} >
                Our Feature
              </button>
        </div> 
            <div className='flex flex-row w-full justify-center'>
               <div className='card' style={{height:200,width:200,backgroundColor:'white',margin:20}}>
                    <h1 className='pt-5' style={{fontSize:20,fontWeight:'bold',color:'#071242',paddingLeft:20}}>Fast Delivery</h1>
                    <h1 className='tableHeader px-3 pt-8'>
                     Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum    
                    </h1>      
               </div>
               <div className='card' style={{height:200,width:200,backgroundColor:'white',margin:20}}>
                    <h1 className='pt-5' style={{fontSize:20,fontWeight:'bold',color:'#071242',paddingLeft:20}}>Multiple Choice</h1>
                    <h1 className='tableHeader px-3 pt-8'>
                     Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum    
                    </h1>      
               </div>
               <div className='card' style={{height:200,width:200,backgroundColor:'white',margin:20}}>
                    <h1 className='pt-5' style={{fontSize:20,fontWeight:'bold',color:'#071242',paddingLeft:20}}>100% Cash Bank</h1>
                    <h1 className='tableHeader px-3 pt-8'>
                     Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum    
                    </h1>      
               </div>
               <div className='card' style={{height:200,width:200,backgroundColor:'white',margin:20}}>
                    <h1 className='pt-5' style={{fontSize:20,fontWeight:'bold',color:'#071242',paddingLeft:20}}>Quality Product</h1>
                    <h1 className='tableHeader px-3 pt-8'>
                     Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum    
                    </h1>      
               </div>
            </div>
            <div className="flex flex-row w-full justify-center">
          <button className="align-center text-black px-8 py-2 w-full" style={{fontSize:30,fontWeight:'bold',color:'#071242',paddingLeft:20}} >
                Our Client says
              </button>
        </div>
        <div className='flex flex-row w-full justify-center'>
               <div className='card' style={{height:200,width:200,backgroundColor:'white',margin:20}}>
                    <h1 className='pt-5' style={{fontSize:20,fontWeight:'bold',color:'#071242',paddingLeft:20}}>Loreum Ipsum</h1>
                    <h1 className='tableHeader px-3 pt-8'>
                     Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum    
                    </h1>      
               </div>
               <div className='card border-b border-black' style={{height:200,width:200,backgroundColor:'white',margin:20}}>
                    <h1 className='pt-5' style={{fontSize:20,fontWeight:'bold',color:'#071242',paddingLeft:20}}>Loreum Ipsum</h1>
                    <h1 className='tableHeader px-3 pt-8'>
                     Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum    
                    </h1>      
               </div>
               <div className='card' style={{height:200,width:200,backgroundColor:'white',margin:20}}>
                    <h1 className='pt-5' style={{fontSize:20,fontWeight:'bold',color:'#071242',paddingLeft:20}}>Loreum Ipsum</h1>
                    <h1 className='tableHeader px-3 pt-8'>
                     Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum    
                    </h1>      
               </div>
               <div className='card' style={{height:200,width:200,backgroundColor:'white',margin:20}}>
                    <h1 className='pt-5' style={{fontSize:20,fontWeight:'bold',color:'#071242',paddingLeft:20}}>Loreum Ipsum</h1>
                    <h1 className='tableHeader px-3 pt-8'>
                     Loreum Ipsum Loreum Ipsum Loreum Ipsum Loreum Ipsum    
                    </h1>      
               </div>
            </div> 
        </div>
      </div>
    </Layout>
  )
}
