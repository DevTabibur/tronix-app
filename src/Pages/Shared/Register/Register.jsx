import React from 'react'
import { useForm } from 'react-hook-form';

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      
      const onSubmit = (data) => console.log(data);
  return (
    <div className="register-form">
              <div className="left-col border rounded-lg">
                <div className="login-form">
                  <h1 className="text-2xl form-title ml-14 my-3">Register form</h1>
                  <p className="form-sub-title mb-3 ml-14">
                    Are you new here? Please Register!
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

                    <label htmlFor="confirm password" className=" my-0 py-0">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
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

                    <input type="submit" value="REGISTER" />

                  </form>
                </div>
              </div>

            </div>
  )
}

export default Register