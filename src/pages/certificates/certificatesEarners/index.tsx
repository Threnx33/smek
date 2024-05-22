import { CustomTable } from "@/components/reusables/customTable";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { useCustomTable } from "@/hooks/useCustomTable";
import { CERTIFICATES_MENU_TABS } from "../certificatesMenuTabs";
import { CertificatesEarnersFilterButton } from "./certificatesEarnersFilter";
import { EARNERS, EARNERS_COLUMNS } from "./data";

export function CertificatesEarners() {
  const table = useCustomTable({ columns: EARNERS_COLUMNS, data: EARNERS });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      Search for earners’ certificates by <b>earner name</b>,{" "}
      <b>email address</b> or <b>issuer earner ID</b>.
      <br />
      <br /> To view all certificates just click “Search”.
      <br /> You can use the search filters to narrow your results.
    </div>
  );

  return (
    <TitleWithTabsWrap title="Certificates" tabs={CERTIFICATES_MENU_TABS}>
      <div className="mb-6 flex items-center">
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("name")?.setFilterValue(e.target.value)
          }
          className="mr-3"
          placeholder="Search earner name or email address"
        />
        <CertificatesEarnersFilterButton table={table} />
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyEarners"
        emptyText={emptyText}
      />
    </TitleWithTabsWrap>
  );
}
