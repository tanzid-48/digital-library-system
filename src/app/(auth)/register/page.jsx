"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Eye, EyeSlash } from "@gravity-ui/icons";

const RegisterPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      image: data.photo,
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Register Successfully Done!");
    reset();
    router.push("/login");
  };

  return (
    <div className="">
      <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 py-10">
        <div className="p-4 rounded-xl bg-white">
          <h2 className="font-medium text-3xl text-center mb-6">
            Register your account
          </h2>
          <div className="my-4 border-t border-gray-300"></div>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="fieldset p-4"
          >
            <fieldset className="fieldset">
              <label className="label text-sm font-medium text-black">
                Your Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="input validator"
                placeholder="Enter your name"
                required
              />
              <p className="validator-hint hidden">Required</p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-sm font-medium text-black">
                Photo URL
              </label>
              <input
                {...register("photo")}
                type="text"
                className="input validator"
                placeholder="Enter your photo URL"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-sm font-medium text-black">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                className="input validator"
                placeholder="Enter your email address"
                required
              />
              <p className="validator-hint hidden">Required</p>
            </fieldset>
            <label className="fieldset">
              <span className="label text-sm font-medium text-black">
                Password
              </span>

              <div className="input validator flex items-center w-full gap-2">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must contain at least one uppercase letter",
                      hasNumber: (value) =>
                        /[0-9]/.test(value) ||
                        "Password must contain at least one number",
                    },
                  })}
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  className="flex-1 bg-transparent outline-none border-none shadow-none"
                />

                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {isVisible ? (
                    <EyeSlash className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters with 1 uppercase and 1 number
              </p>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </label>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-sm text-slate-500">Accept Term & Conditions</p>
            </div>

            <button
              className="btn bg-black/50 p-2 rounded-2xl text-center text-white mt-4 mb-2"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
