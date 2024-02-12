export type Status = "Published" | "Accepted" | "Declined" | "Draft";

type StatusChipProps = {
  text: Status;
};

export function StatusChip({ text }: StatusChipProps) {
  return (
    <span
      className={`flex w-[6.50rem] flex-row items-center justify-start rounded-lg border border-cLightGreyStroke py-1.5 pl-2 pr-2 font-semibold leading-none ${
        text === "Published" || text === "Accepted"
          ? "text-checked"
          : "text-cRed"
      }`}
    >
      <img
        className="mr-1 h-4 w-4"
        src={
          text === "Published" || text === "Accepted"
            ? "/tickCircleGreen.svg"
            : "/tickCircleRed.svg"
        }
        alt="tickCircleIcon"
      />
      <span>{text}</span>
    </span>
  );
}
