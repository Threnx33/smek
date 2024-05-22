import { RootState } from "@/redux";
import { setEditingElement, setElements } from "@/redux/reducers/designer";
import { clearTextProps, setTextProps } from "@/redux/reducers/richText";
import Konva from "konva";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IElement } from "..";

type EditingDivType = {
  editingDivRef: React.RefObject<HTMLDivElement>;
  divRef: React.RefObject<HTMLDivElement>;
  stageRef: React.RefObject<Konva.Stage>;
  updateElementImage: (element: IElement) => void;
};

export const EditingDiv = ({
  editingDivRef,
  divRef,
  stageRef,
  updateElementImage,
}: EditingDivType) => {
  const dispatch = useDispatch();
  const textProps = useSelector((state: RootState) => state.richText);
  const { elements, editingElement } = useSelector(
    (state: RootState) => state.designer
  );

  useEffect(() => {
    if (editingElement) {
      dispatch(setTextProps(editingElement.textProps));
    } else {
      dispatch(clearTextProps());
    }
    return () => {
      dispatch(clearTextProps());
    };
  }, [editingElement]);

  const handleTextareaBlur = async (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      e.relatedTarget?.id === "fontStyle" ||
      e.relatedTarget?.id === "fontSize"
    ) {
      e.preventDefault();
      return;
    }
    if (editingElement && editingDivRef.current && divRef.current) {
      const htmlText = editingDivRef.current.innerText;
      editingDivRef.current.style.height = "auto";
      const height = editingDivRef.current.scrollHeight;

      const updatedEl = {
        ...editingElement,
        text: htmlText,
        height,
        textProps,
      };
      await updateElementImage(updatedEl);
      dispatch(
        setElements(
          elements.map((item) =>
            item.id === editingElement.id ? updatedEl : item
          )
        )
      );
      dispatch(setEditingElement(null));
    }
  };

  return (
    <div
      contentEditable
      ref={editingDivRef}
      style={{
        backgroundColor: "transparent",
        resize: "none",
        outline: "none",
        border: "1px dashed black",
        padding: "0",
        margin: "0",
        position: "absolute",
        top: editingElement
          ? editingElement.y + stageRef.current!.container().offsetTop
          : "-9999px",
        left: editingElement
          ? editingElement.x + stageRef.current!.container().offsetLeft
          : "-9999px",
        width: editingElement ? editingElement.width : 0,
        overflow: "hidden",
      }}
      onInput={(e) => {
        const target = e.target as HTMLDivElement;
        target.style.height = `${target.scrollHeight}px`;
      }}
      className={`p-0 m-0`}
      onBlur={handleTextareaBlur}
    />
  );
};
