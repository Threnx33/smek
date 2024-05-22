import { RootState } from "@/redux";
import {
  resetCanvasToAdd,
  setEditingElement,
  setElements,
  setPrintCanvas,
  setSelectedElement,
} from "@/redux/reducers/designer";
import {
  clearHistoryState,
  pushAction,
  setActionToDo,
} from "@/redux/reducers/history";
import { TextProps } from "@/redux/reducers/richText";
import html2canvas from "html2canvas";
import { Trash } from "iconsax-react";
import Konva from "konva";
import React, { useEffect, useRef, useState } from "react";
import { Image as KonvaImage, Layer, Stage, Transformer } from "react-konva";
import { useDispatch, useSelector } from "react-redux";
import { EditingDiv } from "./editingDiv";

export interface IElement {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  isText: boolean;
  image: string;
  text: string;
  textProps: TextProps;
}

export const StageComponent: React.FC = () => {
  const editingDivRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const {
    elements,
    selectedElement,
    editingElement,
    canvasToAdd,
    printCanvas,
  } = useSelector((state: RootState) => state.designer);
  const [dragStartXY, setDragStartXY] = useState({ x: 0, y: 0 });
  const [transformStart, setTransformStart] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    r: 0,
  });

  const textProps = useSelector((state: RootState) => state.richText);
  const { actionToDo } = useSelector((state: RootState) => state.history);

  //undo redo
  useEffect(() => {
    const undoRedo = async () => {
      switch (actionToDo?.actionType) {
        case "add":
          dispatch(setElements([...elements, actionToDo.value]));
          break;
        case "delete":
          dispatch(setSelectedElement(null));
          dispatch(setEditingElement(null));
          dispatch(
            setElements(elements.filter((el) => el.id !== actionToDo.value)),
          );
          break;
        case "update":
          dispatch(setSelectedElement(null));
          dispatch(setEditingElement(null));
          const element = { ...actionToDo.value };

          if (element.isText) await updateElementImage(element);

          const newElements = elements.map((el) =>
            el.id === element.id ? element : el,
          );
          dispatch(setElements(newElements));
          break;
      }
      dispatch(setActionToDo(null));
    };

    if (actionToDo) {
      undoRedo();
    }
  }, [actionToDo]);

  //setting text properties
  useEffect(() => {
    if (divRef.current && editingDivRef.current && editingElement) {
      editingDivRef.current.focus();
      const classList = Object.values(textProps).join(" ");
      editingDivRef.current.className = classList;
      editingDivRef.current.style.height = "auto";
      dispatch(setEditingElement({ ...editingElement, textProps }));
    }
  }, [textProps]);

  //adding text or image to canvas
  useEffect(() => {
    if (canvasToAdd && canvasToAdd.isText !== null) {
      addElement(
        canvasToAdd.isText,
        canvasToAdd.fontSize || "",
        canvasToAdd.imageUrl || "",
      );
      dispatch(resetCanvasToAdd());
    }
  }, [canvasToAdd]);

  //printing canvas
  useEffect(() => {
    const printCanvasImg = async () => {
      if (editingElement) {
        editingDivRef.current?.blur();
        return;
      }
      if (selectedElement && transformerRef.current) {
        transformerRef.current.nodes([]);
        dispatch(setSelectedElement(null));
        return;
      }
      if (!stageRef.current) return;
      const img = await html2canvas(stageRef.current.container(), { scale: 4 });
      const dataUrl = img.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "design.png";
      link.click();
      dispatch(setPrintCanvas(false));
    };

    if (printCanvas) {
      printCanvasImg();
    }
  }, [
    printCanvas,
    selectedElement,
    editingElement,
    transformerRef.current,
    stageRef.current,
  ]);

  const updateElementImage = async (element: IElement) => {
    if (divRef.current === null) return;
    divRef.current.innerText = element.text;
    const className = Object.values(element.textProps).join(" ");
    divRef.current.className = className;
    divRef.current.style.width = `${element.width}px`;
    divRef.current.style.height = "auto";
    element.height = divRef.current.scrollHeight;

    const data = await html2canvas(divRef.current, {
      y: 6.5,
      backgroundColor: null,
    });

    const dataUrl = data.toDataURL("image/png");
    element.image = dataUrl;
  };

  const addElement = async (
    isText: boolean,
    fontSize: string,
    imageUrl: string,
  ) => {
    let width = 150;
    let height = 0;
    if (!isText) {
      let img = new window.Image();
      await new Promise((resolve) => {
        img!.onload = () => {
          resolve(img);
        };
        img!.src = imageUrl;
      });
      width = img.width;
      height = img.height;
    }
    const id = Date.now().toString();
    const newElement: IElement = {
      id,
      x: 0,
      y: 0,
      width: width,
      height: height,
      rotation: 0,
      isText,
      image: imageUrl,
      text: isText ? "Double-click to edit" : "",
      textProps: {
        fontStyle: "",
        fontSize: fontSize,
        bold: "",
        italic: "",
        underline: "",
        alignment: "",
      },
    };

    if (isText) {
      await updateElementImage(newElement);

      dispatch(setElements([...elements, newElement]));
    } else {
      dispatch(setElements([...elements, newElement]));
    }
    dispatch(
      pushAction({
        undo: { actionType: "delete", value: newElement.id },
        redo: { actionType: "add", value: newElement },
      }),
    );
  };

  useEffect(() => {
    if (selectedElement && transformerRef.current && stageRef.current) {
      const selectedNode = stageRef.current.findOne(`#${selectedElement.id}`);
      if (!selectedNode) {
        transformerRef.current.nodes([]);
      } else {
        transformerRef.current.nodes([selectedNode]);
      }
      const layer = transformerRef.current.getLayer();
      if (layer) layer.batchDraw();
    }
  }, [selectedElement, transformerRef.current, stageRef.current]);

  useEffect(() => {
    return () => {
      dispatch(setSelectedElement(null));
      dispatch(setElements([]));
      dispatch(setEditingElement(null));
      dispatch(clearHistoryState());
    };
  }, []);

  return (
    <div>
      <Stage
        width={490}
        height={580}
        className="bg-white"
        ref={stageRef}
        onMouseDown={(e) => {
          if (e.target === e.target.getStage()) {
            dispatch(setSelectedElement(null));
            if (editingElement) {
              editingDivRef.current?.blur();
              dispatch(setEditingElement(null));
            }
          }
        }}
      >
        <Layer>
          {elements.map((el) => (
            <React.Fragment key={el.id}>
              <KonvaImage
                id={el.id}
                image={(() => {
                  const img = new window.Image();
                  img.src = el.image;
                  return img;
                })()}
                x={editingElement?.id === el.id ? -9999 : el.x}
                y={editingElement?.id === el.id ? -9999 : el.y}
                width={el.width}
                height={el.height}
                rotation={el.rotation}
                draggable
                onMouseDown={() => dispatch(setSelectedElement(el))}
                onDblClick={(e) => {
                  if (!el.isText) return;
                  dispatch(setSelectedElement(null));
                  dispatch(setEditingElement(el));
                  if (editingDivRef.current) {
                    editingDivRef.current.innerText = el.text;
                    editingDivRef.current.focus();
                  }
                }}
                onDragStart={(e) => {
                  const { x, y } = e.target.position();
                  setDragStartXY({ x, y });
                }}
                onDragMove={(e) => {
                  const { x, y } = e.target.position();
                  const newElement = { ...el, x, y };
                  dispatch(setSelectedElement(newElement));
                  dispatch(
                    setElements(
                      elements.map((item) =>
                        item.id === el.id ? newElement : item,
                      ),
                    ),
                  );
                }}
                onDragEnd={(e) => {
                  const oldElement = {
                    ...el,
                    x: dragStartXY.x,
                    y: dragStartXY.y,
                  };
                  dispatch(
                    pushAction({
                      undo: { actionType: "update", value: oldElement },
                      redo: { actionType: "update", value: selectedElement! },
                    }),
                  );
                }}
                onTransformStart={(e) => {
                  const node = e.target;
                  if (!el.isText) {
                    setTransformStart({
                      x: node.x(),
                      y: node.y(),
                      w: node.width(),
                      h: node.height(),
                      r: node.rotation(),
                    });
                  }
                }}
                onTransform={(e) => {
                  const node = e.target;
                  if (!el.isText) {
                    const newElement = {
                      ...el,
                      x: node.x(),
                      y: node.y(),
                      width: node.width() * node.scaleX(),
                      height: node.height() * node.scaleY(),
                      rotation: node.rotation(),
                    };
                    node.scaleX(1);
                    node.scaleY(1);
                    dispatch(
                      setElements(
                        elements.map((item) =>
                          item.id === el.id ? newElement : item,
                        ),
                      ),
                    );
                    dispatch(setSelectedElement(newElement));
                  }
                }}
                onTransformEnd={(e) => {
                  if (!selectedElement) return;
                  const node = e.target;
                  const oldElement = {
                    ...el,
                    x: transformStart.x,
                    y: transformStart.y,
                    rotation: transformStart.r,
                    width: transformStart.w,
                    height: transformStart.h,
                  };
                  const newElement = {
                    ...selectedElement,
                    x: node.x(),
                    y: node.y(),
                    width: node.width(),
                    height: node.height(),
                    rotation: node.rotation(),
                  };

                  dispatch(
                    pushAction({
                      undo: { actionType: "update", value: oldElement },
                      redo: { actionType: "update", value: newElement },
                    }),
                  );
                }}
                onMouseEnter={(e) => {
                  const container = e.target.getStage()?.container();
                  if (container) container.style.cursor = "pointer";
                }}
                onMouseLeave={(e) => {
                  const container = e.target.getStage()?.container();
                  if (container) container.style.cursor = "default";
                }}
              />
            </React.Fragment>
          ))}

          {selectedElement && (
            <Transformer
              boundBoxFunc={(oldBox, newBox) => {
                if (newBox.width < 10 || newBox.height < 10) {
                  return oldBox;
                }
                return newBox;
              }}
              rotateEnabled={!selectedElement.isText}
              resizeEnabled={!selectedElement.isText}
              ref={transformerRef}
              borderDash={[4, 1.5]}
              anchorStrokeDash={[4, 1.5]}
              borderStroke="black"
              anchorStroke="black"
            />
          )}
        </Layer>
      </Stage>
      <EditingDiv
        divRef={divRef}
        editingDivRef={editingDivRef}
        stageRef={stageRef}
        updateElementImage={updateElementImage}
      />
      {selectedElement && stageRef.current && (
        <div
          className="flex"
          style={{
            position: "absolute",
            left:
              stageRef.current.container().offsetLeft +
              selectedElement.x +
              selectedElement.width +
              30,
            top:
              stageRef.current.container().offsetTop +
              selectedElement.y +
              selectedElement.height / 2,
            transform: `translate(-50%, -50%)`,
            background: "transparent",
          }}
        >
          <div
            className="cursor-pointer rounded-full bg-black p-2"
            onClick={() => {
              const newElements = elements.filter(
                (el) => el.id !== selectedElement.id,
              );
              dispatch(setSelectedElement(null));
              dispatch(setElements(newElements));

              dispatch(
                pushAction({
                  undo: { actionType: "add", value: selectedElement },
                  redo: { actionType: "delete", value: selectedElement.id },
                }),
              );
            }}
          >
            <Trash color="white" className="h-3.5 w-3.5" />
          </div>
        </div>
      )}

      <div
        ref={divRef}
        style={{
          overflowWrap: "break-word",
          backgroundColor: "transparent",
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          padding: "0px",
          margin: "0px",
        }}
      ></div>
    </div>
  );
};
