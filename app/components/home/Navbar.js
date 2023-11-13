import React from "react";
import Image from "next/image";
 
const Navbar = () => {
 return(
  <div className="bg-royal h-16 w-full flex items-center sticky top-0 pl-28 pb-3 z-10">
    <Image src="/assets/brand2.png" width={250} height={49} alt="logo" className="ml-8" priority />
  </div>
 );
}

export default Navbar;