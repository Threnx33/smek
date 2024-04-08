import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { SCHEMAS, SCHEMAS_COLUMNS } from "./data";
import SchemaCreateButton from "./schemaCreate/schemaCreateButton";
import { TitleHeaderWrap } from "@/components/reusables/titleHeaderWrap";

export function ViewSchema() {
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
    <TitleHeaderWrap
      title="Schemas"
      header="A schema is like a template for credential that issuers and verifiers
    use. It includes specific credential attributes such as name, license
    number, issue date etc."
    >
      <div className="mb-6 flex justify-between">
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("name")?.setFilterValue(e.target.value)
          }
          className="mr-3"
          placeholder="Search schema"
        />
        <div className="flex items-center">
          <SchemaCreateButton />
        </div>
      </div>

      <CustomTable
        table={table}
        emptyImgName="addFiles"
        emptyText={emptyText}
      />
    </TitleHeaderWrap>
  );
}
