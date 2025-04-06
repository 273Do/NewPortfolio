"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import siteLogo from "@/public/img/273*Logo.png";
import { Languages } from "lucide-react";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mt-0.5 flex h-11 w-full items-center justify-center">
        <div className="mx-4 flex w-full max-w-[1440px] items-center justify-between">
          <Link href="/">
            <Image
              src={siteLogo}
              width={70}
              height={70}
              alt="siteLogo"
              className={`${
                theme === "light" && "icon_light"
              } duration-200 hover:scale-95`}
            />
          </Link>
          <nav className="flex gap-4 font-mono font-semibold text-xs">
            <Link
              href="/"
              className="opacity-70 duration-200 hover:opacity-100"
            >
              Works
            </Link>
            <Link
              href="/"
              className="opacity-70 duration-200 hover:opacity-100"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="opacity-70 duration-200 hover:opacity-100"
            >
              Gallery
            </Link>
            <Link
              href="/"
              className="opacity-70 duration-200 hover:opacity-100"
            >
              Movies
            </Link>
          </nav>
          <nav>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Languages className="size-[1rem]" />
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
