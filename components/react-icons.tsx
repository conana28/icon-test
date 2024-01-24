import { Button } from "@/components/ui/button";
import { FaWineGlass } from "react-icons/fa6";
import { GiWineBottle } from "react-icons/gi";

export default function ReactIcons() {
  return (
    <div className="flex flex-row space-x-4">
      <p>react-icons </p>
      <Button
        variant="outline"
        size="iconxs"
        className="group hover:bg-blue-500 hover:text-white"
      >
        <FaWineGlass className=" group-hover:text-white" />
      </Button>
      <Button
        variant="outline"
        size="iconxs"
        className="group hover:bg-blue-500 hover:text-white"
      >
        <FaWineGlass className=" group-hover:text-white w-3.5 h-3.5" />
      </Button>
      <Button variant="destructive" size="iconxs">
        <GiWineBottle className="w-4 h-4" />
      </Button>
      <Button variant="default" size="iconxs">
        <GiWineBottle size={16} />
      </Button>
    </div>
  );
}
