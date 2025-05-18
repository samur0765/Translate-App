import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/slices/translateSlice";
import Loader from "./loader";

const TextContainer = () => {
  const { isLoading, translateText, texttoTranslate } = useSelector(
    (store) => store.translateReducer
  );
  const dispacth = useDispatch();
  return (
    <div className="flex gap-3 mt-5 md:gap-[105px] max-md:flex-col">
      <div className="flex-1">
        <textarea
          value={texttoTranslate}
          className="w-full min-h-[250px] max-h-[500px] text-black text-[20px] rounded p-[10px] bg-zinc-200"
          onChange={(e) => dispacth(setText(e.target.value))}
        ></textarea>
      </div>
      <div className="flex-1 relative">
        <textarea
          value={translateText}
          disabled
          className="w-full min-h-[250px] max-h-[500px] text-zinc-200 text-[20px] rounded p-[10px] bg-zinc-800"
        ></textarea>
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default TextContainer;
