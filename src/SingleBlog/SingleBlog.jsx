import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleBlog from '../Pages/Hooks/useSingleBlog';
import './SingleBlog.css'

const SingleBlog = () => {
    const {id} = useParams();
    const [singleBlog] = useSingleBlog(id);
  return (
    <div className='py-12 bg-gray-50'>
        <div className='container mx-auto px-4'>
        <div className="section-title">
            <h2>Blog Post</h2>
        </div>
        <div className="md:grid grid-cols-1">

        <h2>{singleBlog?.name}</h2>
        <li className='list-none'>
            <span>{singleBlog?.date}</span>
            <span>by {singleBlog?.publisher}</span>
            <span>by {singleBlog?.comments?.length} comments</span>
        </li>

            <img className='rounded' src={singleBlog?.image} alt="blog__img" />

            <p>{singleBlog?.description}</p>
        </div>
        </div>
    </div>
  )
}

export default SingleBlog