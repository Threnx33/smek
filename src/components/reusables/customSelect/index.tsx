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
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CustomSelectProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  items: string[];
  mandatory?: boolean;
  className?: string;
  onValueChangeExtra?: () => void;
  defaultValue?: string;
};

export function CustomSelect<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  items,
  mandatory,
  className,
  onValueChangeExtra,
  defaultValue,
}: CustomSelectProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`mb-4 flex flex-col ${className}`}>
          <FormLabel>
            {label}
            {mandatory && (
              <span className="text-sm font-semibold text-cRed">*</span>
            )}
          </FormLabel>
          <Select
            defaultValue={defaultValue}
            onValueChange={(e) => {
              field.onChange(e);
              if (onValueChangeExtra) {
                onValueChangeExtra();
              }
            }}
          >
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
      )}
    />
  );
}
