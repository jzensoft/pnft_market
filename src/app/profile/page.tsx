"use client";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { LOGIN_TOKEN } from "../core/constans";
import { UserRepsitory } from "../domain/user_repositort";
import { IntjectionKey } from "../di/injection_key";
import { container } from "../di/injection_container";
import { FindUserDto } from "../core/dto/user_dto";
import { User } from "../data/model/user";

function Page() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const userRepository = container.get<UserRepsitory>(
    IntjectionKey.USER_POSITORY
  );

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const req: FindUserDto = {
      email: Cookies.get(LOGIN_TOKEN) ?? "",
    };

    try {
      const res = await userRepository.getUserInfo(req);
      if (res.isSuccess && res.data != null) {
        setUser(res.data);
      } else {
        Cookies.remove(LOGIN_TOKEN);
        router.replace("/");
      }
    } catch (e) {
      alert((e as Error).message);
    }
  };

  const onLogout = () => {
    Cookies.remove(LOGIN_TOKEN);
    router.replace("/");
  };

  return (
    <div className="h-screen">
      <div className=" relative h-full ">
        <div className=" bg-drip-20 h-1/4"></div>
        <div className=" absolute top-2 left-2">
          <Logo />
        </div>
        <div className=" absolute  md:w-1/2 w-10/12 top-24 left-1/2 transform -translate-x-1/2  bg-white shadow-md  rounded-3xl p-5 ">
          <div className=" text-gray-500 text-center text-3xl my-10">
            Wellcome,{" "}
            <span className=" text-black">
              {user?.name ?? ""} {user?.last_name ?? ""}
            </span>
          </div>
          <div className="my-2">
            <span className=" text-gray-500 text-lg">Age</span> :{" "}
            {user?.age ?? ""}
          </div>
          <hr />
          <div className="my-2">
            <span className=" text-gray-500">Email</span> : {user?.email ?? ""}
          </div>
          <hr />
          <div className="my-2">
            <span className=" text-gray-500">Telephone</span> :{" "}
            {user?.telephone ?? ""}
          </div>
          <div className="flex flex-row justify-center">
            <button
              onClick={onLogout}
              className="bg-transparent hover:bg-red-500 text-red-700  hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
