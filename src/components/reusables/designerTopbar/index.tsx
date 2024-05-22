import { SearchBarChip } from "@/components/reusables/searchBarChip";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { setPrintCanvas } from "@/redux/reducers/designer";
import { redo, undo } from "@/redux/reducers/history";
import { AddSquare, ArrowLeft } from "iconsax-react";
import { Redo2, Undo2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RichTextToolbar } from "./richTextToolbar";

type DesignerTopbarProps = {
  drawer: React.ReactNode;
};

export const DesignerTopbar = ({ drawer }: DesignerTopbarProps) => {
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [debounceUndoRedo, setDebounceUndoRedo] = useState(false);

  function handleOnSeachChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (debounceUndoRedo) {
      const timer = setTimeout(() => {
        setDebounceUndoRedo(false);
      }, 150);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [debounceUndoRedo]);

  return (
    <div className="shadow-b-sm min-w-screen flex items-center border-b-[0.5px] px-2 py-4 md:px-4">
      {/* <DesignerDrawer className="shrink-0 lg:hidden" /> */}
      <div className="flex w-full items-center gap-2 px-1.5 md:gap-4">
        <div className="xl:hidden">{drawer}</div>

        <ArrowLeft
          className={`hidden h-5 w-5 cursor-pointer xl:block`}
          onClick={() => navigate("/dashboard")}
        />

        <SearchBarChip
          placeholder="Enter design name"
          handleOnChange={handleOnSeachChange}
        />
        <RichTextToolbar />

        <div className="ml-auto flex items-center gap-2 md:gap-4">
          <Undo2
            onClick={() => {
              if (debounceUndoRedo) return;
              setDebounceUndoRedo(true);
              dispatch(undo());
            }}
            className="h-5 w-5 cursor-pointer "
          />
          <Redo2
            onClick={() => {
              if (debounceUndoRedo) return;
              setDebounceUndoRedo(true);
              dispatch(redo());
            }}
            className="h-5 w-5 cursor-pointer "
          />
          <div
            className=""
            onClick={() => {
              dispatch(setPrintCanvas(true));
            }}
          >
            <Button>
              <AddSquare className="h-5 w-5 md:hidden" />
              <span className="hidden md:block">Save design</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
