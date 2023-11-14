import React from "react";
import Image from "next/image";
 
const Navbar = () => {
  return(
    <div className="bg-royal h-16 w-full flex items-center sticky top-0 px-28 pb-3 z-10 justify-between">
      <Image src="/assets/brand2.png" width={250} height={49} alt="logo" className="ml-8" priority />
      <span className="flex items-center pt-2 pr-6">Welcome Ori</span>
    </div>
  );
}

export default Navbar;