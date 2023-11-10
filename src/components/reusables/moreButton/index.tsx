import { Button } from "@/components/ui/button";

export function MoreButton() {
  return (
    <Button variant="outline" className="px-3">
      <img className="h-5 w-5 " src="/more.svg" alt="FilterIcon" />
    </Button>
  );
}
