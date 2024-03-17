import { TitleHeaderWrap } from "@/components/reusables/titleHeaderWrap";

type GridItemProps = {
  title: string;
  description: string;
  iconSrc: string;
};

const GridItem: React.FC<GridItemProps> = ({ title, description, iconSrc }) => {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-8 text-center">
      <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-cBlueGraph p-3">
        <img src={iconSrc} alt="icon" className="h-8 w-8" />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-cMediumGrey">{description}</div>
    </div>
  );
};

export function ViewSupport() {
  const items = [
    {
      title: "Getting Started",
      description:
        "Visit our API documentation to learn more about how to get started",
      iconSrc: "book",
    },
    {
      title: "Account Settings",
      description:
        "Visit our API documentation to learn more about how to get started",
      iconSrc: "userSquare",
    },
    {
      title: "FAQ",
      description:
        "Visit our API documentation to learn more about how to get started",
      iconSrc: "note2",
    },
    {
      title: "Community",
      description:
        "Visit our API documentation to learn more about how to get started",
      iconSrc: "people",
    },
    {
      title: "Documentation",
      description:
        "Visit our API documentation to learn more about how to get started",
      iconSrc: "book2",
    },
    {
      title: "Contact Support",
      description:
        "Visit our API documentation to learn more about how to get started",
      iconSrc: "messages",
    },
  ];

  return (
    <TitleHeaderWrap
      title="Need help? We’ve got your back"
      header="Perhaps you can find the answers in our collections"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {items.map((item, index) => (
          <GridItem
            key={index}
            title={item.title}
            description={item.description}
            iconSrc={"/" + item.iconSrc + ".svg"}
          />
        ))}
      </div>
    </TitleHeaderWrap>
  );
}
