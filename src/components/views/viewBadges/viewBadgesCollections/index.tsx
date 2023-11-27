import { SearchBarChip } from "@/components/reusables/searchBarChip";
import {
  TableDataProps,
  useCustomTable,
} from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesWrap } from "@/components/reusables/badgesWrap";
import { BadgesCollectionsCreate } from "./badgesCollectionsCreate";

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
          searchBy="collection"
        />
        <div className="flex items-center">
          <BadgesCollectionsCreate />
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
