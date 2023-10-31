import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

//state
import useCartStore from "../store/useStore";
import { useLoginModal } from "../store/useStore";
import { useRegisterModal } from "../store/useStore";
import { CookiesProvider } from "react-cookie"

//component
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";
import LoginModal from "./Modal/loginModal";
import RegisterModal from "./Modal/registerModal";

//package
import {
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form";
// import Button from "../../Components/Button";
import { IoMdClose } from "react-icons/io";
import { getCookies, setCookie, getCookie, deleteCookie } from 'cookies-next';

//Assets
import Images from "../Images";

export default function Layout({ children }) {
  const Cookiesdata = getCookie('userInfo');
  // console.log('Cookiesdata ', Cookiesdata);
  const router = useRouter();
  const { cart } = useCartStore();
  const { isOpen, onOpen, onClose } = useLoginModal();
  const { isRegisterOpen, onRegisterOpen, onRegisterClose } = useRegisterModal();
  const [isCategoriyopen, setIsCategoryOpen] = useState(false);
  const [isCustomerCoreopen, setIsCustomerCoreOpen] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isPageopen, setIsPageOpen] = useState(false);
  const handleClose = () => {
    onClose()
  }
  return (
    <>
      <Head>
        <title> Trendy Merches </title>
      </Head>
      <div
        className="flex min-h-screen flex-col justify-between"
        style={{ backgroundColor: "white" }}
      >
        <header>
          <nav className="flex h-11 items-center px-4 justify-between topnav">
            <div className="flex flex-col  md:flex-row sm:flex-row md:mx-10">
              <div className="md:px-5">
                <Link href="/" className="md:px-5">
                  <a className="text-md">trendymerches@gmail.com</a>
                </Link>
              </div>
              <div className="md:px-5">
                <Link href="/" className="px-5">
                  <a className="text-md">(251)11893456</a>
                </Link>
              </div>
            </div>
            {isOpen ? <LoginModal /> : null}
            {isRegisterOpen ? <RegisterModal /> : null}
            <div className="md:flex md:flex-row hidden  md:block ">

              <div>
                <Link href="/cart">
                  <a className="p-2">English</a>
                </Link>
              </div>
              <div>
                <Link href="/login">
                  <a className="p-2">Birr</a>
                </Link>
              </div>
              <div>
                {/* <Link href="/login">
                  <a className="p-2">Login</a>
                </Link> */}
                {Cookiesdata === '' ? <button onClick={() => { onOpen() }}>Login</button> : <button onClick={() => { deleteCookie('userInfo') }} className="text-red-700 font-bold">Logout</button>}
              </div>
              <div>
                {/* <Link href="/cart"> */}
                <a className="p-2">English</a>
                {/* </Link> */}
              </div>
              <div>
                {/* <Link href="/login"> */}
                <a className="p-2">Wishlist</a>
                {/* </Link> */}
              </div>
              <div className="justify-around flex ">
                <a className="mx-5">Cart</a>
                <p>{cart}</p>
              </div>

            </div>
          </nav>
          <nav className="flex h-10 items-center px-10 py-8 justify-between ">
            <div className="flex flex-row justify-around">
              <Link href="/">
                <Image
                  alt={'Trendy Merches Logo'}
                  src={'/images/Trendy Merches.png'}
                  height={20}
                  width={180}

                />
              </Link>

              <div className="px-10 hidden md:block">
                <Link href="/containers/Main/Homepage">
                  <a className="text-md px-6 text-black" style={{ color: router.pathname == "/containers/Main/Homepage" ? "red" : "black" }}>Home</a>
                </Link>

                <Link href="/containers/Main/AllArtistPage">
                  <a className="text-md px-6 text-black" style={{ color: router.pathname == "/containers/Main/AllArtistPage" ? "red" : "black" }} >Product</a>
                </Link>
                {/* <Link href="/">
                  <a className="text-md px-6 text-black" style={{ color: router.pathname == "/containers/Main/Homepage" ? "red" : "black" }}>Blog</a>
                </Link> */}
                <Link href="/Components/Shipping">
                  <a className="text-md px-6 text-black" style={{ color: router.pathname == "/Components/Shipping" ? "red" : "black" }}>Shop</a>
                </Link>
                <Link href="/Components/Contactus">
                  <a className="text-md px-6 text-black" style={{ color: router.pathname == "/Components/Contactus" ? "red" : "black" }}>Contact</a>
                </Link>
                <Link href="../Components/Aboutus">
                  <a className="text-md px-6 text-black" style={{ color: router.pathname == "/Components/Aboutus" ? "red" : "black" }}>About</a>
                </Link>
              </div>
            </div>
            <div className="block md:hidden">
              <Link href="/">
                <button onClick={() => setIsMenuActive(!isMenuActive)} style={{ background: '#FB2E86', borderRadius: 100, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                  <Image src={Images.menu}
                    alt="Menu Icon"
                    height={30}
                    width={30}
                    objectFit="contain"
                  />
                </button>
              </Link>
            </div>


            <div className="border hidden lg:block">
              <input placeholder="Search your Favourite" />
              <Link href="/cart">
                <a className="py-2.5 px-2" style={{ backgroundColor: "red" }}>
                  Search
                </a>
              </Link>
            </div>
          </nav>
        </header>

        <main>

          {isMenuActive ? <div style={{ minHeight: 200, background: '#F6F6F6', marginTop: 20 }} className="block md:hidden">
            <div className="flex flex-col md:flex-row">

              <div className="hover:bg-sky-700 my-5 w-full">
                <Link href="/cart">
                  <a className="p-2 text-black font-bold my-3 hover:bg-red-500 hover:text-white">English</a>
                </Link>
              </div>
              <div className="my-5">
                <Link href="/login">
                  <a className="p-2 text-black font-bold my-3">Birr</a>
                </Link>
              </div>
              <div className="my-5">
                <Link href="/login">
                  <a className="p-2 text-black font-bold my-3">Login</a>
                </Link>
                {/* <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
                  Save changes
                </button> */}
              </div>
              <div className="my-5">
                {/* <Link href="/cart"> */}
                <a className="p-2 text-black font-bold my-3">English</a>
                {/* </Link> */}
              </div>
              <div className="my-5">
                {/* <Link href="/login"> */}
                <a className="p-2 text-black font-bold my-3">Wishlist</a>
                {/* </Link> */}
              </div>
              <div className="flex flex-row">
                <a className="mx-2  text-black font-bold">Cart</a>
                <p className="text-black font-bold">{cart}</p>
              </div>

            </div>
          </div> : null}
          <CookiesProvider>
            {children}
          </CookiesProvider>
        </main>

        <footer className="flex  w-full  shadow-inner mt-10 ">
          <div className="footer w-full md:flex flex-row justify-around p-5">
            <div>
              <h1 className="text-black font-bold" style={{ fontSize: 25 }}>
                Trendy
              </h1>
              <h1 className="font-bold" style={{ color: "red", fontSize: 25 }}>
                {" "}
                Merches
              </h1>
              <div className="mt-5 mb-5 md:flex flex-row">
                <div className="mb-5 md:mt-0"><input placeholder="Enter Email Address" /></div>
                <Link href="/">
                  <a
                    className="py-2 px-10"
                    style={{ backgroundColor: "rgb(247, 33, 61)" }}
                  >
                    Sign up
                  </a>
                </Link>
              </div>
              <h1 className="text-black   font-color">Contact Info</h1>
              <h1 className="text-black  font-color">Somewhere in addis</h1>
              <h1 className="text-black  font-color">0923459821</h1>
              <h1 className="text-black  font-color">info@trendymerches.com</h1>
            </div>
            <div>
              <div className="flex flex-row">
                <h1 className="text-black my-5 font-bold">Category</h1>
                <button onClick={() => { setIsCategoryOpen(!isCategoriyopen) }} className="block mx-5 block md:hidden mt-3 ">
                  <Image
                    alt="DropDown icon"
                    src={isCategoriyopen ? Images.dorpDown : Images.uparrow}
                    height={30}
                    width={20}
                    // layout="fill"
                    objectFit="contain"


                  />
                </button>
              </div>
              {<div>
                <h1 className="text-black  font-color">hoody</h1>
                <h1 className="text-black  font-color">Tshirt</h1>
                <h1 className="text-black  font-color">long sleeve shirt</h1>
                <h1 className="text-black  font-color">popular</h1>
                <h1 className="text-black  font-color">limited edition</h1>
              </div>}
            </div>
            <div>
              <h1 className="text-black my-5 font-bold">Customer core</h1>

              <div>
                <h1 className="text-black  font-color">MyAccount</h1>
                <h1 className="text-black  font-color">Discount</h1>
                <h1 className="text-black  font-color">Returns</h1>
                <h1 className="text-black  font-color">order history</h1>
                <h1 className="text-black  font-color">order travel</h1>
              </div>
            </div>
            <div>
              <h1 className="text-black my-5 font-bold">Page</h1>

              <div>
                <h1 className="text-black  font-color">Blog</h1>
                <h1 className="text-black  font-color">Browse the Shop</h1>
                <h1 className="text-black  font-color">Category</h1>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
