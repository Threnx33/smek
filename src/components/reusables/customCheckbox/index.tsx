import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CustomCheckboxProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  title?: string;
  label: string;
  mandatory?: boolean;
  className?: string;
  classNameLabel?: string;
};

export function CustomCheckbox<T extends FieldValues>({
  form,
  name,
  title,
  label,
  mandatory,
  className,
  classNameLabel,
}: CustomCheckboxProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`mb-4 ${className}`}>
          {title && (
            <FormLabel className="text-sm font-semibold">{title}</FormLabel>
          )}
          <div className="flex flex-row space-x-2 items-center">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className={`text-sm font-medium ${classNameLabel}`}>
              {label}
              {mandatory && <span className=" text-cRed">*</span>}
            </FormLabel>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
