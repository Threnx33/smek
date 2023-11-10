import { Input } from "@/components/ui/input";

type SearchBarChipProps = {
  placeholder: string;
  value?: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export function SearchBarChip({
  placeholder,
  value,
  handleOnChange,
  className,
}: SearchBarChipProps) {
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
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}
