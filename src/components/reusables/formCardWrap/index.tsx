type formCardProps = {
  children?: React.ReactNode;
  className?: string;
};

export function FormCardWrap({ children, className }: formCardProps) {
  return (
    <div className={`mb-4 rounded-lg border p-3 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}
