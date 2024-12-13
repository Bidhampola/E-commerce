import React, { useEffect, useState } from 'react'

export default function Product() {
    const [loading,setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const url = 'https://fakestoreapi.com/products'

    useEffect(()=>{
        fetch(url).then((res) => res.json())
        .then((data) => setProducts(data)
        )
        setLoading(false)
    })
  return (
    <>
        {loading ? 'Loading' : 
        <div className='flex flex-wrap justify-center'>
           {products.map((product,index)=>{
            return(
                <div key={product.id} className='border border-gray-200 rounded-lg m-2 shadow-lg text-center p-5'>
                    <h3 className='text-center mt-5'><b>{(product.title.length > 30) ? product.title.slice(0,30) : product.title}</b></h3>
                        <img src={product.image} alt="product-image" className='w-full h-48 object-cover'/>
                    <p className='text-center text-red-700 mt-5'><b>Price: ${product.price}</b></p>
                    <button className='bg-red-500 text-white border-gray-500 p-1'>Add to Cart</button>

                </div>
            )
           })}
        </div>
        }
    </>
  )
}
