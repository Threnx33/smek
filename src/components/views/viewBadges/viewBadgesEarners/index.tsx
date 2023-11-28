import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { FilterButton } from "@/components/reusables/filterButton";
import {
  TableDataProps,
  useCustomTable,
} from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesWrap } from "@/components/reusables/badgesWrap";
import { BadgesEarnersFilterButton } from "./badgesEarnersFilter";

export function ViewBadgesEarners<TData, TValue>({
  columns,
  data,
}: TableDataProps<TData, TValue>) {
  const table = useCustomTable({ columns, data });

  const emptyText = (
    <div className="text-cMediumGrey text-center">
      Search for earners’ badges by <b>earner name</b>, <b>email address</b> or{" "}
      <b>issuer earner ID</b>.
      <br />
      <br /> To view all badges just click “Search”.
      <br /> You can use the search filters to narrow your results.
    </div>
  );

  return (
    <BadgesWrap>
      <div className="flex items-center mb-6">
        <SearchBarChip
          table={table}
          className="mr-3"
          placeholder="Search earner name or email address"
          searchBy="name"
        />
        <BadgesEarnersFilterButton table={table}/>
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyEarners"
        emptyText={emptyText}
      />
    </BadgesWrap>
  );
}
