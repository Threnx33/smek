import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BadgesTemplatesFilterForm } from "./badgesTemplatesFilterForm";
import { Table as ReactTable } from "@tanstack/react-table";

type BadgesTemplatesFilterButtonProps<TData> = {
  table: ReactTable<TData>;
  className?: string;
  variant?: "desktop" | "mobile";
};

export function BadgesTemplatesFilterButton<TData>({
  table,
  className,
  variant,
}: BadgesTemplatesFilterButtonProps<TData>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {variant !== "mobile" ? (
          <Button variant="outline" className={`${className}`}>
            <img className="mr-2 h-5 w-5" src="/filter.svg" alt="FilterIcon" />
            <span>Filters</span>
          </Button>
        ) : (
          <div className="flex space-x-2 py-1 pr-2">
            <img className="h-5 w-5" src="/filter.svg" alt="FilterIcon" />
            <span>Filters</span>
          </div>
        )}
      </SheetTrigger>
      <SheetContent className=" overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">Filters</SheetTitle>
        </SheetHeader>

        <BadgesTemplatesFilterForm table={table} />
      </SheetContent>
    </Sheet>
  );
}
