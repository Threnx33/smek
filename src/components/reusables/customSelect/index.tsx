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
import { cn } from "@/lib/utils";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CustomSelectProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  items: string[];
  mandatory?: boolean;
};

export function CustomSelect<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  items,
  mandatory,
}: CustomSelectProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col mb-4">
          <FormLabel>
            {label}
            {mandatory && <span className="text-sm text-cRed">*</span>}
          </FormLabel>
          <Select onValueChange={field.onChange}>
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
