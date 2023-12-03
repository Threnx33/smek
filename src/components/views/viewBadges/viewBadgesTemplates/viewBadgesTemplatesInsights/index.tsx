import { BadgesTemplateWrap } from "@/components/reusables/badgesTemplateWrap";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "@/components/constants/values";

export function ViewBadgesTemplatesInsights() {
  const template = useSelector((state: RootState) => state.page.template);

  return (
    <BadgesTemplateWrap>
      <div className="flex flex-col">
        <div className="ml-auto flex items-center mb-6">
          <span className="font-medium w-fit mr-10">Show results for</span>
          <div className="w-80 mr-4">
            <Select>
              <SelectTrigger id="countries">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((item) => (
                  <SelectItem value={item}>{item}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-80">
            <Select>
              <SelectTrigger id="countries">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((item) => (
                  <SelectItem value={item}>{item}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-center items-center">
          <img
            className="mb-10"
            src="/emptyIllustration.png"
            alt="emptyIllustrationImage"
          />
          No analytics available for United States at this time.
        </div>
      </div>
    </BadgesTemplateWrap>
  );
}
