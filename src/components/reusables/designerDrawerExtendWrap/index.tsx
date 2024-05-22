type DesignerDrawerExtendWrapProps = {
  className?: string;
  children?: React.ReactNode;
};

export function DesignerDrawerExtendWrap({
  className,
  children,
}: DesignerDrawerExtendWrapProps) {
  return (
    <div className={className}>
      {/*Desktop extend drawer*/}
      <div className="hidden xl:block h-full">
        <div className="shadow-r-sm min-h-full w-[18rem] overflow-auto border-r-[0.5px]">
          <div className=" min-h-full p-6 ">{children}</div>
        </div>
      </div>

      {/*Mobile extend drawer*/}
      <div className="block xl:hidden">
        <div className="min-h-full overflow-auto">
          <div className="min-h-full p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
