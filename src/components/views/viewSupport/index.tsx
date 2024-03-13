import { Button } from "@/components/ui/button";
import { ActivityLineGraph } from "./sections/activityLineGraph";
import { ActivityTable } from "./sections/activityTable";
import { ActivityWrapper } from "./sections/activityWrapper";

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

      <div className={`mb-[2rem] w-full rounded-lg border p-6 `}>
        <div className="header flex items-center justify-between">
          <div className="flex w-4/12 flex-col">
            <div className="mb-1 text-sm font-semibold">Test Mode Data</div>
            <div className="text-sm ">
              Clear all of your test data in one click, useful for testing or
              when the chain resets
            </div>
          </div>

          <Button variant="destructive">Delete all test data</Button>
        </div>
      </div>
    </ActivityWrapper>
  );
}
