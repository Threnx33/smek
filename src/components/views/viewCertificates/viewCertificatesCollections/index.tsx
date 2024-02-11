import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesCollectionsCreate } from "./badgesCollectionsCreate";
import { COLLECTIONS, COLLECTIONS_COLUMNS } from "./data";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { CERTIFICATES_MENU_TABS } from "../certificatesMenuTabs";
import { SearchBarChipTopbar } from "@/components/reusables/searchBarChipTopbar";

export function ViewBadgesCollections() {
  const table = useCustomTable({
    columns: COLLECTIONS_COLUMNS,
    data: COLLECTIONS,
  });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      No available history data to present. Check back later.
    </div>
  );

  return (
    <TitleWithTabsWrap title="Certificates" tabs={CERTIFICATES_MENU_TABS}>
      <div className="mb-6 flex justify-between">
        <SearchBarChipTopbar
          handleOnChange={(e) =>
            table.getColumn("collection")?.setFilterValue(e.target.value)
          }
          className="mr-3"
          placeholder="Search collections"
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
