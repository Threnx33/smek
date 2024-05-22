import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowDown2 } from "iconsax-react";
import { DesignerDrawerList } from "./designerDrawerList";

type DesignerDrawerProps = {
  className?: string;
  drawerExtended: React.ReactNode;
};

export function DesignerDrawer({
  className,
  drawerExtended,
}: DesignerDrawerProps) {
  return (
    <div className={`h-full ${className}`}>
      {/*Desktop drawer*/}
      <div className=" hidden xl:flex h-full">
        <div className="border-r-[0.5px] shaadow-r-sm ">
          <DesignerDrawerList />
        </div>

        {drawerExtended}
      </div>

      {/*Mobile drawer*/}
      <div className="xl:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mr-3 shrink-0">
              <ArrowDown2 className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-full overflow-auto">
            <div className="min-h-full flex ">
              <div className="border-r-[0.5px] shadow-r-sm">
                <DesignerDrawerList />
              </div>
              <div className="w-full">{drawerExtended}</div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
