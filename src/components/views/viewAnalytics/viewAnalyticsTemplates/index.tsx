import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { ANALYTICS_MENU_TABS } from "../analyticsMenuTabs";
import { Button } from "@/components/ui/button";
import { AnalyticsDateTabsChip } from "../analyticsDateTabsChip";
import { AnalyticsDoughnut } from "../analyticsDoughnut";
import { AnalyticsTextChip } from "../analyticsTextChip";
import { AnalyticsLineGraph } from "../analyticsLineGraph";
import { AnalyticsFilterButton } from "../analyticsFilter";

export function ViewAnalyticsTemplates() {
  return (
    <TitleWithTabsWrap title="Analytics" tabs={ANALYTICS_MENU_TABS}>
      <div className="flex justify-between mb-6">
        <div className="flex items-center space-x-2">
          <AnalyticsDateTabsChip />
          <Button variant="outline">
            <img
              className="h-5 w-5 mr-2"
              src="/calendar.svg"
              alt="CalendarIcon"
            />
            <span>Custom date</span>
          </Button>
          <AnalyticsFilterButton />
        </div>
        <Button>Export</Button>
      </div>

      <div className="flex mb-6">
        <div className="p-4 border rounded-lg mr-4">
          <div className="text-lg font-semibold mb-4">Credentials</div>
          <AnalyticsDoughnut />
        </div>
        <div className="flex flex-col flex-grow space-y-4">
          <div className="flex  space-x-4">
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
          </div>
          <div className="flex space-x-4">
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
