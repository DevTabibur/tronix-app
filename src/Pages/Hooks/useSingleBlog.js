import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const useSingleBlog = (id) => {
    const [singleBlog, setSingleBlog] = useState({});

    console.log('useSingle', id);
    useEffect(()=>{
        const url = `http://localhost:5000/blogs/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setSingleBlog(data))
    }, [])
  return [singleBlog, setSingleBlog]
}

export default useSingleBlog