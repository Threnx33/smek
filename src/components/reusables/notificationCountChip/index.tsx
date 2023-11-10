type NotificationCountChipProps = {
  count: number;
  className?: string;
};

export function NotificationCountChip({
  count,
  className,
}: NotificationCountChipProps) {
  return (
    <span
      className={`${className} absolute items-start justify-center px-1.5 py-0.5 border-2 border-background rounded-full text-xs font-semibold leading-none text-white bg-cRed`}
    >
      {count}
    </span>
  );
}
