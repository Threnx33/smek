import { Input } from "@/components/ui/input";
import { Table as ReactTable } from "@tanstack/react-table";

type SearchBarChipProps<TData> = {
  table: ReactTable<TData>;
  placeholder: string;
  searchBy: string;
  className?: string;
};

export function SearchBarChip<TData>({
  table,
  placeholder,
  searchBy,
  className,
}: SearchBarChipProps<TData>) {
  return (
    <div className={`flex rounded-xl border py-0.5 shadow-sm ${className}`}>
      <button className="flex items-center self-stretch px-4">
        <img
          src="/searchNormal.svg"
          alt="searchNormalIcon"
          className="h-4 w-4"
        />
      </button>
      <Input
        type="text"
        className="h-9 w-60 rounded-xl border-none px-3 py-0 md:w-80"
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          table.getColumn(searchBy)?.setFilterValue(e.target.value)
        }
      />
    </div>
  );
}
