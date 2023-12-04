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
  defaultValue?: string;
  placeholder?: string;
  mandatory?: boolean;
  className?: string;
  characters?: number;
};

export function CustomTextarea<T extends FieldValues>({
  form,
  name,
  label,
  defaultValue,
  placeholder,
  mandatory,
  className,
  characters,
}: CustomTextareaProps<T>) {
  const charactersNumber = characters ?? 500;
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
              {...(!!defaultValue ? { defaultValue } : field)}
            />
          </FormControl>
          <div className="text-xs text-muted-foreground mt-1">
            {field.value
              ? charactersNumber - field.value.length
              : charactersNumber}{" "}
            characters
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
