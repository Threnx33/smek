import { Input } from "@/components/ui/input";

type SearchBarChipTopbar = {
  placeholder: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export function SearchBarChipTopbar({
  placeholder,
  handleOnChange,
  className,
}: SearchBarChipTopbar) {
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
        className="min-w-80 h-9 rounded-xl border-none px-3 py-0"
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
