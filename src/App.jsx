import React, { useEffect } from "react";
import Langugae from "./companents/langugae";
import TextContainer from "./companents/text-container";
import Button from "./companents/button";
import { useDispatch } from "react-redux";
import { getLanguages } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);
  return (
    <div className="bg-zinc-900 min-h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center py-5">
        <h1 className=" text-4xl text-center font-semibold mb-7">Çeviri+</h1>

        <Langugae />
        <TextContainer />
        <Button />
      </div>
    </div>
  );
};

export default App;
