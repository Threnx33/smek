import { HTMLAttributes, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

import { CustomInput } from "@/components/reusables/customInput";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { CustomSelect } from "@/components/reusables/customSelect";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { inputStyles } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

const schema = z.object({
  publicName: z.string().min(1, "Required"),
  description: z.string(),
  didType: z.string().min(1, "Required"),
});

const defaultValues: Partial<ApiKeysCreateSchema> = {
  publicName: "",
  description: "",
  didType: "",
};

type ApiKeysCreateSchema = z.infer<typeof schema>;

interface ApiKeysCreateProps extends HTMLAttributes<HTMLDivElement> {}

export function ApiKeysCreateForm({ className, ...props }: ApiKeysCreateProps) {
  const form = useForm<ApiKeysCreateSchema>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: ApiKeysCreateSchema) {
    console.log(data);
    closeRef.current?.click();
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        "kjsdiuk093kjskdjfiuetWJF093kjdiflekamcoeir2745kdfg",
      );
      toast({ description: "DID coppied" });
    } catch (err: any) {
      toast({ description: "Couldn't copy DID" });
    }
  };

  const handleAdd = () => {};

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <div className="mb-2 text-sm font-medium">API key</div>
            <div className="mb-6 flex space-x-0">
              <div
                className={cn(
                  inputStyles(),
                  "overflow-hidden rounded-r-none border-r-0 text-cMediumGrey",
                )}
              >
                <span>kjsdiuk093kjskdjfiuetWJF093kjdiflekamcoeir2745kdfg</span>
              </div>
              <div>
                <Button
                  type="button"
                  className="rounded-l-none"
                  onClick={handleCopy}
                >
                  Copy
                </Button>
              </div>
            </div>

            <Separator className="mb-6" />

            <div className="mb-2 text-sm font-medium">
              IP Whitelist (optional)
            </div>
            <div className="mb-2 flex space-x-0">
              <div
                className={cn(
                  inputStyles(),
                  "overflow-hidden rounded-r-none border-r-0 text-cMediumGrey",
                )}
              >
                <span>127.0.0.1</span>
              </div>
              <div>
                <Button
                  type="button"
                  className="rounded-l-none"
                  onClick={handleAdd}
                >
                  Add
                </Button>
              </div>
            </div>
            <div className="mb-10 text-xs text-cMediumGrey">
              Optionally add additional security by configuring IP’s that are
              allowed to access your services.
            </div>

            <div className="ml-auto space-x-2">
              <Button
                type="button"
                onClick={() => closeRef.current?.click()}
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit">Continue</Button>
            </div>
            <SheetClose ref={closeRef} />
          </div>
        </form>
      </Form>
    </div>
  );
}
