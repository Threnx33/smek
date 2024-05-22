import { CustomTable } from "@/components/reusables/customTable";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useCustomTable } from "@/hooks/useCustomTable";
import { ISSUES, ISSUES_COLUMNS } from "./data";
import { IssuerCreate } from "./issuerCreate";
import { IssuerWrap } from "./issuerWrap";

export function Issuer() {
  const table = useCustomTable({
    columns: ISSUES_COLUMNS,
    data: ISSUES,
  });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      No DID created yet. Create your first Issuer profile
    </div>
  );

  return (
    <IssuerWrap>
      <div className="mb-6 flex justify-between">
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("profileName")?.setFilterValue(e.target.value)
          }
          className="mr-3"
          placeholder="Search issuer profiles"
        />
        <div className="flex items-center">
          <IssuerCreate />
        </div>
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyIssuer"
        emptyText={emptyText}
      />
    </IssuerWrap>
  );
}
