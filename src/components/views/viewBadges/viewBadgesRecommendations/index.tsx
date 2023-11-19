import { SearchBarChip } from "@/components/reusables/searchBarChip";
import {
  TableDataProps,
  useCustomTable,
} from "@/components/reusables/useCustomTable";
import { CustomTable } from "@/components/reusables/customTable";
import { BadgesWrap } from "@/components/uiComponents/badgesWrap";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ViewBadgesRecommendations<TData, TValue>({
  columns,
  data,
}: TableDataProps<TData, TValue>) {
  const table = useCustomTable({ columns, data });

  const emptyText = (
    <div className="text-cMediumGrey text-center">
      No available history data to present. Check back later.
    </div>
  );

  return (
    <BadgesWrap>
      <div className="flex justify-between mb-6">
        <SearchBarChip
          table={table}
          className="mr-3"
          placeholder="Search recommendations"
          searchBy="templateName"
        />
        <div className="flex items-center">
          <Button className="mr-3">
            <img
              className="h-5 w-5 mr-2"
              src="/addSquareWhite.svg"
              alt="addSquareWhiteIcon"
            />
            Create Recommendation
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-3">
                <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div className="flex space-x-2">
                  <img className="h-5 w-5" src="/export.svg" alt="ExportIcon" />
                  <span>Export Recommendations List</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <CustomTable
        table={table}
        emptyImgName="emptyRecommandations"
        emptyText={emptyText}
      />
    </BadgesWrap>
  );
}
