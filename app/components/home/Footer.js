import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-royal h-20 w-full flex items-center justify-center px-10 text-white">  
      <div className="flex items-center">
        <Link href="/">
            <Image src="/assets/Logo.png" width={41} height={31} alt="logo" className="mx-4 " priority />
        </Link>
        <p className="text-sm tracking-widest">
          &copy; Brainwave {new Date().getFullYear()} 
        </p>
      </div>
    </div>
  );
}

export default Footer;
