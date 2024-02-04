type UserInfoChipProps = {
  className?: string;
};

export function UserInfoChip({ className }: UserInfoChipProps) {
  return (
    <div className={`flex cursor-pointer items-center ${className}`}>
      <img
        src="/avatar.png"
        alt="AvatarIcon"
        className="h-10 w-10 rounded-full"
      />
      <div className="mx-2 flex flex-col">
        <span className="text-sm font-semibold">Theo Edwards</span>
        <span className="text-mediumGrey text-sm">Administrator</span>
      </div>
      <img
        src="/arrowSquareDown.svg"
        alt="ArrowSquareDownIcon"
        className="mx-2 hidden h-5 w-5 lg:block"
      />
    </div>
  );
}
