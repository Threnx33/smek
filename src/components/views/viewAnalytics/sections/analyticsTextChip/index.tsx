type AnalyticsTextChipProps = {
  title: string;
  percentage: string;
  average: string;
};

export function AnalyticsTextChip({
  title,
  percentage,
  average,
}: AnalyticsTextChipProps) {
  return (
    <div className="relative flex rounded-lg border p-2 sm:p-4">
      <img
        className="absolute right-2 top-2 h-5 w-5 shrink-0 cursor-pointer"
        src="/infoCircle.svg"
        alt="InfoCircleImage"
      />

      <div className="mr-4 h-10 w-10 shrink-0 rounded-lg border"></div>
      <div className="mr-4 flex flex-col space-y-3">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-4xl font-semibold">{percentage}</div>
        <div className="text-sm text-cMediumGrey">
          Skillquiver average is {average}
        </div>
      </div>
    </div>
  );
}
