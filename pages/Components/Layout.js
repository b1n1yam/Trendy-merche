import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const router = useRouter();
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
            <div className="justify-around flex flx-row mx-10">
              <div className="px-5">
                <Link href="/" className="px-5">
                  <a className="text-md">trendymerches@gmail.com</a>
                </Link>
              </div>
              <div className="px-5">
                <Link href="/" className="px-5">
                  <a className="text-md">(251)11893456</a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Link href="/cart">
                <a className="p-2">English</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Birr</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Wishlist</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Cart</a>
              </Link>
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
        <main className="">{children}</main>
        <footer className="flex  w-full  shadow-inner mt-10 ">
          <div className="footer w-full flex flex-row justify-around p-5">
            <div>
              <h1 className="text-black font-bold" style={{ fontSize: 25 }}>
                Trendy
              </h1>
              <h1 className="font-bold" style={{ color: "red", fontSize: 25 }}>
                {" "}
                Merches
              </h1>
              <div className="mt-5 mb-5">
                <input placeholder="Enter Email Address" />
                <Link href="/cart">
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
              <h1 className="text-black my-5 font-bold">Category</h1>
              <div>
                <h1 className="text-black  font-color">hoody</h1>
                <h1 className="text-black  font-color">Tshirt</h1>
                <h1 className="text-black  font-color">long sleeve shirt</h1>
                <h1 className="text-black  font-color">popular</h1>
                <h1 className="text-black  font-color">limited edition</h1>
              </div>
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
