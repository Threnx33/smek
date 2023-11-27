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
import { Table } from "@tanstack/react-table";

type BadgesTemplatesFilterButtonProps<TData> = {
  table: Table<TData>;
};

export function BadgesTemplatesFilterButton<TData>({
  table,
}: BadgesTemplatesFilterButtonProps<TData>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <img className="h-5 w-5 mr-2" src="/filter.svg" alt="FilterIcon" />
          <span>Filters</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-bold text-2xl ">Filters</SheetTitle>
        </SheetHeader>

        <BadgesTemplatesFilterForm table={table} />
      </SheetContent>
    </Sheet>
  );
}
