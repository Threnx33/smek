import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { CustomInput } from "@/components/reusables/customInput";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SheetClose } from "@/components/ui/sheet";
import { VerificationCreateFormCredentialItem } from "./verificationCreateFormCredentialItem";
import { v4 as uuidv4 } from "uuid";

export const attributeSchema = z.object({
  type: z.string(),
  value: z.string().min(1, "Required"),
  matchingData: z.string().min(1, "Required"),
});

export type AttributeType = z.infer<typeof attributeSchema>;

const credentialSchema = z.object({
  attributes: z.array(attributeSchema),
  myType: z.string().min(1, "Required"),
});

const verificationCreateSchema = z.object({
  templateTitle: z.string().min(1, "Required"),
  templatePurpose: z.string().min(1, "Required"),
  credentials: z.array(credentialSchema),
});

const DEFAULT_CREDENTIALS = [
  {
    attributes: [
      { type: "subjectID", value: "", matchingData: "" },
      { type: "credentialType", value: "", matchingData: "" },
    ],
    myType: "",
  },
];

const defaultValues: Partial<VerificationCreateSchema> = {
  templateTitle: "",
  templatePurpose: "",
  credentials: DEFAULT_CREDENTIALS,
};

export type VerificationCreateSchema = z.infer<typeof verificationCreateSchema>;

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

  const credentialsArray = useFieldArray({
    control: form.control,
    name: "credentials",
  });

  return (
    <div className={className} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <CustomInput
              form={form}
              description="This will be used for reference only by yourself and the credential holder"
              name="templateTitle"
              label="Template Title"
              type="text"
            />

            <Separator className="mb-6 mt-2" />

            <CustomInput
              form={form}
              description="This will be used for reference only by yourself and the credential holder"
              name="templatePurpose"
              label="Template Purpose"
              type="text"
            />

            <Separator className="mb-6 mt-2" />

            <div className="text-sm font-medium mb-1">Credential Requests</div>
            <div
              className={`text-sm mb-1 ${
                credentialsArray.fields.length === 0 && "mb-4"
              }`}
            >
              A verification can return as either valid or invalid. Define what
              constitutes a valid verification. Fields must match the credential
              schema exactly.
            </div>

            {credentialsArray.fields.map((_, i) => (
              <VerificationCreateFormCredentialItem
                form={form}
                i={i}
                credentialsArray={credentialsArray}
                key={uuidv4()}
              />
            ))}

            <Button
              type="button"
              onClick={() => credentialsArray.append(DEFAULT_CREDENTIALS)}
              variant="outline"
              className="mb-6 ml-auto"
            >
              Request another credential
            </Button>

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
