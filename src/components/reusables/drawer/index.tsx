import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoChip } from "../../reusables/logoChip";
import { DrawerList } from "./drawerList";
import { Button } from "@/components/ui/button";

type DrawerProps = {
  className?: string;
};

export function Drawer({ className }: DrawerProps) {
  return (
    <div className={className}>
      {/*Desktop drawer*/}
      <div className="hidden md:block min-w-[16rem] min-h-screen shadow-sm">
        <LogoChip className="flex flex-row justify-center align-middle m-6" />
        <DrawerList />
      </div>

      {/*Mobile drawer*/}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className=" mr-3">
              <img
                className="h-6 w-6"
                src="/arrowDown.svg"
                alt="arrowDownIcon"
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[16rem] p-0 overflow-auto">
            <LogoChip className="flex flex-row justify-center align-middle mb-4 mt-12" />
            <DrawerList />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
