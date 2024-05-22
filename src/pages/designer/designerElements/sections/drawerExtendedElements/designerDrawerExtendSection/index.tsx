import { setCanvasToAdd } from "@/redux/reducers/designer";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";

type UseDesignerDrawerExtendedItems = {
  title?: string;
  items: {
    label: string;
    iconName: string;
    onClick?: () => void;
  }[];
};

export const useDesignerDrawerExtendedItems = () => {
  const dispatch = useDispatch();

  const designerDrawerExtendedItems = useMemo<UseDesignerDrawerExtendedItems[]>(
    () => [
      {
        items: [
          {
            label: "Add Image",
            iconName: "gallery-add",
          },
          {
            label: "Add QR Code",
            iconName: "scan-barcode",
          },
        ],
      },
      {
        title: "Text",
        items: [
          {
            label: "Add Heading 1",
            iconName: "general",
            onClick: () => {
              dispatch(
                setCanvasToAdd({
                  isText: true,
                  fontSize: "text-[24px]",
                  imageUrl: null,
                })
              );
            },
          },
          {
            label: "Add Heading 2",
            iconName: "general",
            onClick: () => {
              dispatch(
                setCanvasToAdd({
                  isText: true,
                  fontSize: "text-[20px]",
                  imageUrl: null,
                })
              );
            },
          },
          {
            label: "Add Heading 3",
            iconName: "general",
            onClick: () => {
              dispatch(
                setCanvasToAdd({
                  isText: true,
                  fontSize: "text-[16px]",
                  imageUrl: null,
                })
              );
            },
          },
          {
            label: "Add Text",
            iconName: "smallcaps",
            onClick: () => {
              dispatch(
                setCanvasToAdd({
                  isText: true,
                  fontSize: "text-[12px]",
                  imageUrl: null,
                })
              );
            },
          },
        ],
      },
      {
        title: "Custom Code",
        items: [{ label: "Add HTML Block", iconName: "scroll" }],
      },
    ],
    []
  );

  return designerDrawerExtendedItems;
};

type DesignerDrawerExtendedSectionProps = UseDesignerDrawerExtendedItems & {};

export const DesignerDrawerExtendSection = ({
  title,
  items,
}: DesignerDrawerExtendedSectionProps) => {
  const dispatch = useDispatch();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
    },
    onDrop: (acceptedFiles) => {
      const url = URL.createObjectURL(acceptedFiles[0]);
      dispatch(
        setCanvasToAdd({ isText: false, fontSize: null, imageUrl: url })
      );
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="font-semibold">{title}</div>
      <div className="flex flex-col gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={item.onClick}
            {...(!item.onClick ? getRootProps({ className: "dropzone" }) : {})}
            className="flex items-center gap-3 cursor-pointer"
          >
            {!item.onClick && <input {...getInputProps()} />}
            <img
              className="h-5 w-5"
              src={`/designer/designerTemplates/${item.iconName}.svg`}
              alt={`${item.iconName} icon`}
            />
            <div className="text-sm">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
