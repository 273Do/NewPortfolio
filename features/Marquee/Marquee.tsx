"use client";

import Marquee from "react-fast-marquee";

import { Slider } from "@/components/ui/slider";
import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import { CircleX } from "lucide-react";
import { useState } from "react";

interface TechIconData {
  name: string;
  level: number;
}

const MarqueeWidget = ({
  title,
  techData,
}: { title: string; techData: TechIconData[] }) => {
  const [techItem, setTehItem] = useState<TechIconData>({
    name: "name",
    level: 0,
  });

  return (
    <>
      <div className="w-full">
        <div className="flex items-baseline justify-between">
          <p className="text-2xl">{title}</p>
          <div className="flex flex-row items-center gap-2">
            <p className="font-mono text-sm ">{techItem.name}</p>
            {/* <div className="h-1 w-30 bg-muted-foreground" /> */}
            <Slider
              defaultValue={[techItem.level]}
              value={[techItem.level]}
              max={5}
              step={1}
              className="h-1 w-30"
              disabled
            />
          </div>
        </div>
        <Marquee
          gradient
          gradientColor="var(--background)"
          className="text-muted-foreground py-3 items-center"
          loop={0}
        >
          {techData.map((icon: TechIconData) => {
            const IconComponent = (
              Icons as unknown as Record<string, React.ComponentType>
            )[`Si${icon.name}`];

            if (typeof IconComponent === "undefined")
              return (
                <div key={icon.name} className="px-3">
                  <Slot className="h-10 w-full">
                    <CircleX color="red" />
                  </Slot>
                </div>
              );
            return (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={icon.name}
                className="px-3"
                onClick={() => setTehItem(icon)}
              >
                <Slot
                  className={`${icon.name === techItem.name ? "text-primary scale-120" : ""} duration-200 h-10 hover:cursor-pointer hover:scale-120 w-full`}
                >
                  <IconComponent />
                </Slot>
              </div>
            );
          })}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeWidget;
