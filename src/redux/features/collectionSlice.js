import { createSlice } from "@reduxjs/toolkit";
import { Slide, Zoom } from "react-toastify";
import { toast } from "react-toastify";
const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection(state, action) {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
        
      }
    },

    removeCollection(state, action) {
        
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
      console.log(state.items);
      
    },

    clearCollection(state) {
      state.items = [];
      localStorage.clear("collection");
    },

    addedToast() {
      toast.success("Added to collection✅ !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },

    errorToast() {
      toast.error(" Removed item from Collection ❌!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const { addCollection, removeCollection, clearCollection, addedToast,errorToast } =
  collectionSlice.actions;
export default collectionSlice.reducer;
