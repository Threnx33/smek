import { Button } from "@/components/ui/button";
import { ActivityLineGraph } from "./sections/activityLineGraph";
import { ActivityTable } from "./sections/activityTable";
import { ActivityWrapper } from "./sections/activityWrapper";
import TitleHeaderButtonCard from "@/components/reusables/titleHeaderButtonCard";

export function ViewActivity() {
  return (
    <ActivityWrapper>
      <ActivityLineGraph
        className="mb-[2rem]"
        title="Transaction History"
        total=""
        dataValues={[10, 15, 20, 15, 9, 14, 30, 18, 20, 14, 18, 10, 45]} // These values should come from your data
        step={10}
      />

      <ActivityTable />

      <TitleHeaderButtonCard
        title="Test Mode Data"
        header=" Clear all of your test data in one click, useful for testing or when the chain resets"
        buttonText="Delete all test data"
      />
    </ActivityWrapper>
  );
}
