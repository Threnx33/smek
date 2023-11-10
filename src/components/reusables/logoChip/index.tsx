type LogoChipProps = {
  logoWidth?: string;
  logoHeight?: string;
  textSize?: string;
  className?: string;
};

export function LogoChip({
  logoWidth = "w-7",
  logoHeight = "h-7",
  textSize = "text-xl",
  className,
}: LogoChipProps) {
  return (
    <div
      className={`flex flex-row items-center select-none ${textSize} font-extrabold ${className}`}
    >
      <img
        className={`${logoWidth} ${logoHeight} mr-1`}
        src="/logo/logoColor.svg"
        alt="Logo"
      />
      SKILLQUIVER
    </div>
  );
}
