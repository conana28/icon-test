import { ModeToggle } from "@/components/mode-toggle";
import ReactIcons from "@/components/react-icons";
import { Cellar, TwoWineBottles, WineShelf } from "@/components/svgs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="flex flex-rowl items-center space-x-4 mb-6">
        <p>Icons check</p>
        <ModeToggle />
      </div>
      <div className="flex flex-row space-x-4 ">
        <p>SVG</p>
        <Button
          variant="outline"
          size="iconxs"
          className="group hover:bg-blue-500 hover:text-white"
        >
          <TwoWineBottles className="w-4 h-4" />
        </Button>{" "}
        <Button
          variant="outline"
          size="iconxs"
          className="group hover:bg-blue-500 hover:text-white"
        >
          <Cellar className="w-6 h-6" />
        </Button>
        <Button
          variant="outline"
          size="iconxs"
          className="group hover:bg-blue-500 hover:text-white"
        >
          <WineShelf className="w-4 h-4" />
        </Button>
      </div>

      <div className="mt-10">
        <ReactIcons />
      </div>
    </main>
  );
}
