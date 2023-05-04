import React, { Fragment } from "react"
import Link from "next/link";
function seller(){
    return(
     
        <Fragment>
            <h3>Welcome To seller pages Thank You for you choose me</h3>
            <ul>
                <li>
                     <Link href="/Seller/paziyon">Next js</Link>
                </li>
                <li>
                     <p>React Native</p>
                </li>
                <li>
                     <p>Android Studio</p>
                </li>
                <li>
                     <p>Zeragw Internet and Cloud Service Provider</p>
                </li>
                <li>
                     <p>Ezezu Food And Electronics Delivery</p>
                </li>
            </ul>
   </Fragment>
    );
}
export default seller;