import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./Components/Layout";
import Productitem from "./Components/Productitem";
import data from "./utils/data";
import Homepage from "./containers/Main/Homepage";

export default function Home() {
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
