import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { VERIFICATIONS, VERIFICATIONS_COLUMNS } from "./data";
import { MainWrap } from "@/components/reusables/mainWrap";
import { VerificationCreate } from "./verificationCreate";

export function ViewVerification() {
  const table = useCustomTable({
    columns: VERIFICATIONS_COLUMNS,
    data: VERIFICATIONS,
  });

  const emptyText = (
    <div className="text-cMediumGrey text-center">
      Verification templates allow credential holders to select and you with the
      credential data that you need. Create you first verification template.
    </div>
  );

  return (
    <MainWrap>
      <div className="text-2xl font-semibold mb-5 select-none">
        Verification
      </div>
      <div className="bg-white flex flex-col flex-grow p-6 rounded">
        <div className="flex justify-between mb-6">
          <SearchBarChip
            table={table}
            className="mr-3"
            placeholder="Search collections"
            searchBy="collection"
          />
          <div className="flex items-center">
            <VerificationCreate />
          </div>
        </div>

        <CustomTable
          table={table}
          emptyImgName="emptyCollections"
          emptyText={emptyText}
        />
      </div>
    </MainWrap>
  );
}
