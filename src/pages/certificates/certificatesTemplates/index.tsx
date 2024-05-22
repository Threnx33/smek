import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";
import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCustomTable } from "@/hooks/useCustomTable";
import { CustomTable } from "../../../components/reusables/customTable";
import { CERTIFICATES_MENU_TABS } from "../certificatesMenuTabs";
import CertificatesTemplatesCreateButton from "./certificatesTemplatesCreateButton";
import { CertificatesTemplatesFilterButton } from "./certificatesTemplatesFilter";
import { CertificatesTemplatesIssueButton } from "./certificatesTemplatesIssueButton";
import { TEMPLATES, TEMPLATES_COLUMNS } from "./data";

export function CertificatesTemplates() {
  const table = useCustomTable({ columns: TEMPLATES_COLUMNS, data: TEMPLATES });

  const emptyText = (
    <div className="text-cMediumGrey">
      No certificate template created yet. Create your first certificate
      template
    </div>
  );

  const toggleDropdown = (e: Event) => {
    e.preventDefault();
  };

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
          <CertificatesTemplatesFilterButton
            table={table}
            className="hidden xl:flex"
          />
        </div>

        <div className="flex items-center">
          <CertificatesTemplatesCreateButton className="hidden xl:flex" />

          <CertificatesTemplatesIssueButton className="hidden xl:flex" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="shrink-0 px-3">
                <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItemNoPropagation className="xl:hidden">
                <CertificatesTemplatesFilterButton
                  table={table}
                  variant="mobile"
                />
              </DropdownMenuItemNoPropagation>
              <DropdownMenuItemNoPropagation className="xl:hidden">
                <CertificatesTemplatesCreateButton variant="mobile" />
              </DropdownMenuItemNoPropagation>
              <DropdownMenuItemNoPropagation className="xl:hidden">
                <CertificatesTemplatesIssueButton variant="mobile" />
              </DropdownMenuItemNoPropagation>
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
