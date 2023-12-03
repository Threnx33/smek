import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type BadgesTemplatesSettingsCustomRadioGroupProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  items: { value: string; label: string; description?: string }[];
  defaultValue?: string;
  label?: string;
  className?: string;
  classNameRadio?: string;
  description?: string;
};

export function BadgesTemplatesSettingsCustomRadioGroup<T extends FieldValues>({
  form,
  name,
  items,
  defaultValue,
  label,
  className,
  classNameRadio,
}: BadgesTemplatesSettingsCustomRadioGroupProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col mb-4 ${className}`}>
          {!!label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={defaultValue}
              className={`flex space-x-4 ${classNameRadio}`}
            >
              {items.map((item) => (
                <FormItem
                  key={item.value}
                  className="flex space-x-3 space-y-0 mr-2"
                >
                  <FormControl>
                    <RadioGroupItem value={item.value} id={item.value} />
                  </FormControl>
                  <div className="flex flex-col space-y-1">
                    <Label className="font-normal" htmlFor={item.value}>
                      {item.label}
                    </Label>
                    {!!item.description && (
                      <FormDescription className="whitespace-pre-line">
                        {item.description}
                      </FormDescription>
                    )}
                  </div>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
