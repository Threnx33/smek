import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { VERIFICATIONS, VERIFICATIONS_COLUMNS } from "./data";
import { MainWrap } from "@/components/reusables/mainWrap";
import { VerificationCreate } from "./verificationCreate";
import { SearchBarChipTopbar } from "@/components/reusables/searchBarChipTopbar";

export function ViewVerification() {
  const table = useCustomTable({
    columns: VERIFICATIONS_COLUMNS,
    data: VERIFICATIONS,
  });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      Verification templates allow credential holders to select and you with the
      credential data that you need. Create you first verification template.
    </div>
  );

  return (
    <MainWrap>
      <div className="mb-5 select-none text-2xl font-semibold">
        Verification
      </div>
      <div className="flex flex-grow flex-col rounded bg-white p-6">
        <div className="mb-6 flex justify-between">
          <SearchBarChipTopbar
            handleOnChange={(e) =>
              table.getColumn("collection")?.setFilterValue(e.target.value)
            }
            className="mr-3"
            placeholder="Search collections"
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
