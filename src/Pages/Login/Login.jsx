import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faTwitter  } from "@fortawesome/free-brands-svg-icons";
import auth from "../../Firebase/firebase.init";
import Register from "../Shared/Register/Register";

const Login = () => {
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="md:grid grid-cols-2 gap-8 gy-4">

          <div className="left-col border rounded-lg">
            <div className="login-form">
              <h1 className="text-2xl form-title ml-14 my-3">Login form</h1>
              <p className="form-sub-title mb-3 ml-14">
                Already have an account? Please Login!
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email" className=" my-0 py-0">Email</label>
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

                <label htmlFor="password" className=" my-0 py-0">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: 'Password is Required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer'
                    }
                  })} />
                <label className="label my-0 py-0">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>

                <input type="submit" value="LOGIN" />

                <label className="label my-0 py-0">
                  <span className="label-text-alt">
                    <div className="form-control my-0 py-0">
                      <label className="cursor-pointer label my-0 py-0">
                        <input type="checkbox" className="checkbox mr-6 my-0 py-0" />

                        <span className="label-text my-0 py-0">Remember me</span>
                      </label>
                    </div>
                  </span>
                  <span className="label-text-alt">
                    <p className="text-red-500">Forgot Password?</p>
                  </span>
                </label>

                <div className="bottom-social-login flex justify-center items-center mt-10">
                  <div className="label-text">
                  <h1 className="text-2xl font-semibold">Login With:
                  <span>
                  <FontAwesomeIcon className="hover:text-red-600 text-xl ml-5 mr-5" icon={faFacebookF}/>
                  <FontAwesomeIcon className="hover:text-red-600 text-xl mr-5" icon={faGoogle}/>
                  <FontAwesomeIcon className="hover:text-red-600 text-xl " icon={faTwitter}/>
                  </span>
                  </h1>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="right-col">

            <Register/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
