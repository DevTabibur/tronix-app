import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";



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
        <div className="md:grid grid-cols-2 gap-4">

          <div className="contact-form border rounded-lg ">
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
              <label className="label my-0 py-0">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>

              <label htmlFor="email" className=" my-0 py-0">Email*</label>
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
              <label className="label my-0 py-0">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>


              <label htmlFor="message" className=" my-0 py-0">Message*</label>
              <textarea type="text" placeholder="Write Your Message" cols="65" rows="2"
                {
                ...register("message", {
                  required: {
                    value: true,
                    message: "Please Write here"
                  }
                })
                }
              ></textarea>
              <label className="label my-0 py-0">
                {errors.message?.type === 'required' && <span className="label-text-alt text-red-500">{errors.message.message}</span>}
              </label>


              <input type="submit" value="SEND" />
            </form>
          </div>

<div className="flex justify-center items-center">
          <div className="contact-info  border rounded-lg bg-red-500 p-10 pt-5">
            <h2 className="text-white text-3xl font-mono font-semibold my-3">Contact</h2>

            <div className="info-icon flex text-white my-4 text-left">

              <div className="icon mr-5">
                <FontAwesomeIcon className="text-xl text-white" icon={faLocationDot} />
              </div>
              <div className="info">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, maxime.</p>
              </div>

            </div>
            <div className="info-icon flex text-white  my-4 text-left">

              <div className="icon mr-5">
                <FontAwesomeIcon className="text-xl text-white" icon={faPhone} />
              </div>
              <div className="info">
                <p>(+880) 1307 -588223</p>
              </div>

            </div>
            <div className="info-icon flex text-white  my-4 text-left">

              <div className="icon mr-5">
                <FontAwesomeIcon className="text-xl text-white" icon={faEnvelope} />
              </div>
              <div className="info">
                <p>tobiburrohman2@gmail.com</p>
              </div>

            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
