import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "../../../reusables/customTable";
import { BadgesTemplatesIssueButton } from "./badgesTemplatesIssueButton";
import { BadgesTemplatesFilterButton } from "./badgesTemplatesFilter";
import { TEMPLATES, TEMPLATES_COLUMNS } from "./data";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { BADGES_MENU_TABS } from "../badgesMenuTabs";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import BadgesTemplatesCreateButton from "./badgesTemplatesCreateButton";

export function ViewBadgesTemplates() {
  const table = useCustomTable({ columns: TEMPLATES_COLUMNS, data: TEMPLATES });

  const emptyText = (
    <div className="text-cMediumGrey">
      No badge template created yet. Create your first badge template
    </div>
  );

  return (
    <TitleWithTabsWrap title="Badges" tabs={BADGES_MENU_TABS}>
      <div className="mb-6 flex justify-between">
        <div className="flex items-center">
          <SearchBarChip
            handleOnChange={(e) =>
              table.getColumn("templateName")?.setFilterValue(e.target.value)
            }
            className="mr-3"
            placeholder="Search templates"
          />
          <BadgesTemplatesFilterButton
            table={table}
            className="hidden lg:flex"
          />
        </div>

        <div className="flex items-center">
          <BadgesTemplatesCreateButton className="hidden lg:flex" />

          <BadgesTemplatesIssueButton className="hidden lg:flex" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="shrink-0 px-3">
                <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <BadgesTemplatesFilterButton
                  table={table}
                  className="lg:hidden"
                  variant="mobile"
                />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BadgesTemplatesCreateButton
                  variant="mobile"
                  className="w-full lg:hidden"
                />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BadgesTemplatesIssueButton
                  variant="mobile"
                  className="lg:hidden"
                />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex space-x-2 py-1 pr-2">
                  <img className="h-5 w-5" src="/export.svg" alt="ExportIcon" />
                  <span>Export Template List</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex space-x-2 py-1 pr-2">
                  <img
                    className="h-5 w-5"
                    src="/archive.svg"
                    alt="ArchieveIcon"
                  />
                  <span>View Archived Templates</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyTemplates"
        emptyText={emptyText}
      />
    </TitleWithTabsWrap>
  );
}
