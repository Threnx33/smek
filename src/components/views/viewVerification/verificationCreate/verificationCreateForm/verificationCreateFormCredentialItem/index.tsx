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
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { v4 as uuidv4 } from "uuid";

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

const matchingData: { variant: "label" | "item"; text: string }[] = [
  { variant: "label", text: "String, Date, Boolean or Number" },
  { variant: "item", text: "is equal to" },
  { variant: "item", text: "is not equal to" },
  { variant: "item", text: "exists" },
];

const addAttributeItems: {
  variant: "label" | "item";
  value: string;
  text: string;
}[] = [
  { variant: "label", value: "", text: "Subject Data" },
  { variant: "item", value: "subjectID", text: "Subject ID" },
  { variant: "item", value: "customAttribute", text: "Custom Attribute" },
  { variant: "label", value: "", text: "Credential" },
  { variant: "item", value: "credentialID", text: "Credential ID" },
  { variant: "item", value: "credentialName", text: "Credential Name" },
  { variant: "item", value: "credentialType", text: "Credential Type" },
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

  const handleChange = (value: string) => {
    const newEmptyAttribute = {
      id: uuidv4(),
      type: value,
      value: "",
      matchingData: "",
    };
    attributesArray.append(newEmptyAttribute);
  };

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
            <div className="flex items-center space-x-3" key={attribute.id}>
              {(() => {
                if (typedAttribute.type === "subjectID") {
                  return (
                    <CustomSelect
                      className="w-1/2"
                      form={form}
                      name={`credentials.${i}.attributes.${j}.value` as Path<T>}
                      label="Subject ID"
                      items={subjectIDItems}
                    />
                  );
                }
                return (
                  <CustomSelect
                    className="w-1/2"
                    form={form}
                    name={`credentials.${i}.attributes.${j}.value` as Path<T>}
                    label="Credential Type"
                    items={[]}
                  />
                );
              })()}

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

        <div className={`flex flex-col mb-4 w-60`}>
          <Select value="" onValueChange={handleChange}>
            <SelectTrigger>
              <SelectValue placeholder="Add attribute or group" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {addAttributeItems.map((item, j) => (
                  <div key={uuidv4()}>
                    {item.variant === "label" ? (
                      <SelectLabel className="text-cMediumGrey text-xs py-1.5 pl-8 pr-2 ">
                        {item.text}
                      </SelectLabel>
                    ) : (
                      <SelectItem className="cursor-pointer" value={item.value}>
                        {item.text}
                      </SelectItem>
                    )}
                  </div>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
