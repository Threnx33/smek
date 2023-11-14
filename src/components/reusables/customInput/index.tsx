import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form"; // Import necessary types

// Define a generic type that extends from UseFormReturn
type CustomInputProps<TFormValues extends FieldValues> = {
  form: UseFormReturn<TFormValues>;
  name: Path<TFormValues>;
  label: string;
  type: string;
  mandatory?: boolean;
};

// Your CustomInput component now is a generic React Functional Component
export function CustomInput<TFormValues extends FieldValues>({
  form,
  name,
  label,
  type,
  mandatory,
}: CustomInputProps<TFormValues>) {
  return (
    <FormField
      control={form.control} // We get the control object from the form prop
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col mb-4">
          <FormLabel>
            {label}
            {mandatory && <span className="text-cRed ">*</span>}
          </FormLabel>
          <FormControl>
            <Input type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
