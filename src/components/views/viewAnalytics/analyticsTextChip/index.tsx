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
    <div className="flex border rounded-lg p-6 relative flex-grow">
      <img
        className="h-5 w-5 absolute right-2 top-2 cursor-pointer"
        src="/infoCircle.svg"
        alt="InfoCircleImage"
      />

      <div className="w-10 h-10 border rounded-lg mr-4"></div>
      <div className="flex flex-col space-y-3 mr-4">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-4xl font-semibold">{percentage}</div>
        <div className="text-sm text-cMediumGrey">
          Skillquiver average is {average}
        </div>
      </div>
    </div>
  );
}
