export type Status = "Published" | "Accepted" | "Declined" | "Draft";

type StatusChipProps = {
  text: Status;
};

export function StatusChip({ text }: StatusChipProps) {
  return (
    <span
      className={`flex flex-row justify-start items-center w-[6.25rem] border-cLightGreyStroke rounded-lg py-1.5 px-2 leading-none border font-semibold ${
        text === "Published" || text === "Accepted"
          ? "text-checked"
          : "text-cRed"
      }`}
    >
      <img
        className="h-4 w-4 mr-1"
        src={
          text === "Published" || text === "Accepted"
            ? "/tickCircleGreen.svg"
            : "/tickCircleRed.svg"
        }
        alt="tickCircleIcon"
      />
      {text}
    </span>
  );
}
