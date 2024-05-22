import { CustomTable } from "@/components/reusables/customTable";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useCustomTable } from "@/hooks/useCustomTable";
import { CertificatesEarnerWrap } from "@/pages/certificates/certificatesEarners/certificatesEarnerWrap";
import { TEMPLATE_HISTORIES, TEMPLATE_HISTORIES_COLUMNS } from "./data";

export function CertificatesEarnersHistory() {
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
    <CertificatesEarnerWrap>
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
    </CertificatesEarnerWrap>
  );
}
