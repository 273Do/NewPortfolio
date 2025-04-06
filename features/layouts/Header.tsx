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
      <div className="mx-4 flex h-10 items-center justify-between">
        <Link href="/" title="card">
          <Image
            src={siteLogo}
            width={70}
            height={70}
            alt="siteLogo"
            className={`${
              theme === "light" && "icon_light"
            } duration-150 hover:scale-95`}
          />
        </Link>
        <nav>
          <Button variant="ghost">
            <Languages />
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </div>
  );
};

export default Header;
