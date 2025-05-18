import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { transtlateText } from "../redux/actions";

const Button = () => {
  const { texttoTranslate } = useSelector((store) => store.translateReducer);
  const dispacth = useDispatch();
  return (
    <button
      disabled={texttoTranslate.trim() === ""}
      onClick={() => dispacth(transtlateText())}
      className="bg-zinc-700 text-center py-3 px5 rounded-md font-semibold hover:ring-2 hover:bg-zinc-900 transition mt-3 cursor-pointer disabled:brightness-50"
    >
      Çevir
    </button>
  );
};

export default Button;
