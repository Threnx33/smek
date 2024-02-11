import { BadgesTemplateWrap } from "@/components/views/viewBadges/viewBadgesTemplates/badgesTemplateWrap";
import { CustomTable } from "@/components/reusables/customTable";
import { TEMPLATE_HISTORIES, TEMPLATE_HISTORIES_COLUMNS } from "./data";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { BadgesCollectionWrap } from "@/components/views/viewBadges/viewBadgesCollections/badgesCollectionWrap";
import { SearchBarChipTopbar } from "@/components/reusables/searchBarChipTopbar";

export function ViewBadgesCollectionsHistory() {
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
        <SearchBarChipTopbar
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
