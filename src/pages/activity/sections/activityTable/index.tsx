import { CustomTable } from "@/components/reusables/customTable";
import { useCustomTable } from "@/hooks/useCustomTable";
import { ACTIVITY, ACTIVITY_COLUMNS } from "./data";

export function ActivityTable() {
  const table = useCustomTable({
    columns: ACTIVITY_COLUMNS,
    data: ACTIVITY,
  });

  const emptyText = (
    <div className="text-center text-cMediumGrey">
      No available history data to present. Check back later.{" "}
    </div>
  );

  return (
    <CustomTable
      className="mb-[2rem]"
      table={table}
      emptyImgName="emptyCollections"
      emptyText={emptyText}
      noSelections
      noNextPrev
    />
  );
}
