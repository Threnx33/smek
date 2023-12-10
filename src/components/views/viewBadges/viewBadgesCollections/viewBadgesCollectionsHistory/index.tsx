import { BadgesTemplateWrap } from "@/components/views/viewBadges/viewBadgesTemplates/badgesTemplateWrap";
import { CustomTable } from "@/components/reusables/customTable";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { TEMPLATE_HISTORIES, TEMPLATE_HISTORIES_COLUMNS } from "./data";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { BadgesCollectionWrap } from "@/components/views/viewBadges/viewBadgesCollections/badgesCollectionWrap";

export function ViewBadgesCollectionsHistory() {
  const table = useCustomTable({
    columns: TEMPLATE_HISTORIES_COLUMNS,
    data: TEMPLATE_HISTORIES,
  });

  const emptyText = (
    <div className="text-cMediumGrey text-center">
      No available history data to present. Check back later.{" "}
    </div>
  );

  return (
    <BadgesCollectionWrap>
      <div className="flex justify-between mb-6">
        <SearchBarChip
          table={table}
          className="mr-3"
          placeholder="Search hisoty"
          searchBy="updatedBy"
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