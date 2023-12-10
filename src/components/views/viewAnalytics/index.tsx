import { TitleWithTabsWrap } from "@/components/reusables/titleWithTabsWrap";
import { ANALYTICS_MENU_TABS } from "./analyticsMenuTabs";
import { Button } from "@/components/ui/button";
import { AnalyticsDateTabsChip } from "./analyticsDateTabsChip";
import { AnalyticsDoughnut } from "./analyticsDoughnut";

export function ViewAnalyticsCertificates() {
  return (
    <TitleWithTabsWrap title="Analytics" tabs={ANALYTICS_MENU_TABS}>
      <div className="flex justify-between mb-6">
        <div className="flex items-center space-x-3">
          <AnalyticsDateTabsChip />
          <Button variant="outline">
            <img
              className="h-5 w-5 mr-2"
              src="/calendar.svg"
              alt="CalendarIcon"
            />
            <span>Custom date</span>
          </Button>
          <Button variant="outline">
            <img className="h-5 w-5 mr-2" src="/filter.svg" alt="FilterIcon" />
            <span>Filters</span>
          </Button>
        </div>
        <Button>Export</Button>
      </div>

      <div className="flex">
        <div className="p-4 border rounded">
          <div className="text-lg font-semibold mb-4">Credentials</div>
          <AnalyticsDoughnut />
        </div>
      </div>
    </TitleWithTabsWrap>
  );
}
