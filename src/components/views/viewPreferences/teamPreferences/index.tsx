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
          <div className=" mb-5 w-11/12 select-none xl:w-7/12">
            Learn about <TextMainWrap>team management</TextMainWrap> and{" "}
            <TextMainWrap>adding roles</TextMainWrap>
          </div>
        </div>
        <Button className="ml-auto" type="submit">
          <div className="hidden md:flex">Invite team member</div>
          <div className="md:hidden">
            <img
              src="/addSquareWhite.svg"
              alt="AddIcon"
              className="h-5 w-5 shrink-0"
            />
          </div>
        </Button>
      </div>
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        <div className="flex">
          <SearchBarChip
            handleOnChange={(e) =>
              table.getColumn("name")?.setFilterValue(e.target.value)
            }
            className="mb-4"
            placeholder="Search name"
          />
        </div>
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
