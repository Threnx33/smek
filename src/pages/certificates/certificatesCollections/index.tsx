import { CustomTable } from "@/components/reusables/customTable";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { useCustomTable } from "@/hooks/useCustomTable";
import { CERTIFICATES_MENU_TABS } from "../certificatesMenuTabs";
import { CertificatesCollectionsCreate } from "./certificatesCollectionsCreate";
import { COLLECTIONS, COLLECTIONS_COLUMNS } from "./data";

export function CertificatesCollections() {
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
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("collection")?.setFilterValue(e.target.value)
          }
          className="mr-3"
          placeholder="Search collections"
        />
        <div className="flex items-center">
          <CertificatesCollectionsCreate />
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
