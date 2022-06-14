import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="left-col border rounded-lg">
            <div className="login-form">
              <h1 className="text-2xl form-title">Login form</h1>
              <p className="form-sub-title">
                Already have an account? Please Login!
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input {...register("email", { required: true })} />
                <p className="text-red-900 font-semibold font-mono">{errors.email?.type === "required" && "⚠ Email is required"}</p>

                <label htmlFor="email">Password</label>
                <input {...register("password", { required: true })} />
                <p className="text-red-900 font-semibold font-mono">
                  {errors.password?.type === "required" &&
                    "⚠ Password is required"}
                </p>

                <input type="submit" value="LOGIN" />
              </form>
            </div>
          </div>

          <div className="right-col">
            <div className="register-form">
              <h1>Register form</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
