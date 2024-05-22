import { COUNTRIES } from "@/components/constants/names";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BadgesTemplateWrap } from "@/pages/badges/badgesTemplates/badgesTemplateWrap";

export function BadgesTemplatesInsights() {
  return (
    <BadgesTemplateWrap>
      <div className="flex flex-grow flex-col">
        <div className="mb-6 ml-auto flex items-center">
          <span className="mr-10 hidden w-fit font-medium xl:flex">
            Show results for
          </span>
          <div className="mr-2 sm:mr-4 md:min-w-[20rem]">
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
          <div className="md:min-w-[20rem]">
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
        <div className="flex flex-grow flex-col items-center justify-center">
          <img
            className="mb-10"
            src="/emptyIllustration.png"
            alt="emptyIllustrationImage"
          />
          <div className="text-center text-cMediumGrey">
            No analytics available for United States at this time.
          </div>
        </div>
      </div>
    </BadgesTemplateWrap>
  );
}
