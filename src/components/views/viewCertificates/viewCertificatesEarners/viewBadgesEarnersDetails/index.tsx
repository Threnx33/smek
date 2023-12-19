import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { TextMainWrap } from "@/components/reusables/textMainWrap";
import { BadgesEarnerWrap } from "@/components/views/viewBadges/viewBadgesEarners/badgesEarnerWrap";

const BADGES_DETAILS_SKILLS = [
  "Communication",
  "Design Thinking",
  "Emotional Intelligence",
  "Problem Solving",
  "Self Awareness",
  "Teamwork",
];

export function ViewBadgesEarnersDetails() {
  const earner = useSelector((state: RootState) => state.page.earner);

  const headerText = (text: string) => (
    <div className="bg-cLightGreyBg text-cMediumGrey px-5 py-3 rounded-xl mb-4 ">
      {text}
    </div>
  );

  return (
    <BadgesEarnerWrap>
      <div className="flex flex-col text-sm">
        <div className="ml-auto flex items-center space-x-2 mb-6">
          <Button>Revoke</Button>
          <Button>Replace</Button>
          <Button>Delete</Button>
        </div>

        <div className="flex">
          <img className="h-72 w-72 mx-14" src="/badge.png" alt="BadgeImage" />
          <div className="flex flex-col w-full">
            {headerText("Details")}
            <div className="mb-4">
              The Foundations of Leadership - International badge is issued to
              students in Latin America who have completed the Fundamentos de
              Liderazgo 96-hour course.
            </div>
            <div className="flex space-x-6 mb-6">
              <div className="flex flex-col space-y-2 text-cMediumGrey">
                <span>Issued by:</span>
                <span>Issued to:</span>
                <span>Issued on:</span>
                <span>Earner email:</span>
                <span>Record created:</span>
                <span>Created by:</span>
                <span>Badge status:</span>
              </div>
              <div className="flex flex-col space-y-2 font-medium">
                <span>The NSLS</span>
                <TextMainWrap>Lainer Acuna</TextMainWrap>
                <span>06 May 2023</span>
                <span>lainer-09@hotmail.com</span>
                <span>06 May 2023</span>
                <TextMainWrap>The NSLS</TextMainWrap>

                <span>
                  <span className="text-checked">Accepted</span> on 11 May 2023
                </span>
              </div>
            </div>

            {headerText("Skills")}
            <div className="space-y-2 mb-6">
              {BADGES_DETAILS_SKILLS.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center mr-3 px-5 py-3 border rounded-full"
                >
                  {item}
                </div>
              ))}
            </div>

            {headerText("Details")}
            <div className="flex space-x-6 mb-6">
              <div className="flex flex-col space-y-2 text-cMediumGrey">
                <span>Type:</span>
                <span>Level:</span>
                <span>Time:</span>
                <span>Cost:</span>
              </div>
              <div className="flex flex-col space-y-2 font-medium">
                <span>Certification</span>
                <span>Foundational</span>
                <span>Months</span>
                <span>Paid</span>
              </div>
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
    </BadgesEarnerWrap>
  );
}
