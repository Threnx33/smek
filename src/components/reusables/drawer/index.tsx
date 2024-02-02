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
      <div className="hidden md:block w-64 min-h-screen shadow-sm">
        <LogoChip className="flex flex-row justify-center align-middle m-6" />
        <DrawerList />
      </div>

      {/*Mobile drawer*/}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden mr-3">
            <img
              className="h-5 w-5 mr-2"
              src="/arrowDown.svg"
              alt="arrowDownIcon"
            />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[16rem] p-0">
          <LogoChip className="flex flex-row justify-center align-middle mb-4 mt-8" />
          <DrawerList />
        </SheetContent>
      </Sheet>
    </div>
  );
}
