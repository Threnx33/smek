import { CustomInput } from "@/components/reusables/customInput";
import TitleHeaderButtonCard from "@/components/reusables/titleHeaderButtonCard";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SchemaSection = ({
  titleText,
  descriptionText,
  children,
}: {
  titleText: string;
  descriptionText: string;
  children: React.ReactNode;
}) => (
  <div className="mb-0 flex flex-col md:mb-8 md:flex-row">
    <div className="mb-4 md:mb-0 md:mr-6">
      <div className="text-sm font-semibold">{titleText}</div>
      <div className="text-sm">{descriptionText}</div>
    </div>
    <div className="md:ml-auto md:w-[28rem] md:flex-none xl:w-[34rem]">
      {children}
    </div>
  </div>
);

const schemaFormSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const defaultPreferenceValues: Partial<SchemaCreateFormSchema> = {
  name: "",
  description: "",
};

type SchemaCreateFormSchema = z.infer<typeof schemaFormSchema>;

export function SchemaCreateForm() {
  const form = useForm<SchemaCreateFormSchema>({
    resolver: zodResolver(schemaFormSchema),
    defaultValues: defaultPreferenceValues,
  });

  async function onSubmit(data: SchemaCreateFormSchema) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <SchemaSection
          titleText="Schema Name"
          descriptionText="The schema name is used to derive the “type” field in the credential. It is visible to everyone who views the credential."
        >
          <CustomInput
            className="w-full "
            form={form}
            name="description"
            type="text"
          />
        </SchemaSection>

        <Separator className="mb-4 md:mb-8" />
        <SchemaSection
          titleText="Schema Description"
          descriptionText="Describe the schema’s purpose. This is optional but recommended."
        >
          <CustomInput className="w-full" form={form} name="name" type="text" />
        </SchemaSection>

        <Separator className="mb-4 md:mb-8" />
        <SchemaSection
          titleText="Schema Attributes"
          descriptionText="Define the attributes you want on the credential."
        >
          <div className="flex w-full flex-col items-center justify-center gap-1 rounded-xl border p-10 text-center">
            <div className="text-sm font-semibold">Import or Create</div>
            <div className="mb-2 text-sm">
              You can choose to either import an existing JSON schema or create
              a schema manually
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Import JSON Schema</Button>
              <Button>Create Manually</Button>
            </div>
          </div>
        </SchemaSection>
      </form>
    </Form>
  );
}
