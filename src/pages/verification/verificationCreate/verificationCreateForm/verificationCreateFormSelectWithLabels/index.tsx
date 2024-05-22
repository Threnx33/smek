import { FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import { UseFieldArrayReturn } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { VerificationCreateSchema } from "..";

type VerificationCreateFormSelectWithLabelsProps = {
  items: { type: "label" | "item"; text: string }[];
  className?: string;
  attributesArray: UseFieldArrayReturn<
    VerificationCreateSchema,
    `credentials.${number}.attributes`,
    "id"
  >;
};

export function VerificationCreateFormSelectWithLabels({
  items,
  className,
  attributesArray,
}: VerificationCreateFormSelectWithLabelsProps) {
  const handleChange = (value: string) => {
    attributesArray.append({
      id: uuidv4(),
      type: value,
      value: "",
      matchingData: "",
    });
  };

  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <Select value="" onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Add attribute or group" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) =>
              item.type === "label" ? (
                <SelectLabel
                  className="text-cMediumGrey text-xs py-1.5 pl-8 pr-2 "
                  key={item.text}
                >
                  {item.text}
                </SelectLabel>
              ) : (
                <SelectItem
                  className="cursor-pointer"
                  value={item.text}
                  key={item.text}
                >
                  {item.text}
                </SelectItem>
              )
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FormMessage />
    </div>
  );
}
