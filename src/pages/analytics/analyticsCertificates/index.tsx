import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { ANALYTICS_MENU_TABS } from "../sections/analyticsMenuTabs";
import { Button } from "@/components/ui/button";
import { AnalyticsDateTabsChip } from "../sections/analyticsDateTabsChip";
import { AnalyticsDoughnut } from "../sections/analyticsDoughnut";
import { AnalyticsTextChip } from "../sections/analyticsTextChip";
import { AnalyticsLineGraph } from "../sections/analyticsLineGraph";
import { AnalyticsFilterButton } from "../sections/analyticsFilter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnalyticsExportButton } from "../sections/analyticsExportButton";
import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";

export function AnalyticsCertificates() {
  return (
    <TitleWithTabsWrap title="Analytics" tabs={ANALYTICS_MENU_TABS}>
      <div className="mb-4 flex items-center xl:mb-6">
        <div className="flex items-center xl:space-x-2">
          <AnalyticsDateTabsChip />
          <Button variant="outline" className="hidden xl:flex">
            <img
              className="mr-2 h-5 w-5"
              src="/calendar.svg"
              alt="CalendarIcon"
            />
            <span>Custom date</span>
          </Button>
          <AnalyticsFilterButton className="hidden xl:flex" />
        </div>

        <AnalyticsExportButton className="ml-auto hidden xl:flex" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto shrink-0 px-3 xl:hidden"
            >
              <img className="h-5 w-5" src="/dots.svg" alt="DotsIcon" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItemNoPropagation>
              <AnalyticsFilterButton variant="mobile" />
            </DropdownMenuItemNoPropagation>
            <DropdownMenuItemNoPropagation>
              <AnalyticsExportButton variant="mobile" />
            </DropdownMenuItemNoPropagation>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center rounded-lg border p-2 sm:items-start sm:p-4">
          <div className="mb-4 text-lg font-semibold">Credentials</div>
          <AnalyticsDoughnut />
        </div>
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <AnalyticsTextChip
            title="Acceptance Rate"
            percentage="100%"
            average="67%"
          />
          <AnalyticsTextChip
            title="Share Rate"
            percentage="57%"
            average="47%"
          />
          <AnalyticsTextChip
            title="Views per Share"
            percentage="1.08"
            average="3.28"
          />
          <AnalyticsTextChip
            title="Clicks per View"
            percentage="0.31"
            average="0.98"
          />
        </div>
      </div>

      <AnalyticsLineGraph
        title="Issued"
        total="1,230"
        dataValues={[100, 150, 200, 140, 80, 140, 300, 160, 200, 130, 180, 100]}
        step={100}
      />
      <AnalyticsLineGraph
        title="Accepted"
        total="986"
        dataValues={[
          200, 180, 220, 300, 240, 260, 280, 240, 220, 200, 180, 160,
        ]}
        step={100}
      />
      <AnalyticsLineGraph
        title="Shares"
        total="9,872"
        dataValues={[
          40000, 30000, 20000, 25000, 20000, 30000, 50000, 40000, 30000, 20000,
          30000, 20000,
        ]}
        step={10000}
      />
      <AnalyticsLineGraph
        title="Views"
        total="872k"
        dataValues={[
          200000, 100000, 150000, 250000, 200000, 225000, 350000, 300000,
          250000, 200000, 150000, 100000,
        ]}
        step={100000}
      />
      <AnalyticsLineGraph
        title="Clicks"
        total="982k"
        dataValues={[
          400000, 300000, 200000, 250000, 200000, 300000, 500000, 400000,
          300000, 200000, 300000, 200000,
        ]}
        step={100000}
      />
    </TitleWithTabsWrap>
  );
}
