import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Table as ReactTable } from "@tanstack/react-table";
import { BadgesEarnersFilterForm } from "./badgesEarnersFilterForm";

type BadgesEarnersFilterButtonProps<TData> = {
  table: ReactTable<TData>;
};

export function BadgesEarnersFilterButton<TData>({
  table,
}: BadgesEarnersFilterButtonProps<TData>) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="ml-auto shrink-0 xl:ml-0">
          <img
            className="h-5 w-5 xl:mr-2 "
            src="/filter.svg"
            alt="FilterIcon"
          />
          <span className="hidden xl:flex">Filters</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">Filters</SheetTitle>
        </SheetHeader>
        <BadgesEarnersFilterForm table={table} />
      </SheetContent>
    </Sheet>
  );
}
