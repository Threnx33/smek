import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesCollectionsCreate } from "./badgesCollectionsCreate";
import { COLLECTIONS, COLLECTIONS_COLUMNS } from "./data";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { CERTIFICATES_MENU_TABS } from "../certificatesMenuTabs";

export function ViewBadgesCollections() {
  const table = useCustomTable({
    columns: COLLECTIONS_COLUMNS,
    data: COLLECTIONS,
  });

  const emptyText = (
    <div className="text-cMediumGrey text-center">
      No available history data to present. Check back later.
    </div>
  );

  return (
    <TitleWithTabsWrap title="Certificates" tabs={CERTIFICATES_MENU_TABS}>
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
    </TitleWithTabsWrap>
  );
}
