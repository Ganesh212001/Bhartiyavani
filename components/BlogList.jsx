import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs)
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>setMenu("All")} className={menu === "All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={()=>setMenu("Technology")} className={menu === "Technology"?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
        <button onClick={()=>setMenu("Startup")} className={menu === "Startup"?'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
        <button onClick={()=>setMenu("Lifestyle")} className={menu === "Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        <button onClick={()=>setMenu("Fasion")} className={menu === "Fasion"?'bg-black text-white py-1 px-4 rounded-sm':""}>Fasion</button>
        <button onClick={()=>setMenu("Coding")} className={menu === "Coding"?'bg-black text-white py-1 px-4 rounded-sm':""}>Coding</button>
        <button onClick={()=>setMenu("History")} className={menu === "History"?'bg-black text-white py-1 px-4 rounded-sm':""}>History</button>
        <button onClick={()=>setMenu("Sports")} className={menu === "Sports"?'bg-black text-white py-1 px-4 rounded-sm':""}>Sports</button>
        <button onClick={()=>setMenu("Esports")} className={menu === "Esports"?'bg-black text-white py-1 px-4 rounded-sm':""}>Esports</button>
        <button onClick={()=>setMenu("Social Media")} className={menu === "Social Media"?'bg-black text-white py-1 px-4 rounded-sm':""}>Social Media</button>
        <button onClick={()=>setMenu("Health Care")} className={menu === "Health Care"?'bg-black text-white py-1 px-4 rounded-sm':""}>Health Care</button>
        <button onClick={()=>setMenu("Other")} className={menu === "Other"?'bg-black text-white py-1 px-4 rounded-sm':""}>Other</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs.filter((item)=> menu==='All'?true:item.category===menu).map((item,index)=>{
            return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
        })}
      </div>
    </div>
  )
}

export default BlogList
