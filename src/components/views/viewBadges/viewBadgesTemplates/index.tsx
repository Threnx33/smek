import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { FilterButton } from "@/components/reusables/filterButton";
import { Link } from "react-router-dom";
import {
  TableDataProps,
  useCustomTable,
} from "@/components/reusables/useCustomTable";
import { CustomTable } from "../../../reusables/customTable";
import { BadgesWrap } from "@/components/reusables/badgesWrap";
import { BadgesTemplatesIssueButton } from "./badgesTemplatesIssueButton";
import { BadgesTemplatesFilterButton } from "./badgesTemplatesFilter";

export function ViewBadgesTemplates<TData, TValue>({
  columns,
  data,
}: TableDataProps<TData, TValue>) {
  const table = useCustomTable({ columns, data });

  const emptyText = (
    <div className="text-cMediumGrey">
      No badge template created yet. Create your first badge template
    </div>
  );

  return (
    <BadgesWrap>
      <div className="flex justify-between mb-6">
        <div className="flex items-center">
          <SearchBarChip
            table={table}
            className="mr-3"
            placeholder="Search templates"
            searchBy="templateName"
          />
          <BadgesTemplatesFilterButton />
        </div>

        <div className="flex items-center">
          <Link to="create">
            <Button className="mr-3">
              <img
                className="h-5 w-5 mr-2"
                src="/addSquareWhite.svg"
                alt="addSquareWhiteIcon"
              />
              Create Template
            </Button>
          </Link>

          <BadgesTemplatesIssueButton />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-3">
                <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div className="flex space-x-2 pr-2 py-1">
                  <img className="h-5 w-5" src="/export.svg" alt="ExportIcon" />
                  <span>Export Template List</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex space-x-2 pr-2 py-1">
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
    </BadgesWrap>
  );
}
