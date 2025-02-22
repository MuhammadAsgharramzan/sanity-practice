import { client } from "@/sanity/lib/client";
import { log } from "console";
import { url } from "inspector";
import { ClientPageRoot } from "next/dist/client/components/client-page";
// import SearchBar from "@/components/searchbar";
import Image from "next/image";





export default async function AllProducts() {
    const data = await client.fetch(`*[_type == "product"]{
        productName,
        productPrice,
        "imageUrl": productImage.asset->url,
        _id
        }`);
    
        // const [searchQuery, setSearchQuery] = useState("");
        // const filteredData = data.filter((item: any) =>
        //   item.productName.toLowerCase().includes(searchQuery.toLowerCase())
        // );
    
      // console.log(data);
    
      return (
        <div className="flex items-center justify-evenly mt-10">
          {/* <SearchBar />; */}
          {data.map((item: any) => {
            return (
              <div key={item._id} className="shadow-lg p-3">
                <Image
                  src={item.imageUrl}
                  alt={item.productName}
                  height={250}
                  width={250}
                  className="max-h-60 object-cover rounded mt-2"
                />
                <h1>{item.productName}</h1>
                <p> Rs {item.productPrice}</p>
                <button className="bg-yellow-400 text-black py-2 px-4 rounded-md">
                  Add To Cart
                </button>
              </div>
            );
          })}
          </div> );}