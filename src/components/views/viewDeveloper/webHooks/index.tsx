import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { TitleHeaderWrap } from "@/components/reusables/titleHeaderWrap";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "../../../reusables/customTable";
import { TEAMS, TEAMS_COLUMNS } from "./data";
import { Button } from "@/components/ui/button";
import { WebHookCreate } from "./sections/webHookCreate";

export function ViewWebHooks() {
  const table = useCustomTable({ columns: TEAMS_COLUMNS, data: TEAMS });
  const emptyText = (
    <div className=" flex flex-col items-center justify-center gap-2">
      <div className="font-medium">Create your first Webhook Endpoint</div>
      <div className="mb-4 text-cMediumGrey">
        Visit our API documentation to learn more about how to get started
      </div>
      <Button variant="outline">Learn more</Button>
    </div>
  );

  return (
    <TitleHeaderWrap
      title="Webhooks Endpoints"
      header="Add or modify webhooks endpoints that will send events when issuing or transactions occur. 
      The endpoint token will be sent in the request body in order to verify the source. Don’t share this token."
    >
      <div className="flex justify-between">
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("apiKey")?.setFilterValue(e.target.value)
          }
          className="mb-4"
          placeholder="Search webhooks"
        />
        <WebHookCreate />
      </div>
      <CustomTable
        table={table}
        emptyImgName="webHookEmpty"
        emptyText={emptyText}
        noSelections
      />
    </TitleHeaderWrap>
  );
}
