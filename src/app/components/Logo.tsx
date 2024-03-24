import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex flex-row items-center  justify-center sm:justify-start w-full">
      <div>
        <Image src={"/static/icon_logo.svg"} alt="" width={40} height={40} />
      </div>
      <div className="ml-1 font-semibold">PNFT Market</div>
    </div>
  );
}

export default Logo;
