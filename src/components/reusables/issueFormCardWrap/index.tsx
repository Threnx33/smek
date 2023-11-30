import React from "react";

type IssueFromCardWrapProps = {
  children: React.ReactNode;
  title: string;
  setOpenedCard: React.Dispatch<React.SetStateAction<string>>;
};

export default function IssueFormCardWrap({
  children,
  title,
  setOpenedCard,
}: IssueFromCardWrapProps) {
  return (
    <div className="p-3 border rounded-lg flex flex-col mb-6">
      <div className="flex space-y-0 mb-4">
        <span className="font-semibold text-sm">{title}</span>
        <img
          onClick={() => setOpenedCard("")}
          className="h-4 w-4 ml-auto cursor-pointer"
          src="/closeCircle.svg"
          alt="CloseCircleIcon"
        />
      </div>
      {children}
    </div>
  );
}
