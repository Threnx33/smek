import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { IssuerCreate } from "./issuerCreate";
import { ISSUES, ISSUES_COLUMNS } from "./data";
import { IssuerWrap } from "./issuerWrap";
import { SearchBarChipTopbar } from "@/components/reusables/searchBarChipTopbar";

export function ViewIssuer() {
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
        <SearchBarChipTopbar
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
