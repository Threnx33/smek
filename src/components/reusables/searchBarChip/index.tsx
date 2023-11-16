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
    <div className={`flex border rounded-xl py-0.5 shadow-sm ${className}`}>
      <button className="flex items-center px-4 self-stretch">
        <img
          src="/searchNormal.svg"
          alt="searchNormalIcon"
          className="h-4 w-4"
        />
      </button>
      <Input
        type="text"
        className="px-3 h-9 py-0 w-80 rounded-xl border-none"
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          table.getColumn(searchBy)?.setFilterValue(e.target.value)
        }
      />
    </div>
  );
}
