import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

type CustomCalendarExtendedProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  buttonLabel: string;
  disabledFunction?: (date: Date) => boolean;
  className?: string;
  mandatory?: boolean;
};

export function CustomCalendarExtended<T extends FieldValues>({
  form,
  name,
  label,
  buttonLabel,
  disabledFunction,
  className,
  mandatory,
}: CustomCalendarExtendedProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col ${className}`}>
          <FormLabel>
            {label} {mandatory && <span className=" text-cRed">*</span>}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "flex justify-start font-normal h-12",
                    !field.value && "opacity-50"
                  )}
                >
                  <div className="flex flex-col items-start space-y-1">
                    <div className="text-xs">{buttonLabel}</div>
                    <div className="flex">
                      <img
                        src="/calendar.svg"
                        alt="CalendarIcon"
                        className="h-4 w-4  mr-2"
                      />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </div>
                  </div>
                  <img
                    src="/arrowDown.svg"
                    alt="ArrowDownIcon"
                    className="h-4 w-4 ml-auto"
                  />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={disabledFunction}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
