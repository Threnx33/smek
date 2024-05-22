import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgesTemplateWrap } from "@/pages/badges/badgesTemplates/badgesTemplateWrap";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { BadgesTemplatesIssueButton } from "../badgesTemplatesIssueButton";
import { TEMPLATES } from "../data";

const BADGES_DETAILS_MORE_BUTTON = [
  { label: "Edit", img: "edit" },
  { label: "Duplicate", img: "copy" },
  { label: "Archive", img: "directInbox" },
  { label: "Preview", img: "preview" },
];

const BADGES_DETAILS_ATTRIBUTES = [
  { label: "Certification", img: "documentText" },
  { label: "Foundational", img: "layer" },
  { label: "Months", img: "clock" },
  { label: "Paid", img: "dollarSquare" },
];

const BADGES_DETAILS_SKILLS = [
  "Communication",
  "Design Thinking",
  "Emotional Intelligence",
  "Problem Solving",
  "Self Awareness",
  "Teamwork",
];

export function BadgesTemplatesDetails() {
  const id = useLocation().pathname.split("/").pop();

  const template = useMemo(
    () => TEMPLATES.find((template) => template.id === id),
    []
  );

  const headerText = (text: string) => (
    <div className="mb-4 rounded-xl bg-cLightGreyBg px-5 py-3 text-cMediumGrey ">
      {text}
    </div>
  );

  return (
    <BadgesTemplateWrap>
      <div className="flex flex-col text-sm">
        <div className="mb-3 ml-auto flex items-center xl:mb-6">
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
              {BADGES_DETAILS_MORE_BUTTON.map((item) => (
                <DropdownMenuItemNoPropagation key={item.label}>
                  <div className="flex space-x-2 py-1 pr-2">
                    <img
                      className="h-5 w-5"
                      src={`/${item.img}.svg`}
                      alt={`${item.img}Icon`}
                    />
                    <span>{item.label}</span>
                  </div>
                </DropdownMenuItemNoPropagation>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-col items-center xl:flex-row xl:items-start">
          <img
            className="mb-4 h-52 w-52 sm:h-72 sm:w-72 xl:mx-14"
            src={template?.imgSrc}
            alt="BadgeImage"
          />
          <div className="flex w-full flex-col">
            {headerText("Badge Details")}
            <div className="mb-4 flex space-x-6">
              <div className="flex flex-col space-y-2 text-cMediumGrey">
                <span>Template ID:</span>
                <span>Issued by:</span>
              </div>
              <div className="flex flex-col space-y-2 font-medium">
                <span>21d21333-287a-4db1-a972-380a87cae516</span>
                <span>The NSLS</span>
              </div>
            </div>
            <div className="mb-4">
              The Foundations of Leadership - International badge is issued to
              students in Latin America who have completed the Fundamentos de
              Liderazgo 96-hour course.
            </div>
            <TextMainWrap className="mb-6">Learn more</TextMainWrap>

            {headerText("Badge Attributes")}
            <div className="mb-6 space-y-2">
              {BADGES_DETAILS_ATTRIBUTES.map((item) => (
                <div
                  key={item.label}
                  className="mr-3 inline-flex items-center space-x-2 rounded-full border px-5 py-3"
                >
                  <img
                    className="h-5 w-5"
                    src={`/${item.img}.svg`}
                    alt={`${item.img}Icon`}
                  />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {headerText("Skills")}
            <div className="mb-6 space-y-2">
              {BADGES_DETAILS_SKILLS.map((item) => (
                <div
                  key={item}
                  className="mr-3 inline-flex items-center rounded-full border px-5 py-3"
                >
                  {item}
                </div>
              ))}
            </div>

            {headerText("Criteria")}
            <div className="mb-4">
              The Fundamentos de Liderazgo (FOL-International) leadership course
              badge signifies that a foundational level of leadership has been
              achieved. The recipient has demonstrated an understanding of
              personal leadership through goal setting, demonstrated effective
              communication, worked in teams to achieve, and applied data-based
              problem solving strategies to address issues provided by
              real-world executives.
            </div>
            <TextMainWrap className="mb-6">Learn more</TextMainWrap>
          </div>
        </div>
      </div>
    </BadgesTemplateWrap>
  );
}
