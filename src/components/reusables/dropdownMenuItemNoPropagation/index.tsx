import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

type DropdownMenuItemNoPropagationProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

export function DropdownMenuItemNoPropagation({
  className,
  children,
  onClick,
}: DropdownMenuItemNoPropagationProps) {
  return (
    <DropdownMenuItem className={`${className}`} onClick={onClick}>
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
