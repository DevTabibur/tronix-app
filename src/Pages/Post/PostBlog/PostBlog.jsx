import React from 'react';
import './PostBlog.css';
import { useForm } from "react-hook-form";


const PostBlog = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <>
            <div className='container mx-auto px-4'>
                <div className="section-title">
                    <h2>Post Blog</h2>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda mollitia praesentium excepturi iure neque earum? Corrupti, molestias dolorum.</p>
                </div>

                <div className="post-form bg-red-200 py-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name" className=" my-0 py-0">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            // className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label my-0 py-0">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>

                        <label htmlFor="category" className=" my-0 py-0">Category</label>
                        <input
                            type="text"
                            placeholder="Enter Category"
                            {...register("category", {
                                required: {
                                    value: true,
                                    message: 'Category is Required'
                                }
                            })} />
                        <label className="label my-0 py-0">
                            {errors.category?.type === 'required' && <span className="label-text-alt text-red-500">{errors.category.message}</span>}
                        </label>

                        <label htmlFor="category" className=" my-0 py-0">Upload Images</label>
                        <input
                            type="file"
                            // placeholder="Enter Category"
                            {...register("upload", {
                                required: {
                                    value: true,
                                    message: 'Upload is Required'
                                }
                            })} />
                        <label className="label my-0 py-0">
                            {errors.upload?.type === 'required' && <span className="label-text-alt text-red-500">{errors.upload.message}</span>}
                        </label>

                        <label htmlFor="blog" className=" my-0 py-0">Write Blog</label>
                        <textarea
                            // type="text"
                            placeholder="Write Blog"
                            {...register("blogMessage", {
                                required: {
                                    value: true,
                                    message: 'Blog is Required'
                                }
                            })} />
                        <label className="label my-0 py-0">
                            {errors.blogMessage?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogMessage.message}</span>}
                        </label>

                        <input type="submit" value="POST BLOG" />

                        {/* <div className="bottom-social-login flex justify-center items-center mt-10">
                  <div className="label-text">
                  <h1 className="text-2xl font-semibold">Login With:
                  <span>
                  <FontAwesomeIcon className="hover:text-red-600 text-xl ml-5 mr-5" icon={faFacebookF}/>
                  <FontAwesomeIcon className="hover:text-red-600 text-xl mr-5" icon={faGoogle}/>
                  <FontAwesomeIcon className="hover:text-red-600 text-xl " icon={faTwitter}/>
                  </span>
                  </h1>
                  </div>
                </div> */}





                    </form>
                </div>

            </div>
        </>
    )
}

export default PostBlog