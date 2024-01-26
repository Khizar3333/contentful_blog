import Image from 'next/image'
import Fetchproducts from './components/Fetchproducts'
import Login from './components/Login';
// import React from 'react';
import client from './lib/contentful';

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }
   








  const getproducts=async() => {
    const products=await client.getEntries({content_type:"products"})
    // console.log(products.items[0].fields)
    const data= products.items.map((item)=>{
      return{
        title:item.fields.title,
        description:item.fields.description,
      }
  })
   return data 
  }

export default async function Home () {
  const data=await getproducts()
    return(
      <>
      <Login/>

    
      <div>
        {data.map((product) => (
          <div key={product.title}>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    
</>
    )
};

  
// }
