import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { setSource, setTarget, swap } from "../redux/slices/translateSlice";

const Langugae = () => {
  const dispatch = useDispatch();
  const { isLoading, languages } = useSelector(
    (store) => store.languageReducer
  );
  const { sourceLang, targetLang } = useSelector(
    (store) => store.translateReducer
  );

  //api'dan gelen dizinin formatını çevir nesnelerdeki language değerlerini valuye name değerlerini label'a çevir
  const formatted = languages?.map((item) => ({
    value: item.language,
    label: item.name,
  }));

  //Dili algıla seçeneği
  const detect = { value: undefined, label: "Dili Algıla" };
  return (
    <div className="flex gap-2 text-black justify-center ">
      <Select
        value={sourceLang}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={[detect, ...formatted]}
        className="w-[150px]"
        onChange={(lang) => {
          if (lang.value === targetLang.value) {
            dispatch(swap());
            return;
          }
          dispatch(setSource(lang));
        }}
      />

      <button
        disabled={sourceLang.value === undefined}
        onClick={() => {
          dispatch(swap());
        }}
        className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white cursor-pointer disabled:opacity-60"
      >
        Değiş
      </button>
      <Select
        value={targetLang}
        isDisabled={isLoading}
        isLoading={isLoading}
        options={formatted}
        className="w-[150px]"
        onChange={(lang) => {
          if (lang.value === sourceLang.value) {
            dispatch(swap());
          }
          dispatch(setTarget(lang));
        }}
      />
    </div>
  );
};

export default Langugae;
