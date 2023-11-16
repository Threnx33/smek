import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { FilterButton } from "@/components/reusables/filterButton";
import { BadgeTemplatesIssueButton } from "./badgeTemplatesIssueButton";
import { Link } from "react-router-dom";
import {
  TableDataProps,
  useCustomTable,
} from "@/components/reusables/useCustomTable";
import { CustomTable } from "../../../reusables/customTable";

export function BadgeTemplates<TData, TValue>({
  columns,
  data,
}: TableDataProps<TData, TValue>) {
  const table = useCustomTable({ columns, data });

  return (
    <div>
      <div className="flex justify-between pb-6">
        <div className="flex items-center">
          <SearchBarChip
            table={table}
            className="mr-3"
            placeholder="Search templates"
            searchBy="templateName"
          />
          <FilterButton />
        </div>

        <div className="flex items-center">
          <Link to="create-badge-template">
            <Button className="mr-3">
              <img
                className="h-5 w-5 mr-2"
                src="/addSquareWhite.svg"
                alt="addSquareWhiteIcon"
              />
              Create Template
            </Button>
          </Link>

          <BadgeTemplatesIssueButton />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="px-3">
                <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <CustomTable table={table} />
    </div>
  );
}
