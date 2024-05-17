import Link from "next/link";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { ModeToggle } from "./dark-mode";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = async () => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4  backdrop-blur-lg z-[100] flex items-center border-b-[1px]  justify-between">
      <aside className="flex items-center gap-[2px]">
        <div className=" ml-10">
          <Image
            width={80}
            height={80}
            alt=""
            src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/632ced81006cd750c4559332_lexandria%20%20fashion%20brand%20art%20design%20logo.svg"
          />
        </div>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href=""
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        ></Link>
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <Button>Login</Button>
        <div>
          <ModeToggle />
        </div>
        {/* <MenuIcon className="md:hidden" /> */}
        <Sheet>
  <SheetTrigger><MenuIcon className=" md:hidden"/></SheetTrigger>
  <SheetContent className=" pt-24">
    <SheetHeader>
      <SheetTitle><Link href={"/"}>Products</Link></SheetTitle>
      <SheetTitle><Link href={"/"}>Pricing</Link></SheetTitle>
      <SheetTitle><Link href={"/"}>Clients</Link></SheetTitle>
      <SheetTitle><Link href={"/"}>Documentation</Link></SheetTitle>
      <SheetTitle><Link href={"/"}>Enterprise</Link></SheetTitle>
      <SheetTitle><Link href={"/"}>Resources</Link></SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>

      </aside>
    </header>
  );
};

export default Navbar;
