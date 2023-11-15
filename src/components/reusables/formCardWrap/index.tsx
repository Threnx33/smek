type formCardProps = {
  children?: React.ReactNode;
  className?: string;
};

export function FormCardWrap({ children, className }: formCardProps) {
  return (
    <div className={`p-6 border rounded-md mb-4 ${className}`}>{children}</div>
  );
}
