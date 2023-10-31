
'use server'
import Head from "next/head";
// import { useCookies } from "react-cookie"
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./Components/Layout";
import Productitem from "./Components/Productitem";
import data from "./utils/data";
import Homepage from "./containers/Main/Homepage";
import { setCookie } from 'cookies-next';

// export const getServerSideProps = ({ req, res }) => {
//   setCookie('username', 'Esubalew Bitew Abebe Melese', { req, res, maxAge: 60 * 6 * 24 });
//   // getCookie('test', { req, res });
//   // getCookies({ req, res });
//   // deleteCookie('test', { req, res });

//   return { props: {} };
// };
export default function Home() {

  setCookie('usernames', 'Esubalew Bitew Abebe Melese', {
    path: "/",
    maxAge: 300000000, // Expires after 1hr
    sameSite: true,
  });
  // const [cookie, setCookie] = useCookies(["user"])
  // setCookie("user", 'Esubalew Bitew', {
  //   path: "/",
  //   maxAge: 300000000, // Expires after 1hr
  //   sameSite: true,
  // })
  // const handleSignIn = async () => {
  //   try {
  //   const response = await yourLoginFunction(username) //handle API call to sign in here.
  //   const data = response.data
  //   setCookie("user", JSON.stringify(data), {
  //   path: "/",
  //   maxAge: 3600, // Expires after 1hr
  //   sameSite: true,
  //   })
  //   } catch (err) {
  //   console.log(err)
  //   }
  //   }
  return (
    <div>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product)=>(
        <Productitem product={product} key={product.slug} ></Productitem>
      ))}</div> */}
      <Homepage />
    </div>
  );
}
