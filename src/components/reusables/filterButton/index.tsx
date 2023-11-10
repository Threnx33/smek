import { Button } from "@/components/ui/button";

export function FilterButton() {
  return (
    <Button variant="outline">
      <img className="h-5 w-5 mr-2" src="/filter.svg" alt="FilterIcon" />
      <span>Filters</span>
    </Button>
  );
}
