import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center">
      <Button variant="default" size="default">
        Hello World
      </Button>

      <ModeToggle />
    </div>
  );
}
