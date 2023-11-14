import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type CustomSelectProps = {
  label: string;
};

const CustomSelect: React.FC<CustomSelectProps> = ({ label }) => {
  return (
    <FormItem className="flex flex-col mb-4">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input type="text" />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CustomSelect;
