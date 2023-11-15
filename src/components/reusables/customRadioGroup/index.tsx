import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CustomRadioGroupProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  items: { value: string; label: string }[];
  defaultValue: string;
  label?: string;
  className?: string;
};

export function CustomRadioGroup<T extends FieldValues>({
  form,
  name,
  items,
  defaultValue,
  label,
  className,
}: CustomRadioGroupProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col mb-4 ${className}`}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={defaultValue}
              className="flex"
            >
              {items.map((item) => (
                <FormItem
                  key={item.value}
                  className="flex items-center space-x-2 space-y-0 mr-2"
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} id={item.value} />
                  </FormControl>
                  <Label htmlFor={item.value}>{item.label}</Label>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
