import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogoChip } from "../logoChip";

type DesignerDrawerExtendWrapProps = {
  className?: string;
  children?: React.ReactNode;
};

export function DesignerDrawerExtendWrap({
  className,
  children,
}: DesignerDrawerExtendWrapProps) {
  return (
    <div className={className}>
      {/*Desktop drawer*/}
      <div className="shadow-r-sm min-h-full min-w-[16rem] overflow-auto border-r-[0.5px]">
        <div className="hidden min-h-full p-6 lg:block">{children}</div>
      </div>

      {/*Mobile drawer*/}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="mr-3">
              <img
                className="h-4 w-4"
                src="/arrowDown.svg"
                alt="arrowDownIcon"
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[16rem] overflow-auto p-0">
            <LogoChip className="mb-4 mt-10 flex flex-row justify-center align-middle" />
            {children}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
