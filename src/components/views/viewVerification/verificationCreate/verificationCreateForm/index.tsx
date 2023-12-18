import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CustomInput } from "@/components/reusables/customInput";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

const verificationCreateSchema = z.object({
  templateTitle: z.string().min(1, "Required"),
  templatePurpose: z.string().min(1, "Required"),
});

const defaultValues: Partial<VerificationCreateSchema> = {};

type VerificationCreateSchema = z.infer<typeof verificationCreateSchema>;

interface VerificationCreateProps extends HTMLAttributes<HTMLDivElement> {}

export function VerificationCreateForm({
  className,
  ...props
}: VerificationCreateProps) {
  const form = useForm<VerificationCreateSchema>({
    resolver: zodResolver(verificationCreateSchema),
    defaultValues: defaultValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: VerificationCreateSchema) {
    console.log(data);
    closeRef.current?.click();
  }

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <CustomInput
              form={form}
              name="templateTitle"
              label="Template Title"
              type="text"
            />
            <div className="ml-auto space-x-2">
              <Button
                type="button"
                onClick={() => closeRef.current?.click()}
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit">Create</Button>
            </div>
            <SheetClose ref={closeRef} />
          </div>
        </form>
      </Form>
    </div>
  );
}
