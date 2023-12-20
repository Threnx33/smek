import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesEarnersFilterButton } from "./badgesEarnersFilter";
import { EARNERS, EARNERS_COLUMNS } from "./data";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { CERTIFICATES_MENU_TABS } from "../certificatesMenuTabs";

export function ViewBadgesEarners() {
  const table = useCustomTable({ columns: EARNERS_COLUMNS, data: EARNERS });

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
    <TitleWithTabsWrap title="Certificates" tabs={CERTIFICATES_MENU_TABS}>
      <div className="flex items-center mb-6">
        <SearchBarChip
          table={table}
          className="mr-3"
          placeholder="Search earner name or email address"
          searchBy="name"
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
