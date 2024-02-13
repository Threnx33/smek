import { Button } from "@/components/ui/button";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { BADGES_MENU_TABS } from "../badgesMenuTabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ViewBadgesIssue() {
  return (
    <TitleWithTabsWrap title="Badges" tabs={BADGES_MENU_TABS}>
      <div className="mb-6 flex justify-between">
        <div></div>
        <div className="flex items-center">
          <div className="hidden xl:flex">
            <Button variant="outline" className="mr-3">
              <img
                className="mr-2 h-5 w-5 "
                src="/import.svg"
                alt="importIcon"
              />
              Download CSV Template
            </Button>
            <Button className="mr-3 ">
              <img
                className="mr-2 h-5 w-5"
                src="/exportWhite.svg"
                alt="exportWhiteIcon"
              />
              Upload CSV
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="shrink-0 px-3">
                <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div className="flex space-x-2 py-1 pr-2">
                  <img
                    className="mr-2 h-5 w-5 "
                    src="/import.svg"
                    alt="importIcon"
                  />
                  Download CSV Template
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex space-x-2 py-1 pr-2">
                  <img
                    className="mr-2 h-5 w-5"
                    src="/export.svg"
                    alt="exportIcon"
                  />
                  Upload CSV
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mt-14 flex justify-center text-center text-sm font-normal">
        <div className="w-9/12">
          Upload a comma delimited text file (.csv) of up to 5,000 rows to
          import a list of badge earners to skillquiver. Be sure your CSV file
          is in the <TextMainWrap>required format</TextMainWrap> and all
          required fields are completed. Access your organization{" "}
          <TextMainWrap>template IDs</TextMainWrap> for setting up your CSV
          file.
        </div>
      </div>
    </TitleWithTabsWrap>
  );
}
