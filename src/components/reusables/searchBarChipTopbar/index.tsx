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
    <div
      className={`flex rounded-xl border py-0.5 shadow-sm md:min-w-[22rem] ${className}`}
    >
      <button className="flex items-center self-stretch px-3 md:px-4">
        <img
          src="/searchNormal.svg"
          alt="searchNormalIcon"
          className="h-4 w-4"
        />
      </button>
      <Input
        type="text"
        size={placeholder.length}
        className="h-9 rounded-xl border-none px-2 py-0 md:px-3"
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </div>
  );
}
