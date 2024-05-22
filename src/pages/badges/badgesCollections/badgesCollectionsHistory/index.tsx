import { CustomTable } from "@/components/reusables/customTable";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useCustomTable } from "@/hooks/useCustomTable";
import { BadgesCollectionWrap } from "@/pages/badges/badgesCollections/badgesCollectionWrap";
import { TEMPLATE_HISTORIES, TEMPLATE_HISTORIES_COLUMNS } from "./data";

export function BadgesCollectionsHistory() {
  const table = useCustomTable({
    columns: TEMPLATE_HISTORIES_COLUMNS,
    data: TEMPLATE_HISTORIES,
  });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      No available history data to present. Check back later.{" "}
    </div>
  );

  return (
    <BadgesCollectionWrap>
      <div className="mb-6 flex justify-between">
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("updatedBy")?.setFilterValue(e.target.value)
          }
          className="mr-3"
          placeholder="Search hisoty"
        />
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyCollections"
        emptyText={emptyText}
        noSelections
      />
    </BadgesCollectionWrap>
  );
}
