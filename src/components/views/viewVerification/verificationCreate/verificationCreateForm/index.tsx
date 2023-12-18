import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HTMLAttributes, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { CustomInput } from "@/components/reusables/customInput";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomSelectWithLabels } from "@/components/reusables/customSelectWithLabels";

const verificationCreateSchema = z.object({
  templateTitle: z.string().min(1, "Required"),
  templatePurpose: z.string().min(1, "Required"),
  subjectID: z.string().min(1, "Required"),
  subjectMatchingData: z.string().min(1, "Required"),
  credentialType: z.string().min(1, "Required"),
  credentialMatchingData: z.string().min(1, "Required"),
  myType: z.string().min(1, "Required"),
});

const defaultValues: Partial<VerificationCreateSchema> = {
  templateTitle: "",
  templatePurpose: "",
  subjectID: "",
  subjectMatchingData: "",
  credentialType: "",
  credentialMatchingData: "",
  myType: "",
};

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

  const subjectIDItems = [
    "Credential ID",
    "Credential Name",
    "Credential Type",
    "Issue Date",
    "Expiry Date",
    "Subject ID",
    "Subject Name",
    "Issuer ID",
    "Recipient ID",
    "Degree Name",
    "Degree Type",
  ];

  const matchingData: { type: "label" | "item"; text: string }[] = [
    { type: "label", text: "String, Date, Boolean or Number" },
    { type: "item", text: "is equal to" },
    { type: "item", text: "is not equal to" },
    { type: "item", text: "exists" },
  ];

  const myTypeItems = [
    "BasicCredential",
    "UniversityDegree",
    "ProofOfEmployment",
    "CommercialInvoiceSchema",
  ];

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
            <div className="text-sm mb-1">
              A verification can return as either valid or invalid. Define what
              constitutes a valid verification. Fields must match the credential
              schema exactly.
            </div>
            <div className="border rounded-lg px-4 py-3">
              <div className="text-sm mb-2">
                All of the following conditions match
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3">
                  <CustomSelect
                    className="w-1/2"
                    form={form}
                    name="subjectID"
                    label="Subject ID"
                    items={subjectIDItems}
                  />
                  <CustomSelectWithLabels
                    className="w-1/2"
                    form={form}
                    name="subjectMatchingData"
                    label="Matching data"
                    items={matchingData}
                  />
                  <img
                    className="h-5 w-5 cursor-pointer"
                    src="/trash.svg"
                    alt="TrashIcon"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <CustomSelect
                    className="w-1/2"
                    form={form}
                    name="credentialType"
                    label="Credential Type"
                    items={[]}
                  />
                  <CustomSelectWithLabels
                    className="w-1/2"
                    form={form}
                    name="credentialMatchingData"
                    label="Matching Data"
                    items={matchingData}
                  />
                  <img
                    className="h-5 w-5 cursor-pointer"
                    src="/trash.svg"
                    alt="TrashIcon"
                  />
                </div>
                <CustomSelect
                  form={form}
                  name="myType"
                  label="MyType"
                  items={myTypeItems}
                />
              </div>
            </div>
            <Button variant="outline" className="ml-auto">
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
