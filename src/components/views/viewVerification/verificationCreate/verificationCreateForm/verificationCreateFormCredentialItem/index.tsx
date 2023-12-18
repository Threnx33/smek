import { CustomSelect } from "@/components/reusables/customSelect";
import { CustomSelectWithLabels } from "@/components/reusables/customSelectWithLabels";
import {
  ArrayPath,
  FieldValues,
  Path,
  UseFieldArrayReturn,
  UseFormReturn,
  useFieldArray,
} from "react-hook-form";
import { z } from "zod";
import { VerificationCreateSchema, attributeSchema } from "..";

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

type VerificationCreateFormCredentialItemProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  i: number;
  credentialsArray: UseFieldArrayReturn<
    VerificationCreateSchema,
    "credentials",
    "id"
  >;
};

export function VerificationCreateFormCredentialItem<T extends FieldValues>({
  form,
  i,
  credentialsArray,
}: VerificationCreateFormCredentialItemProps<T>) {
  const attributesArray = useFieldArray({
    control: form.control,
    name: `credentials.${i}.attributes` as ArrayPath<T>,
  });
  type AttributeType = z.infer<typeof attributeSchema>;

  return (
    <div className="border rounded-lg px-4 py-3 mb-4" key={i}>
      <div className="flex">
        <div className="text-sm mb-2">
          All of the following conditions match
        </div>
        <img
          onClick={() => credentialsArray.remove(i)}
          className="h-4 w-4 ml-auto cursor-pointer"
          src="/closeCircle.svg"
          alt="CloseCircleIcon"
        />
      </div>
      <div className="flex flex-col">
        {attributesArray.fields.map((attribute, j) => {
          const typedAttribute = attribute as unknown as AttributeType;

          return (
            <div className="flex items-center space-x-3" key={j}>
              {typedAttribute.type === "subjectID" && (
                <CustomSelect
                  className="w-1/2"
                  form={form}
                  name={`credentials.${i}.attributes.${j}.value` as Path<T>}
                  label="Subject ID"
                  items={subjectIDItems}
                />
              )}

              {typedAttribute.type === "credentialType" && (
                <CustomSelect
                  className="w-1/2"
                  form={form}
                  name={`credentials.${i}.attributes.${j}.value` as Path<T>}
                  label="Credential Type"
                  items={[]}
                />
              )}

              <CustomSelectWithLabels
                className="w-1/2"
                form={form}
                name={
                  `credentials.${i}.attributes.${j}.matchingData` as Path<T>
                }
                label="Matching Data"
                items={matchingData}
              />

              <img
                onClick={() => attributesArray.remove(j)}
                className="h-5 w-5 cursor-pointer"
                src="/trash.svg"
                alt="TrashIcon"
              />
            </div>
          );
        })}

        <CustomSelect
          form={form}
          name={`credentials.${i}.myType` as Path<T>}
          label="MyType"
          items={myTypeItems}
        />
      </div>
    </div>
  );
}
