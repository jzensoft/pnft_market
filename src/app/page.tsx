"use client";
import Image from "next/image";
import FormSignIn from "./components/FormSignIn";
import Wellcome from "./components/Wellcome";
import { container } from "./di/injection_container";
import { PhotoRepsitory } from "./domain/photo_repository";
import { IntjectionKey } from "./di/injection_key";
import { useEffect } from "react";

export default function Home() {
  const photoRepository = container.get<PhotoRepsitory>(
    IntjectionKey.PHOTOREPOSITORY
  );

  const onSignIn = (email: string, password: string) => {
    console.log(email + password);
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
