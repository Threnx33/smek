import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesEarnersFilterButton } from "./badgesEarnersFilter";
import { EARNERS, EARNERS_COLUMNS } from "./data";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { BADGES_MENU_TABS } from "../badgesMenuTabs";
import { SearchBarChipTopbar } from "@/components/reusables/searchBarChipTopbar";

export function ViewBadgesEarners() {
  const table = useCustomTable({ columns: EARNERS_COLUMNS, data: EARNERS });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      Search for earners’ badges by <b>earner name</b>, <b>email address</b> or{" "}
      <b>issuer earner ID</b>.
      <br />
      <br /> To view all badges just click “Search”.
      <br /> You can use the search filters to narrow your results.
    </div>
  );

  return (
    <TitleWithTabsWrap title="Badges" tabs={BADGES_MENU_TABS}>
      <div className="mb-6 flex items-center">
        <SearchBarChipTopbar
          handleOnChange={(e) =>
            table.getColumn("name")?.setFilterValue(e.target.value)
          }
          className="mr-3"
          placeholder="Search earner name or email address"
        />
        <BadgesEarnersFilterButton table={table} />
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyEarners"
        emptyText={emptyText}
      />
    </TitleWithTabsWrap>
  );
}
