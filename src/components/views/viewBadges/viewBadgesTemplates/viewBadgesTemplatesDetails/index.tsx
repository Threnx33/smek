import { BadgesTemplateWrap } from "@/components/reusables/badgesTemplateWrap";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { BadgesTemplatesIssueButton } from "../badgesTemplatesIssueButton";

export function ViewBadgesTemplatesDetails() {
  const template = useSelector((state: RootState) => state.page.template);

  return (
    <BadgesTemplateWrap>
      <div className="flex flex-col">
        <div className="ml-auto flex items-center">
          <BadgesTemplatesIssueButton
            templateName={template?.templateName}
            issuer="Skillquiver"
          />

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
    </BadgesTemplateWrap>
  );
}
