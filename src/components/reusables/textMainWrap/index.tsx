import React, { ReactNode } from "react";

interface TextMainWrapProps extends React.HTMLProps<HTMLSpanElement> {
  children: ReactNode;
  className?: string; // This makes the className prop optional
}

export const TextMainWrap: React.FC<TextMainWrapProps> = ({
  children,
  className,
  ...props
}) => {
  const combinedClassName = `text-main hover:text-main-accent cursor-pointer ${
    className || ""
  }`;

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};
