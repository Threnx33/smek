import { MainWrap } from "@/components/reusables/mainWrap";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { Button } from "@/components/ui/button";
import { CustomTable } from "../../../reusables/customTable";
import { TEAMS, TEAMS_COLUMNS } from "./data";

export function ViewTeamPreferences() {
  const table = useCustomTable({ columns: TEAMS_COLUMNS, data: TEAMS });
  const emptyText = <div className="text-cMediumGrey">No team</div>;

  return (
    <MainWrap>
      <div className="flex items-start">
        <div className="flex-1">
          <div className="mb-2 select-none text-2xl font-semibold">
            Team Preference
          </div>
          <div className=" mb-5 w-7/12 select-none">
            Learn about <TextMainWrap>team management</TextMainWrap> and{" "}
            <TextMainWrap>adding roles</TextMainWrap>
          </div>
        </div>
        <Button className="ml-auto" type="submit">
          Invite team member
        </Button>
      </div>
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("templateName")?.setFilterValue(e.target.value)
          }
          className="mb-4"
          placeholder="Search templates"
        />
        <CustomTable
          table={table}
          emptyImgName="emptyTemplates"
          emptyText={emptyText}
          noSelections
        />
      </div>
    </MainWrap>
  );
}
