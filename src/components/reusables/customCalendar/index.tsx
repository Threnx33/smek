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

type CustomCalendarProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  disabledFunction?: (date: Date) => boolean;
  mandatory?: boolean;
};

export function CustomCalendar<T extends FieldValues>({
  form,
  name,
  label,
  disabledFunction,
  mandatory,
}: CustomCalendarProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col mb-4">
          <FormLabel>
            {label} {mandatory && <span className=" text-cRed">*</span>}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "flex  justify-start font-normal",
                    !field.value && "opacity-50"
                  )}
                >
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
