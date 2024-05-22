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
import { cn } from "@/components/utils/utils";
import { FieldValues, Path, PathValue, UseFormReturn } from "react-hook-form";

type BadgesTemplatesSettingsCustomSelectProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder: string;
  items: string[];
  mandatory?: boolean;
  className?: string;
};

export function BadgesTemplatesSettingsCustomSelect<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  items,
  mandatory,
  className,
}: BadgesTemplatesSettingsCustomSelectProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col mb-4 ${className}`}>
          {label !== undefined && (
            <FormLabel>
              {label}
              {mandatory && <span className="text-sm text-cRed">*</span>}
            </FormLabel>
          )}
          <Select
            value=""
            onValueChange={(newValue) => {
              const currentCollections = form.getValues(name);
              if (!currentCollections.includes(newValue)) {
                form.setValue(name, [
                  ...currentCollections,
                  newValue,
                ] as PathValue<T, Path<T>>);
              }
            }}
          >
            <FormControl>
              <SelectTrigger className={cn("text-muted-foreground")}>
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
      )}
    />
  );
}
