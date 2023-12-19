import { BadgesTemplateWrap } from "@/components/views/viewBadges/viewBadgesTemplates/badgesTemplateWrap";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "@/components/constants/values";
import { cn } from "@/lib/utils";

export function ViewBadgesTemplatesInsights() {
  return (
    <BadgesTemplateWrap>
      <div className="flex flex-col flex-grow">
        <div className="ml-auto flex items-center mb-6">
          <span className="font-medium w-fit mr-10">Show results for</span>
          <div className="w-80 mr-4">
            <Select>
              <SelectTrigger id="countries">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
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
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
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
          <div className="text-cMediumGrey text-center">
            No analytics available for United States at this time.
          </div>
        </div>
      </div>
    </BadgesTemplateWrap>
  );
}
