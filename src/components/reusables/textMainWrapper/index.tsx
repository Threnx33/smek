import React, { ReactNode } from "react";

interface TextMainWrapperProps extends React.HTMLProps<HTMLSpanElement> {
  children: ReactNode;
  className?: string; // This makes the className prop optional
}

export const TextMainWrapper: React.FC<TextMainWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  const combinedClassName = `text-main hover:text-main-accent ${
    className || ""
  }`;

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};
