import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WebHookCreateForm } from "./webHookCreateForm";

export function WebHookCreate() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex shrink-0 items-center">
          <img
            className="h-5 w-5 md:mr-2"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          <span className="hidden md:inline">Add Endpoint</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Create Webhook
          </SheetTitle>
          <SheetDescription>
            Create an endpoint and set its events. Failed webhook attempts will
            not be retried.
          </SheetDescription>
        </SheetHeader>

        <WebHookCreateForm />
      </SheetContent>
    </Sheet>
  );
}
