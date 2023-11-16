import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { FilterButton } from "@/components/reusables/filterButton";
import {
  TableDataProps,
  useCustomTable,
} from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";

export function BadgeEarners<TData, TValue>({
  columns,
  data,
}: TableDataProps<TData, TValue>) {
  const table = useCustomTable({ columns, data });

  return (
    <div>
      <div className="flex items-center mb-6">
        <SearchBarChip
          table={table}
          className="mr-3"
          placeholder="Search earner name or email address"
          searchBy="templateName"
        />
        <FilterButton />
      </div>

      <CustomTable table={table} />
    </div>
  );
}
