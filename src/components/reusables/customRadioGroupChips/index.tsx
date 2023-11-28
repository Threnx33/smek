import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CustomCheckboxChipsProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  items: { value: string; label: string }[];
  defaultValue?: string;
  label?: string;
  className?: string;
};

export function CustomCheckboxChips<T extends FieldValues>({
  form,
  name,
  items,
  label,
  className,
}: CustomCheckboxChipsProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className={`${className}`}>
          <div className="mb-2">
            <FormLabel>{label}</FormLabel>
          </div>
          {items.map((item, index) => {
            const checkboxId = `checkbox-${name}-${index}`;

            return (
              <FormField
                key={item.value}
                control={form.control}
                name={name}
                render={({ field }) => {
                  const isChecked = field.value.includes(item.value);
                  return (
                    <FormItem key={item.value}>
                      <FormLabel
                        htmlFor={checkboxId}
                        className={cn(
                          "flex flex-row items-start mr-2 border border-cLightGrey rounded-lg p-3 space-x-3 space-y-0 cursor-pointer ",
                          isChecked && "border-checked"
                        )}
                      >
                        <FormControl>
                          <Checkbox
                            id={checkboxId}
                            className={cn(
                              "rounded-full",
                              isChecked &&
                                "bg-checked border-checked data-[state=checked]:text-white"
                            )}
                            checked={field.value?.includes(item.value)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.value])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== item.value
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor={checkboxId}
                          className={cn(
                            "cursor-pointer font-normal",
                            isChecked && "text-checked"
                          )}
                        >
                          {item.label}
                        </FormLabel>
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            );
          })}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
