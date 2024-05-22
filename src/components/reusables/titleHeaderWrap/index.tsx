import { MainWrap } from "@/components/reusables/mainWrap";

type TitleHeaderWrapProps = {
  children?: React.ReactNode;
  title: string;
  header?: string;
};

export function TitleHeaderWrap({
  children,
  title,
  header,
}: TitleHeaderWrapProps) {
  return (
    <MainWrap>
      <div className="mb-2 select-none text-2xl font-semibold">{title}</div>
      <div className=" mb-5 w-11/12 select-none md:w-7/12">{header}</div>
      <div className="flex flex-grow flex-col rounded bg-white p-3 sm:p-6">
        {children}
      </div>
    </MainWrap>
  );
}
