import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="space-y-1">
        <div className="border-[1px]">
          <label htmlFor="email"></label>
          <input
            placeholder="Email Address"
            id="email"
            type="email"
            className="outline-0 w-full"
            {...register("email-address", { required: true })}
          />
        </div>
        <div className="border-[1px]">
          <label htmlFor="password"></label>
          <input
            placeholder="Password"
            className="outline-0 w-full"
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
      </div>

      <button className="bg-orange-400 w-full text-white font-bold">
        Login
      </button>
    </form>
  );
}
