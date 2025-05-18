import { createSlice } from "@reduxjs/toolkit";
import { transtlateText } from "../actions";
const initialState = {
  isLoading: false,
  sourceLang: { value: undefined, label: "Dili algıla" }, //kaynak dil
  targetLang: { value: "en", label: "English" }, //hedef dil
  texttoTranslate: "", //çevrilecek metin
  translateText: "", //çevrilmiş metin
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    //senkron aksiyonları buradan yönetiriz
    setSource: (state, action) => {
      state.sourceLang = action.payload;
    },
    setTarget: (state, action) => {
      state.targetLang = action.payload;
    },
    setText: (state, action) => {
      state.texttoTranslate = action.payload;
    },
    swap: (state) => {
      //state'lerin şu ani değerlerini değişkene aktar
      const currentSource = state.sourceLang;
      const currentTarget = state.targetLang;
      const currentText = state.texttoTranslate;
      const currentTranslate = state.translateText;

      //state'leri değiştir
      state.sourceLang = currentTarget;
      state.targetLang = currentSource;
      state.texttoTranslate = currentTranslate;
      state.translateText = currentText;
    },
  },
  extraReducers: (builder) => {
    //asenkron aksiyonları buradan yönetiriz
    builder.addCase(transtlateText.pending, (state) => {
      state.isLoading = true;
      state.translateText = "";
    });
    builder.addCase(transtlateText.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(transtlateText.fulfilled, (state, action) => {
      state.isLoading = false;
      state.translateText = action.payload;
    });
  },
});

export const { setSource, setTarget, setText, swap } = translateSlice.actions;

export default translateSlice.reducer;
