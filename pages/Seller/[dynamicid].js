import { useRouter } from "next/router";
import React from "react"
function DetailPage(){
    const router= useRouter();
    console.log(router.query.dynamicid)
    return(
        <div>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>

             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>

             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
             <h3>Welcome To {router.query.dynamicid} pages More Thank You for you choose me</h3>
        </div>
  
    );
}

export default DetailPage;
