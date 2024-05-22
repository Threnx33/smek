import { CustomCalendar } from "@/components/reusables/customCalendar";
import { CustomCheckbox } from "@/components/reusables/customCheckbox";
import { CustomInput } from "@/components/reusables/customInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { SheetClose } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { Path, useForm } from "react-hook-form";
import { z } from "zod";
import { SwitchSection } from "../../schemaAddReceiptForm";

const schema = z.object({
  receiptEmail: z.string().email(),
  subjectId: z.string(),
  subjectName: z.string(),
  subjectJobTitle: z.string(),
  department: z.string(),
  startDate: z.date(),
  expireCredential: z.boolean(),
  issueDate: z.date().optional(),
  expirationDate: z.date().optional(),
  requestInfoEmail: z.boolean(),
  requestInfoID: z.boolean(),
  requestInfoName: z.boolean(),
  requestInfoDepartment: z.boolean(),
  requestInfoStartDate: z.boolean(),
});

const defaultValues: Partial<SchemaAddReceiptCreateSchema> = {};

type SchemaAddReceiptCreateSchema = z.infer<typeof schema>;

interface SchemaAddReceiptCreateProps<TData> {
  className?: string;
}

export function SchemaAddReceiptCreateForm<TData>({
  className,
}: SchemaAddReceiptCreateProps<TData>) {
  const form = useForm<SchemaAddReceiptCreateSchema>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  const closeRef = useRef<HTMLButtonElement>(null);

  async function onSubmit(data: SchemaAddReceiptCreateSchema) {
    closeRef.current?.click();
  }

  const RequestInformationCheckBox = ({
    className,
    name,
  }: {
    className?: string;
    name: Path<SchemaAddReceiptCreateSchema>;
  }) => {
    return (
      <div className={`flex gap-1 ${className}`}>
        <CustomCheckbox
          form={form}
          className="mb-2 items-center"
          name={name}
          label="Request Information"
          classNameLabel="leading-none"
        />
        <img
          className="h-4 w-4 cursor-pointer"
          src="/infoCircle.svg"
          alt="InfoCircleImage"
        />
      </div>
    );
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomInput
            form={form}
            name="receiptEmail"
            label="Receipt Email"
            type="text"
            className="mb-2"
          />
          <div className="mb-4 text-xs text-cMediumGrey">
            This feature sends all the credential details to a recipient.
          </div>

          <CustomInput
            form={form}
            name="subjectId"
            label="Subject ID"
            type="text"
            className="mb-2"
          />
          <RequestInformationCheckBox name="requestInfoEmail" />
          <div className="mb-4 text-xs text-cMediumGrey">
            A unique identifier of the recipient. Example: DID, National ID
            number, Employee ID, Student ID, etc.
          </div>

          <CustomInput
            form={form}
            name="subjectName"
            label="Subject Name"
            type="text"
            className="mb-2"
            mandatory
          />
          <RequestInformationCheckBox name="requestInfoName" className="mb-4" />

          <CustomInput
            form={form}
            name="department"
            label="Department"
            type="text"
            className="mb-2"
          />
          <RequestInformationCheckBox
            name="requestInfoDepartment"
            className="mb-4"
          />

          <CustomCalendar
            form={form}
            name="startDate"
            label="Start Date"
            mandatory
            className="mb-2"
          />
          <RequestInformationCheckBox
            name="requestInfoStartDate"
            className="mb-4"
          />

          <Separator className="mb-6 mt-2" />

          <SwitchSection
            title="Expire this credential"
            description="This option will expire the credential after the specified date"
          >
            <Switch />
          </SwitchSection>

          <CustomCalendar form={form} name="issueDate" label="Issue Date" />
          <CustomCalendar
            form={form}
            name="expirationDate"
            label="Expiration Date"
          />

          <div className="ml-auto space-x-2">
            <Button
              onClick={() => closeRef.current?.click()}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit">Add Recipient</Button>
          </div>
          <SheetClose ref={closeRef} />
        </form>
      </Form>
    </div>
  );
}
