import { Button } from "@/components/ui/button";

export function DotsButton() {
  return (
    <Button variant="outline" className="px-3">
      <img className="h-5 w-5 " src="/dots.svg" alt="DotsIcon" />
    </Button>
  );
}
