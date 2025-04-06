"use client";

import Marquee from "react-fast-marquee";

import { Slider } from "@/components/ui/slider";
import * as Icons from "@icons-pack/react-simple-icons";
import { Slot } from "@radix-ui/react-slot";
import { CircleX } from "lucide-react";
import { useState } from "react";

interface TechIconData {
  tool_name: string;
  icon_name: string;
  level: number;
}

const MarqueeWidget = ({
  title,
  techData,
}: { title: string; techData: TechIconData[] }) => {
  const [techItem, setTehItem] = useState<TechIconData>({
    tool_name: "Tech Name",
    icon_name: "",
    level: 0,
  });

  return (
    <>
      <div className="w-full">
        <div className="flex items-baseline justify-between">
          <p className="text-2xl">{title}</p>
          <div className="flex flex-row items-center gap-2">
            <p className="font-mono text-sm ">{techItem.tool_name}</p>
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
          pauseOnHover
          className="items-center py-3 text-muted-foreground"
          loop={0}
        >
          {techData.map((icon: TechIconData) => {
            const IconComponent = (
              Icons as unknown as Record<string, React.ComponentType>
            )[`Si${icon.icon_name}`];

            if (typeof IconComponent === "undefined")
              return (
                <div key={icon.tool_name} className="px-3">
                  <Slot className="h-10 w-full">
                    <CircleX color="red" />
                  </Slot>
                </div>
              );
            return (
              // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
              <div
                key={icon.tool_name}
                className="px-3"
                onClick={() => setTehItem(icon)}
              >
                <Slot
                  className={`${icon.tool_name === techItem.tool_name ? "scale-120 text-primary" : ""} h-10 w-full duration-200 hover:scale-120 hover:cursor-pointer`}
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
