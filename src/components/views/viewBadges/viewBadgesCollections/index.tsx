import { SearchBarChip } from "@/components/reusables/searchBarChip";
import {
  TableDataProps,
  useCustomTable,
} from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesWrap } from "@/components/uiComponents/badgesWrap";
import { Button } from "@/components/ui/button";

export function ViewBadgesCollections<TData, TValue>({
  columns,
  data,
}: TableDataProps<TData, TValue>) {
  const table = useCustomTable({ columns, data });

  const emptyText = (
    <div className="text-cMediumGrey text-center">
      No available history data to present. Check back later.
    </div>
  );

  return (
    <BadgesWrap>
      <div className="flex justify-between mb-6">
        <SearchBarChip
          table={table}
          className="mr-3"
          placeholder="Search collections"
          searchBy="templateName"
        />
        <div className="flex items-center">
          <Button className="mr-3">
            <img
              className="h-5 w-5 mr-2"
              src="/addSquareWhite.svg"
              alt="addSquareWhiteIcon"
            />
            Create Collection
          </Button>
        </div>
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyCollections"
        emptyText={emptyText}
      />
    </BadgesWrap>
  );
}
