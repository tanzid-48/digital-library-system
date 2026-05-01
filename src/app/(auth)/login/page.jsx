"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";

const LogInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Login Successfully!");
    reset();
    router.push("/");
  };

    const handleLoginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="">
      <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 py-10">
        <div className="p-4 rounded-xl bg-white">
          <h2 className="font-medium text-3xl text-center mb-6">
            Login your account
          </h2>
          <div className="my-4 border-t border-gray-300"></div>
          <form onSubmit={handleSubmit(handleLogin)} className="fieldset p-4">
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

              <div className="relative">
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
                  className="input validator w-full pr-10"
                />
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
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

            <button
              className="btn bg-black/50 rounded-2xl text-white mt-4 mb-2"
              type="submit"
            >
              Login
            </button>
            <div className="flex items-center gap-2 my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-xs text-gray-400">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <button
             onClick={handleLoginWithGoogle}
              type="button"
              className="btn btn-outline rounded-2xl w-full flex items-center justify-center gap-2"
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
                width={20}
                height={20}
              />
              Continue with Google
            </button>
          </form>
          <span className="m-5">
            Do not Have An Account?{" "}
            <Link href="/register" className="text-purple-500">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
