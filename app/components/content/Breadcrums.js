"use client"

import { Breadcrumbs as BreadcrumbsComponent } from "@material-tailwind/react";
import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <BreadcrumbsComponent fullWidth>
      <Link href="/" className="opacity-60">
        Home
      </Link>
      <Link href="/javascript-basics" className="opacity-60">
        JavaScript Basics
      </Link>
      <Link href="/javascript-intro">
        JavaScript Intro
      </Link>
    </BreadcrumbsComponent>
  );
}

export default Breadcrumbs;