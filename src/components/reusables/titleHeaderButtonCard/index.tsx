import { Button } from "@/components/ui/button";

type TitleHeaderButtonCardProps = {
  title: string;
  header: string;
  buttonText: string;
};

export default function TitleHeaderButtonCard({
  title,
  header,
  buttonText,
}: TitleHeaderButtonCardProps) {
  return (
    <div className={`mb-[2rem] w-full rounded-lg border p-6 `}>
      <div className="header flex items-center justify-between">
        <div className="mr-4 flex flex-col md:mr-0 md:w-4/12">
          <div className="mb-1 text-sm font-semibold">{title}</div>
          <div className="text-xs ">{header}</div>
        </div>

        <Button variant="destructive">
          <div className="hidden md:flex">{buttonText}</div>
          <div className="shrink-0 md:hidden">
            <img className="h-5 w-5" src="trash.svg" alt="TrashIcon" />
          </div>
        </Button>
      </div>
    </div>
  );
}
