import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";



const Contact = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="contact bg-gray-50 py-16 ">
      <div className="container mx-auto px-4">
        <div className="md:grid grid-cols-2">

          <div className="contact-form rounded border-lg">
            <h1 className="text-4xl font-mono font-semibold">Contact US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eius.</p>

            <form onSubmit={handleSubmit(onSubmit)}>

              <label htmlFor="name">Name*</label>
              <input type="text" placeholder="Enter Your Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: 'Name is Required'
                  }
                })}
              />
              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>

              <label htmlFor="email">Email*</label>
              <input
                type="email"
                placeholder="Your Email"
                // className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is Required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>


              <label htmlFor="message">Message*</label>
              <textarea type="text"  placeholder="Write Your Message" cols="65" rows="2" 
              {
                ...register("message", {
                  required:{
                    value: true,
                    message : "Please Write here"
                  }
                })
              }
              ></textarea>
              <label className="label">
                {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
              </label>


              <input type="submit" value="SEND" />
            </form>
          </div>

          <div className="contact-info rounded border-lg"></div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
