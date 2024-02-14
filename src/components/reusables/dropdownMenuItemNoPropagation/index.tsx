import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

type DropdownMenuItemNoPropagationProps = {
  className?: string;
  children?: React.ReactNode;
};

export function DropdownMenuItemNoPropagation({
  className,
  children,
}: DropdownMenuItemNoPropagationProps) {
  return (
    <DropdownMenuItem className={`${className}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </DropdownMenuItem>
  );
}
