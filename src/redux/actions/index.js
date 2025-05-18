import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

//asenkron aksiyon
export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    //api isteği at
    const res = await api.get("/languages");

    //aksiyonun payload'u olacak değeri return et
    return res.data.languages;
  }
);

//asekron aksiyon
export const transtlateText = createAsyncThunk(
  "translate/translateText",
  async (_, { getState }) => {
    //getState aksiyon içeresinden store'daki verilere erişme
    const { translateReducer } = getState();

    console.log(translateReducer);

    //api isteği at
    const res = await api.post("", {
      q: translateReducer.texttoTranslate,
      source: translateReducer.sourceLang.value,
      target: translateReducer.targetLang.value,
    });

    //aksiyonun payload'ı olucak değeri return et

    return res.data.data.translations.translatedText[0];
  }
);
