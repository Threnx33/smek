import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelectWithLabels } from "@/components/reusables/customSelectWithLabels";
import { CustomTextarea } from "@/components/reusables/customTextarea";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

const schema = z.object({
  url: z.string(),
  description: z.string(),
  events: z.string(),
});

const defaultValues: Partial<WebHookCreateSchema> = {
  url: "",
  description: "",
  events: "",
};

type WebHookCreateSchema = z.infer<typeof schema>;

interface WebHookCreateProps extends HTMLAttributes<HTMLDivElement> {}

export function WebHookCreateForm({ className, ...props }: WebHookCreateProps) {
  const form = useForm<WebHookCreateSchema>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: WebHookCreateSchema) {
    closeRef.current?.click();
  }

  const events: { variant: "label" | "item"; text: string }[] = [
    { variant: "label", text: "Anchor" },
    { variant: "item", text: "anchor_create" },
    { variant: "label", text: "Credential" },
    { variant: "item", text: "credential_issued" },
    { variant: "item", text: "credential_revoke" },
    { variant: "item", text: "credential_unrevoke" },
    { variant: "label", text: "DID" },
    { variant: "item", text: "did_create" },
    { variant: "item", text: "did_delete" },
    { variant: "item", text: "did_update_controller" },
    { variant: "item", text: "did_update_key" },
    { variant: "label", text: "Presentation" },
  ];

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <CustomInput
              form={form}
              name="url"
              label="Endpoint URL"
              type="text"
              placeholder="https://"
            />

            <CustomTextarea
              form={form}
              name="description"
              label="Description"
            />

            <CustomSelectWithLabels
              form={form}
              name="events"
              label="Endpoint Events"
              placeholder="Select events to receive"
              items={events}
            />

            <div className="ml-auto space-x-2">
              <Button
                type="button"
                onClick={() => closeRef.current?.click()}
                variant="outline"
              >
                Cancel
              </Button>
              <Button type="submit">Create Webhook</Button>
            </div>
            <SheetClose ref={closeRef} />
          </div>
        </form>
      </Form>
    </div>
  );
}
