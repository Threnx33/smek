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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SelectLabel } from "@radix-ui/react-select";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type CustomSelectWithLabelsProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  items: { variant: "label" | "item"; text: string }[];
  mandatory?: boolean;
  className?: string;
  onValueChangeExtra?: () => void;
};

export function CustomSelectWithLabels<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  items,
  mandatory,
  className,
  onValueChangeExtra,
}: CustomSelectWithLabelsProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col mb-4 ${className}`}>
          <FormLabel>
            {label}
            {mandatory && <span className="text-sm text-cRed">*</span>}
          </FormLabel>
          <Select
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
              <SelectGroup>
                {items.map((item) =>
                  item.variant === "label" ? (
                    <SelectLabel
                      className="text-cMediumGrey text-xs py-1.5 pl-8 pr-2 "
                      key={uuidv4()}
                    >
                      {item.text}
                    </SelectLabel>
                  ) : (
                    <SelectItem
                      className="cursor-pointer"
                      value={item.text}
                      key={uuidv4()}
                    >
                      {item.text}
                    </SelectItem>
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
