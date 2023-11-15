type formCardProps = {
  title: string;
  children: React.ReactNode;
};

export function formCardWrap({ title, children }: formCardProps) {
  return (
    <div>
      <div className="font-bold mb-2">{title}</div>
      <div className="px-6 py-4">{children}</div>
    </div>
  );
}
