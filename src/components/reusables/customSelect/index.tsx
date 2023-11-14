import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type CustomSelectProps = {
  label: string;
  placeholder: string;
  items: string[];
  field: {
    value?: string;
    onChange: (value: string) => void;
  };
  mandatory?: boolean;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  placeholder,
  items,
  field,
  mandatory,
}) => {
  return (
    <FormItem className="flex flex-col mb-4">
      <FormLabel>
        {label}
        {mandatory && <span className="text-sm text-cRed">*</span>}
      </FormLabel>
      <Select onValueChange={field.onChange}>
        <FormControl>
          <SelectTrigger
            className={cn(!field.value && "text-muted-foreground")}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {items.map((item) => (
            <SelectItem className="cursor-pointer" value={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
};

export default CustomSelect;
