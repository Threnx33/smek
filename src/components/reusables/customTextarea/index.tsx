import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type CustomTextareaProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  mandatory?: boolean;
  className?: string;
};

export function CustomTextarea<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  mandatory,
  className,
}: CustomTextareaProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col space-y-1 mb-4 ${className}`}>
          <FormLabel className="mb-1">
            {label}
            {mandatory && <span className="text-cRed ">*</span>}
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className="resize-none h-28 "
              {...field}
            />
          </FormControl>
          <div className="text-xs text-muted-foreground mt-1">
            {field.value ? 500 - field.value.length : 500} characters
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
