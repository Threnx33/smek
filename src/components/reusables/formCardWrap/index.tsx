type formCardProps = {
  title: string;
  children?: React.ReactNode;
};

export function FormCardWrap({ title, children }: formCardProps) {
  return (
    <div>
      <div className="text-lg font-bold mb-2">{title}</div>
      <div className="p-6 border rounded-md ">{children}</div>
    </div>
  );
}
