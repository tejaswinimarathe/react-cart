import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL="https://fakestoreapi.com/products"
   const [loading,setLoading]=useState(false);
   const [posts,setPosts]=useState([]);
async function fetProductData() {
    setLoading(true);
    try{
        const res=await fetch(API_URL);
        const data=await res.json();

        setPosts(data);


    }catch(err){
        console.log(err);
        setPosts([]);
    }
    setLoading(false)
    
}

useEffect(()=>{
    fetProductData();
},[])

  return (
    <div className='container'>
      {
        loading ? <Spinner/> :
        posts.length>0 ? 
        (<div className='row'>
           {posts.map((post) => (
        <div className=" d-flex justify-center justify-content-center mb-2 col-12 col-sm-12 col-md-4 col-lg-4 " key={post.id}>
          <Product post={post} />
        </div>
      ))}
        </div>) :
        <div>No post available</div>
      }
    </div>
  )
}

export default Home
