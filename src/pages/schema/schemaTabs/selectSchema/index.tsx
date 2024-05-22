import { CustomTable } from "@/components/reusables/customTable";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useCustomTable } from "@/hooks/useCustomTable";
import { SCHEMAS, SCHEMAS_COLUMNS } from "../../data";

export function SelectSchema() {
  const table = useCustomTable({
    columns: SCHEMAS_COLUMNS,
    data: SCHEMAS,
  });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      A credential schema allows you to define the structure and the attributes
      included in the credentials
    </div>
  );

  return (
    <>
      <div className="mb-2 select-none text-2xl font-semibold">
        Select a Credential Schema
      </div>
      <div className=" mb-5 w-11/12 select-none md:w-7/12">
        A schema is like a template for credential that issuers and verifiers
        use. It includes specific credential attributes such as name, license
        number, issue date etc.
      </div>
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        <div className="mb-6 flex justify-between">
          <SearchBarChip
            handleOnChange={(e) =>
              table.getColumn("name")?.setFilterValue(e.target.value)
            }
            className="mr-3"
            placeholder="Search schema"
          />
        </div>

        <CustomTable
          table={table}
          emptyImgName="addFiles"
          emptyText={emptyText}
        />
      </div>
    </>
  );
}
