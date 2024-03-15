import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { TitleHeaderWrap } from "@/components/reusables/titleHeaderWrap";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "../../../reusables/customTable";
import { TEAMS, TEAMS_COLUMNS } from "./data";
import { Button } from "@/components/ui/button";
import { ApiKeysCreate } from "./sections/apiKeysCreate";

export function ViewApiKeys() {
  const table = useCustomTable({ columns: TEAMS_COLUMNS, data: TEAMS });
  const emptyText = (
    <div className=" flex flex-col items-center justify-center gap-2">
      <div className="font-medium">Create your first API key</div>
      <div className="mb-4 text-cMediumGrey">
        Visit our API documentation to learn more about how to get started
      </div>
      <Button variant="outline">Learn more</Button>
    </div>
  );

  return (
    <TitleHeaderWrap
      title="API Keys"
      header="Create an API key and get started with our API documentation"
    >
      <div className="flex justify-between">
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("apiKey")?.setFilterValue(e.target.value)
          }
          className="mb-4"
          placeholder="Search API keys"
        />
        <ApiKeysCreate />
      </div>
      <CustomTable
        table={table}
        emptyImgName="emptyApiKeys"
        emptyText={emptyText}
        noSelections
      />
    </TitleHeaderWrap>
  );
}
