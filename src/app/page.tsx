"use client";
import Image from "next/image";
import FormSignIn from "./components/FormSignIn";
import Wellcome from "./components/Wellcome";
import { container } from "./di/injection_container";
import { IntjectionKey } from "./di/injection_key";
import { UserRepsitory } from "./domain/user_repositort";
import { LoginUserDto } from "../../api/pnft_api/src/dto/user.dto";

export default function Home() {
  const userRepository = container.get<UserRepsitory>(
    IntjectionKey.USER_POSITORY
  );

  const onSignIn = async (email: string, password: string) => {
    const req: LoginUserDto = {
      email: email,
      password: password,
    };
    try {
      const res = await userRepository.login(req);
      if (res.data != null) {
        console.log(res);
      } else {
        console.log("Invalid email or password.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="md:flex">
      <div className="md:basis-1/2 ">
        <FormSignIn onSubmit={onSignIn} />
      </div>
      <div className="md:basis-1/2 invisible md:visible">
        <Wellcome />
      </div>
    </div>
  );
}
