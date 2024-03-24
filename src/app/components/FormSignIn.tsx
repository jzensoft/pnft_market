"use client";
import Image from "next/image";
import React, { FormEvent } from "react";
import { isEmail } from "../core/utils/utils";
import Logo from "./Logo";

interface Props {
  onSubmit(email: string, password: string): void;
}

function FormSignIn(props: Props) {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.elements.Email.value;
    const password = event.currentTarget.elements.Password.value;
    if (isEmail(email as string)) {
      props.onSubmit(email, password);
    } else {
      event.currentTarget.elements.Email.focus();
    }
  };

  return (
    <div className="h-screen p-5">
      <div className="flex flex-col items-center h-full justify-between">
        <Logo />

        <form onSubmit={handleOnSubmit}>
          <div>
            <div className="text-4xl font-bold my-2">NFT Access</div>
            <div className="text-gray-500 text-sm">
              Please fill your detail to access your account.
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              className="bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="debra.holt@example.com"
              required
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="Password"
              className="bg-gray-10 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex flex-row justify-between mt-5">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-3 text-sm">
                Remember me
              </label>
            </div>
            <div>
              <div className="text-blue-700 text-sm cursor-pointer">
                Forgot Password?
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-blue-700 text-white text-sm  py-2 px-4 rounded"
          >
            Sign in
          </button>
          <button
            type="button"
            className="mt-5 w-full border text-black text-sm  items-center justify-center flex py-2 px-4 rounded cursor-pointer"
          >
            <Image
              src={"/static/icon_google.svg"}
              alt=""
              width={20}
              height={20}
            />
            <span className="ml-2">Sign in with Google</span>
          </button>
          <div className="mt-5 text-sm flex flex-row justify-center">
            <div className="text-gray-500">Don't have an account?</div>
            <div className="text-blue-700 ml-1 cursor-pointer">Sign up</div>
          </div>
        </form>

        <div className="w-full italic text-gray-500 invisible md:visible">
          @CreatedbyNAMDesign
        </div>
      </div>
    </div>
  );
}

export default FormSignIn;
