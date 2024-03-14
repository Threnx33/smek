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
        <div className="flex w-4/12 flex-col">
          <div className="mb-1 text-sm font-semibold">{title}</div>
          <div className="text-xs ">{header}</div>
        </div>

        <Button variant="destructive">{buttonText}</Button>
      </div>
    </div>
  );
}
