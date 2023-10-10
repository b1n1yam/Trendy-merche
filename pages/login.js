import React from 'react'
import Layout from './Components/Layout'
import Link from 'next/link'

export default function LoginScreen() {
  return (
    <Layout>
      <div className='contactHeader' style={{ height: 150, marginBottom: 10 }}>
        <h1 className='text-black p-10 mx-20' style={{ fontSize: 30, fontWeight: 'bold', color: '#071242', paddingLeft: 20 }}>My Account</h1>
      </div>
      <form className="m-auto max-w-screen-sm p-10" style={{ backgroundColor: 'whitesmoke', alignItems: 'center' }}>
        <h1 className='mb-4 text-xl text-center text-black font-bold'>Login</h1>
        <div className="mb-4 mx-10 flex flex-col">
          <label htmlFor='email' className='text-black my-3'>Email</label>
          <input type="email" className="input w-full" id="email" autoFocus>
          </input>
        </div>
        <div className="mb-4 mx-10">
          <label htmlFor='password' className='text-black my-3'>Password</label>
          <input type="password" className="input w-full" id="password" autoFocus>
          </input>
        </div>
        <div className="">
          <Link href={'/containers/Main/Homepage'}><h3 className='Signin text-center'>Sign In</h3></Link>
        </div>
      </form>
    </Layout>
  )
}
