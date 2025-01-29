
import { client } from "@/sanity/lib/client";
import { log } from "console";
import { url } from "inspector";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import Image from "next/image";
import Hero from "./components/hero/page";

export default async function home() {
  const data = await client.fetch(`*[_type == "product"]{
    productName,
    productPrice,
    "imageUrl": productImage.asset->url,
    _id
    }`);
    
    // console.log(data);
    
    return (
      <div className="flex items-center justify-evenly mt-10">
    
    {data.map((item: any) => {
      return (
        <div key={item._id} className="shadow-lg p-3">
          <Image src={item.imageUrl} alt={item.productName} height={250} width={250} className="max-h-60 object-cover rounded mt-2"/>
          <h1>{item.productName}</h1>
          <p> Rs {item.productPrice}</p>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-md">Add To Cart</button>
        </div>
        );
      })}
   </div>
      
  );
}
