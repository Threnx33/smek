import { Button } from "@/components/ui/button";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { BADGES_MENU_TABS } from "../badgesMenuTabs";

export function ViewBadgesIssue() {
  return (
    <TitleWithTabsWrap title="Badges" tabs={BADGES_MENU_TABS}>
      <div className="flex justify-between mb-6">
        <div></div>
        <div className="flex items-center">
          <Button variant="outline" className="mr-3">
            <img className="h-5 w-5 mr-2 " src="/import.svg" alt="importIcon" />
            Download CSV Template
          </Button>
          <Button className="mr-3">
            <img
              className="h-5 w-5 mr-2"
              src="/exportWhite.svg"
              alt="exportWhiteIcon"
            />
            Upload CSV
          </Button>
        </div>
      </div>
      <div className="text-center font-normal text-sm flex justify-center mt-14">
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
