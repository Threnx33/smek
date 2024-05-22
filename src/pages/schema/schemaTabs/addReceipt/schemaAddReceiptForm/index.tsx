import { CustomInput } from "@/components/reusables/customInput";
import { CustomSelect } from "@/components/reusables/customSelect";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SchemaAddReceiptCreateButton } from "../schemaAddReceiptCreate";

export const SwitchSection = ({
  title,
  description,
  information,
  children,
}: {
  title: string;
  description?: string;
  information?: boolean;
  children: React.ReactNode;
}) => (
  <div className="mb-4 flex flex-col items-start gap-2 md:flex-row md:gap-4">
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {title}
        {information && (
          <img
            className="h-4 w-4 cursor-pointer"
            src="/infoCircle.svg"
            alt="InfoCircleImage"
          />
        )}
      </div>
      {description && <div className="mt-1 text-sm">{description}</div>}
    </div>
    <div className="md:ml-auto ">{children}</div>
  </div>
);

const schemaFormSchema = z.object({
  persistCredential: z.boolean(),
  password: z.string(),
  did: z.string(),
  generatePDF: z.boolean(),
  blockchainAnchoring: z.boolean(),
  credentialRevocation: z.boolean(),
  zeroKnowledgeProof: z.boolean(),
});

const defaultPreferenceValues: Partial<SchemaAddReceiptFormSchema> = {};

type SchemaAddReceiptFormSchema = z.infer<typeof schemaFormSchema>;

export function SchemaAddReceiptForm() {
  const form = useForm<SchemaAddReceiptFormSchema>({
    resolver: zodResolver(schemaFormSchema),
    defaultValues: defaultPreferenceValues,
  });

  async function onSubmit(data: SchemaAddReceiptFormSchema) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-10 flex w-full flex-col items-center justify-center gap-1 rounded-lg bg-white px-4 py-20 text-center">
          <div className="mb-2 text-sm text-cMediumGrey">
            Add credential recipients to start seing list of data here
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <SchemaAddReceiptCreateButton />
            <Button>Import Spreadsheet</Button>
          </div>
        </div>

        <div className="flex flex-col gap-1 rounded-lg bg-white p-6">
          <div className="text-lg font-semibold">
            Proof of Employment Settings
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col">
              <SwitchSection
                title="Persistent Credential"
                description="This option allows the credential to be accessed and verified via a URL and QR Code."
              >
                <Switch />
              </SwitchSection>

              <CustomInput
                form={form}
                name="password"
                label="Password"
                type="text"
                mandatory
                className="mb-1"
              />
              <div className="mb-4 text-xs text-cMediumGrey">
                The password allows access to the credential. Share it with the
                holder. Min 4 characters.
              </div>

              <CustomSelect
                form={form}
                name="did"
                label="Organization Profile (DID)"
                placeholder="Select DID"
                items={[]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <SwitchSection information title="Generate PDF">
                <Switch />
              </SwitchSection>
              <SwitchSection information title="Blockchain Anchoring">
                <Switch />
              </SwitchSection>
              <SwitchSection information title="Credential Revocation">
                <Switch />
              </SwitchSection>
              <SwitchSection information title="Zero-Knowledge Proof">
                <Switch />
              </SwitchSection>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
