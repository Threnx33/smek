import { useCustomTable } from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgesRecommendationsCreate } from "./badgesRecommendationsCreate";
import { RECOMMENDATIONS, RECOMMENDATIONS_COLUMNS } from "./data";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { BADGES_MENU_TABS } from "../badgesMenuTabs";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";

export function ViewBadgesRecommendations() {
  const table = useCustomTable({
    columns: RECOMMENDATIONS_COLUMNS,
    data: RECOMMENDATIONS,
  });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      No available recommendations. Check back later.
    </div>
  );

  return (
    <TitleWithTabsWrap title="Badges" tabs={BADGES_MENU_TABS}>
      <div className="mb-6 flex justify-between">
        <SearchBarChip
          handleOnChange={(e) =>
            table.getColumn("templateName")?.setFilterValue(e.target.value)
          }
          className="mr-3"
          placeholder="Search recommendations"
        />
        <div className="flex items-center">
          <BadgesRecommendationsCreate className="hidden xl:flex" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="shrink-0 px-3">
                <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItemNoPropagation className="xl:hidden">
                <BadgesRecommendationsCreate variant="mobile" />
              </DropdownMenuItemNoPropagation>
              <DropdownMenuItemNoPropagation>
                <div className="flex space-x-2 py-1 pr-2">
                  <img className="h-5 w-5" src="/export.svg" alt="ExportIcon" />
                  <span>Export Recommendations List</span>
                </div>
              </DropdownMenuItemNoPropagation>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyRecommandations"
        emptyText={emptyText}
      />
    </TitleWithTabsWrap>
  );
}
