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
import { BadgesEarnersFilterForm } from "./badgesEarnersFilterForm";
import { Table as ReactTable } from "@tanstack/react-table";

type BadgesEarnersFilterButtonProps<TData> = {
  table: ReactTable<TData>;
};

export function BadgesEarnersFilterButton<TData>({
  table,
}: BadgesEarnersFilterButtonProps<TData>) {
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
        <BadgesEarnersFilterForm table={table} />
      </SheetContent>
    </Sheet>
  );
}
