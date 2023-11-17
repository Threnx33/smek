import { Button } from "@/components/ui/button";
import { Column } from "@tanstack/react-table";

interface HeaderSortButton<TData, TValue> {
  column: Column<TData, TValue>;
  name: string;
}

export function HeaderSortButton<TData, TValue>({
  column,
  name,
}: HeaderSortButton<TData, TValue>) {
  return (
    <Button
      className="h-full hover:bg-inherit px-0"
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {name}
      <img
        className="ml-2 h-4 w-4"
        src="/arrowUpDown.svg"
        alt="ArrowUpDownIcon"
      />
    </Button>
  );
}
