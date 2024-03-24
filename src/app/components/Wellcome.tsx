import React from "react";
import Image from "next/image";

function Wellcome() {
  return (
    <div className="h-screen p-5">
      <div className=" bg-drip-20 w-full h-full rounded-3xl">
        <Image
          src={"/static/drip_20.svg"}
          alt=""
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default Wellcome;
