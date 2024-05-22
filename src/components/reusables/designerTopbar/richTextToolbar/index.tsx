import { Separator } from "@/components/ui/separator";
import { RootState } from "@/redux";
import { pushAction } from "@/redux/reducers/history";
import { setTextProps } from "@/redux/reducers/richText";
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignCenter,
  TextalignJustifycenter,
  TextalignLeft,
  TextalignRight,
} from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";

export const RichTextToolbar = () => {
  const dispatch = useDispatch();
  const textProps = useSelector((state: RootState) => state.richText);
  const { editingElement } = useSelector((state: RootState) => state.designer);

  const handleChange = (prop: keyof typeof textProps, value: string) => {
    const newTextProps = { ...textProps, [prop]: value };
    const newEditingElement = { ...editingElement!, textProps: newTextProps };
    dispatch(
      pushAction({
        undo: { actionType: "update", value: editingElement! },
        redo: { actionType: "update", value: newEditingElement },
      })
    );

    dispatch(setTextProps(newTextProps));
  };

  if (textProps.bold === null) return null;

  return (
    <div className="flex gap-4 items-center">
      <select
        id="fontStyle"
        onChange={(e) => handleChange("fontStyle", e.target.value)}
        value={textProps.fontStyle || ""}
        className="appearance-none text-sm cursor-pointer"
      >
        <option value="font-sans">Sans Serif</option>
        <option value="font-serif">Serif</option>
        <option value="font-mono">Monospace</option>
      </select>

      <Separator orientation="vertical" className="h-5" />

      <select
        id="fontSize"
        onChange={(e) => handleChange("fontSize", e.target.value)}
        value={textProps.fontSize || ""}
        className="appearance-none text-sm cursor-pointer"
      >
        <option value="text-[12px]">12</option>
        <option value="text-[16px]">16</option>
        <option value="text-[20px]">20</option>
        <option value="text-[24px]">24</option>
      </select>

      <Separator orientation="vertical" className="h-5" />

      <div className="flex gap-3">
        <TextBold
          className="w-4 h-4 cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() =>
            handleChange("bold", textProps.bold ? "" : "font-bold")
          }
        />
        <TextItalic
          className="w-4 h-4 cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() =>
            handleChange("italic", textProps.italic ? "" : "italic")
          }
        />
        <TextUnderline
          className="w-4 h-4 cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() =>
            handleChange("underline", textProps.underline ? "" : "underline")
          }
        />
      </div>

      <Separator orientation="vertical" className="h-4" />

      <div className="flex gap-3">
        <TextalignLeft
          className="w-4 h-4 cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => handleChange("alignment", "")}
        />
        <TextalignCenter
          className="w-4 h-4 cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => handleChange("alignment", "text-center")}
        />
        <TextalignRight
          className="w-4 h-4 cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => handleChange("alignment", "text-right")}
        />
        <TextalignJustifycenter
          className="w-4 h-4 cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => handleChange("alignment", "text-justify")}
        />
      </div>
    </div>
  );
};
