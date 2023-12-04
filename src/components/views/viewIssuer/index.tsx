import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesCollectionsCreate } from "./badgesCollectionsCreate";
import { ISSUES, ISSUES_COLUMNS } from "./data";
import { IssuerWrap } from "./issuerWrap";

export function ViewIssuer() {
  const table = useCustomTable({
    columns: ISSUES_COLUMNS,
    data: ISSUES,
  });

  const emptyText = (
    <div className="text-cMediumGrey text-center">
      No DID created yet. Create your first Issuer profile
    </div>
  );

  return (
    <IssuerWrap>
      <div className="flex justify-between mb-6">
        <SearchBarChip
          table={table}
          className="mr-3"
          placeholder="Search issuer profiles"
          searchBy="profileName"
        />
        <div className="flex items-center">
          {/* <BadgesCollectionsCreate /> */}
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
