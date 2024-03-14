import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CustomInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>; //keyof T | string
  label?: string;
  type: string;
  description?: string;
  defaultValue?: string;
  placeholder?: string;
  mandatory?: boolean;
};

export function CustomInput<T extends FieldValues>({
  form,
  name,
  label,
  type,
  description,
  defaultValue,
  placeholder,
  mandatory,
}: CustomInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="mb-4 flex flex-col">
          {label && (
            <FormLabel className="">
              {label}
              {mandatory && <span className="text-cRed ">*</span>}
              {description && (
                <div className="mt-1 text-sm font-normal">{description}</div>
              )}
            </FormLabel>
          )}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...(!!defaultValue ? { defaultValue } : field)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
