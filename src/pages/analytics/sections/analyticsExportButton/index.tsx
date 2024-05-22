import { Button } from "@/components/ui/button";

type AnalyticsExportButtonProps = {
  className?: string;
  variant?: "desktop" | "mobile";
};

export function AnalyticsExportButton({
  className,
  variant,
}: AnalyticsExportButtonProps) {
  return (
    <>
      {variant !== "mobile" ? (
        <Button className={`${className}`}>Export</Button>
      ) : (
        <div className="flex space-x-2 py-1 pr-2">
          <img className="mr-2 h-5 w-5" src="/export.svg" alt="ExportIcon" />
          <span>Export</span>
        </div>
      )}
    </>
  );
}
