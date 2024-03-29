import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { useCustomTable } from "@/components/reusables/useCustomTable";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { CustomTable } from "../../../reusables/customTable";
import { CERTIFICATES_MENU_TABS } from "../certificatesMenuTabs";
import { BadgesTemplatesFilterButton } from "./badgesTemplatesFilter";
import { BadgesTemplatesIssueButton } from "./badgesTemplatesIssueButton";
import { TEMPLATES, TEMPLATES_COLUMNS } from "./data";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";

export function ViewCertificatesTemplates() {
  const table = useCustomTable({ columns: TEMPLATES_COLUMNS, data: TEMPLATES });

  const emptyText = (
    <div className="text-cMediumGrey">
      No certificate template created yet. Create your first certificate
      template
    </div>
  );

  return (
    <TitleWithTabsWrap title="Certificates" tabs={CERTIFICATES_MENU_TABS}>
      <div className="mb-6 flex justify-between">
        <div className="flex items-center">
          <SearchBarChip
            handleOnChange={(e) =>
              table.getColumn("templateName")?.setFilterValue(e.target.value)
            }
            className="mr-3"
            placeholder="Search templates"
          />
          <BadgesTemplatesFilterButton table={table} />
        </div>

        <div className="flex items-center">
          <Link to="create">
            <Button className="mr-3">
              <img
                className="mr-2 h-5 w-5"
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
              <DropdownMenuItemNoPropagation>
                <div className="flex space-x-2 py-1 pr-2">
                  <img className="h-5 w-5" src="/export.svg" alt="ExportIcon" />
                  <span>Export Template List</span>
                </div>
              </DropdownMenuItemNoPropagation>
              <DropdownMenuItemNoPropagation>
                <div className="flex space-x-2 py-1 pr-2">
                  <img
                    className="h-5 w-5"
                    src="/archive.svg"
                    alt="ArchieveIcon"
                  />
                  <span>View Archived Templates</span>
                </div>
              </DropdownMenuItemNoPropagation>
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
