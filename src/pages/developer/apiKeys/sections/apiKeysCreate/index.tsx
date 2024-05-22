import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ApiKeysCreateForm } from "./apiKeysCreateForm";

export function ApiKeysCreate() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex shrink-0 items-center">
          <img
            className="h-5 w-5 md:mr-2"
            src="/addSquareWhite.svg"
            alt="addSquareWhiteIcon"
          />
          <span className="hidden md:inline">Create new API key</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold ">
            Create API Key
          </SheetTitle>
          <SheetDescription>
            <div className="mb-4">
              Keep your API key safe, for security reasons it will not be shown
              again. Please do not share this key. If you forget your API key,
              you will need to delete the existing key and create a new one.
            </div>
            <div>API endpoint: https://api-testnet.skillquiver.com</div>
          </SheetDescription>
        </SheetHeader>

        <ApiKeysCreateForm />
      </SheetContent>
    </Sheet>
  );
}
